import fs from 'node:fs/promises';

export const writeReadMeMd = async() => {
  let listFile = await fs.readFile(process.cwd() + '/list.json', 'utf-8');
  const subListJSON = JSON.parse(listFile);
  let list = ``;
  for(let i in subListJSON){
    let repository = subListJSON[i].repo == '' ? null : subListJSON[i].repo;
    let branch = repository == null ? null : subListJSON[i].branch;
    let repoUrl = repository != null && branch != null ? `https://github.com/${subListJSON[i].repo}/tree/${subListJSON[i].branch}` : null;
    let repoText = repoUrl == null ? '无' : subListJSON[i].repo;
    list += `|${subListJSON[i].name}|${subListJSON[i].author}|`;
    list += repoText == '无' ? `${repoText}|` : `[${repoText}](${repoUrl})|<ul>`;
    for(let j in subListJSON[i].subUrls){
      const urlName = subListJSON[i].subUrls[j].hasOwnProperty('name') ? subListJSON[i].subUrls[j].name : '订阅链接';
      list += `<li>[${urlName}](https://github.com/Adpro-Team/GKD_THS_List/blob/main/importUrlsList.md#${urlName})</li><br>`;
    }
    list += subListJSON[i].active == true ? '</ul>|仍在维护|' : '</ul>|停止维护|';
    list +='\r';
  }
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate.replaceAll('--thirdPartySubList--', list);
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
}

export const writeUrlListMd = async() => {
  let listFile = await fs.readFile(process.cwd() + '/list.json', 'utf-8');
  const subListJSON = JSON.parse(listFile);
  let list = ``;
  for(let i in subListJSON){
    list += `# ${subListJSON[i].name}\r`;
    for(let j in subListJSON[i].subUrls){
      const urlName = subListJSON[i].subUrls[j].hasOwnProperty('name') ? subListJSON[i].subUrls[j].name : '订阅链接';
      list += `## ${urlName}\r`;
      list += `
        \`\`\`text
        ${subListJSON[i].subUrls[j].importUrl}
        \`\`\`\r
      `;
    }
  }
  const mdTemplate = await fs.readFile(process.cwd() + '/importUrlsList.md', 'utf-8');
  const readMeMdText = mdTemplate.replaceAll('--thirdPartySubList--', list);
  await fs.writeFile(process.cwd() + '/importUrlsList.md', mdTemplate);
}

writeReadMeMd();
writeUrlListMd();