import List from "../list";
import fs from 'node:fs/promises';

export const writeReadMeMd = async() => {
  let list = ``;
  List.forEach((a)=>{
    let repository = a.repo == undefined ? null : a.repo;
    let branch = repository == null ? null : a.branch;
    let repoUrl = repository != null && branch != null ? `https://github.com/${a.repo}/tree/${a.branch}` : null;
    let repoText = repoUrl == null ? '无' : a.repo;
    list += `|${a.name}|${String(a.id)}|${a.author}|`;
    list += a.prescribedUpdateUrl == undefined || a.prescribedUpdateUrl ? '由订阅内部规定链接更新|' : '从导入链接更新|';
    list += repoText == '无' ? `${repoText}|` : `[${repoText}](${repoUrl})|<ul>`;
    const subUrls = a.subUrls;
    subUrls.forEach((b)=>{
      let index = 1;
      const urlName = (b.hasOwnProperty('name') ? b.name : `订阅链接${String(index)}`) + (b.defaultUpdateUrl ? '（内置的更新链接）' : '');
      let url = `https://github.com/Adpro-Team/GKD_THS_List/blob/main/importUrlsList.md#${a.name}-${urlName}`;
      url = url.replace(/ /g,'-').replace(/[\uFF08-\uFF09]/g,'');
      list += `<li>[${urlName}](${url})</li><br>`;
      index++;
    });
    list += a.active == true ? '</ul>|仍在维护|' : '</ul>|停止维护|';
    list +='\r';
  });
  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate.replace('--thirdPartySubList--', list);
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
};

export const writeUrlListMd = async() => {
  let list = ``;
  List.forEach((a)=>{
    list += `# ${a.name}\r`;
    const subUrls = a.subUrls;
    subUrls.forEach((b)=>{
      let index = 1;
      const urlName = (b.hasOwnProperty('name') ? `${a.name}-${b.name}` : `${a.name}-订阅链接${String(index)}`) + (b.defaultUpdateUrl ? '（内置的更新链接）' : '');
      list += `## ${urlName}\r`;
      list += `\`\`\`text\r${b.importUrl}\r\`\`\`\r`;
      index++;
    });
  });
  await fs.writeFile(process.cwd() + '/importUrlsList.md', list);
}