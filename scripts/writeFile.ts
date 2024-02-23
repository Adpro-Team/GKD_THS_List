import { Root, IArray } from "./types";
import { List } from "../list";
import fs from 'node:fs/promises';

const iArrayToArray = <T>(array: IArray<T> = []): T[] => {
  return Array<T>().concat(array);
};

export const writeReadMeMd = async() => {
  let list = ``;
  const ListArray = iArrayToArray(List);
  ListArray.forEach((a)=>{
    let repository = !a.repo ? null : a.repo;
    let branch = repository == null ? null : a.branch;
    let repoUrl = repository != null && branch != null ? `https://github.com/${a.repo}/tree/${a.branch}` : null;
    let repoText = repoUrl == null ? '无' : a.repo;
    list += `|${a.name}|${String(a.id)}|${a.author}|`;
    list += repoText == '无' ? `${repoText}|` : `[${repoText}](${repoUrl})|<ul>`;
    const subUrlsArray = iArrayToArray(a.subUrls);
    subUrlsArray.forEach((b)=>{
      let index = 1;
      const urlName = b.hasOwnProperty('name') ? b.name : `订阅链接${String(index)}`;
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
  const ListArray = iArrayToArray(List);
  ListArray.forEach((a)=>{
    list += `# ${a.name}\r`;
    const subUrlsArray = iArrayToArray(a.subUrls);
    subUrlsArray.forEach((b)=>{
      let index = 1;
      const urlName = b.hasOwnProperty('name') ? `${a.name}-${b.name}` : `${a.name}-订阅链接${String(index)}`;
      list += `## ${urlName}\r`;
      list += `\`\`\`text\r${b.importUrl}\r\`\`\`\r`;
      index++;
    });
  });
  await fs.writeFile(process.cwd() + '/importUrlsList.md', list);
}