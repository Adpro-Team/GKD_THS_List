import fs from 'node:fs/promises';

export const writeReadMeMd = async() => {
  let listFile = await fs.readFile(process.cwd() + '/list.json', 'utf-8');
  const subListJSON = JSON.parse(listFile);
  let list = `- `;
  for(let i in subListJSON){
    if(subListJSON[i].active == false) list += '*';
    if(subListJSON[i].repo == '') list += `${subListJSON[i].name}`;
    else list += `[${subListJSON[i].name}](https://github.com/${subListJSON[i].repo}/tree/${subListJSON[i].branch})`;
    list += ` By ${subListJSON[i].author}`;
    for(let j in subListJSON[i].subUrls[j]){
      const urlName = subListJSON[i].subUrls[j].hasOwnProperty('name') ? subListJSON[i].subUrls[j].name : '订阅链接';
      list += `[${urlName}](${subListJSON[i].subUrls[j].importUrl}) `;
    }
  }
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate.replaceAll('--thirdPartySubList--', list);
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
}
writeReadMeMd();