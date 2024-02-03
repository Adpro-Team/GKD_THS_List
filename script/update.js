import fs from 'node:fs/promises';

export const writeReadMeMd = async() => {
  let listFile = await fs.readFile(process.cwd() + '/list.json', 'utf-8');
  const subListJSON = JSON.parse(listFile);
  let list = ``;
  for(let i in subListJSON){
    if(subListJSON[i].name == ''){
      throw new Error('The value of name is empty');
      continue
    }
    if(subListJSON[i].author == ''){
      throw new Error('The value of author is empty');
      continue
    }
    if(subListJSON[i].subUrl == ''){
      throw new Error('Can not find the subscription import url');
      continue
    }
    if(subListJSON[i].repo  != '' && subListJSON[i].branch != ''){
      list += `- [${subListJSON[i].name}](https://github.com/${subListJSON[i].repo}/tree/${subListJSON[i].branch}) By ${subListJSON[i].author}<br>\n`;
    }
    else if(subListJSON[i].repo  == '' && subListJSON[i].branch == ''){
      list += `- *[${subListJSON[i].name}](${subListJSON[i].subUrl}) By ${subListJSON[i],author}<br>\n`;
    }
    else{
      throw new Error('The values of repo and branch must be empty or completed at the same time');
      continue
    }
  }
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate.replaceAll('--thirdPartySubList--', list);
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
}
writeReadMeMd();