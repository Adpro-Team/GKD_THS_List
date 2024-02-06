import fs from 'node:fs/promises';

export const writeReadMeMd = async() => {
  let listFile = await fs.readFile(process.cwd() + '/list.json', 'utf-8');
  const subListJSON = JSON.parse(listFile);
  let list = ``;
  for(let i in subListJSON){
    if(subListJSON[i].repo  != '' && subListJSON[i].branch != ''){
      if(subListJSON[i].active == false){
        list += `- ~~[${subListJSON[i].name}](https://github.com/${subListJSON[i].repo}/tree/${subListJSON[i].branch}) By ${subListJSON[i].author} [订阅链接](${subListJSON[i].subUrl})~~<br>\n`;
      }
      else{
        list += `- [${subListJSON[i].name}](https://github.com/${subListJSON[i].repo}/tree/${subListJSON[i].branch}) By ${subListJSON[i].author} [订阅链接](${subListJSON[i].subUrl})<br>\n`;
      }
    }
    else if(subListJSON[i].repo  == '' && subListJSON[i].branch == ''){
      if(subListJSON[i].active == false){
        list += `- *~~${subListJSON[i].name} By ${subListJSON[i].author} [订阅链接](${subListJSON[i].subUrl})~~<br>\n`;
      }
      else list += `- *${subListJSON[i].name} By ${subListJSON[i].author} [订阅链接](${subListJSON[i].subUrl})<br>\n`;
    }
  }
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate.replaceAll('--thirdPartySubList--', list);
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
}
writeReadMeMd();