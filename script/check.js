import fs from 'node:fs/promises';

export const check = async() => {
  let listFile = await fs.readFile(process.cwd() + '/list.json', 'utf-8');
  const subListJSON = JSON.parse(listFile);
  for(let i in subListJSON){
    if(subListJSON[i].name == ''){
      throw new Error('The value of name is empty');
    }
    if(subListJSON[i].author == ''){
      throw new Error('The value of author is empty');
    }
    if(subListJSON[i].subUrl == ''){
      throw new Error('Can not find the subscription import url');
    }
    if(subListJSON[i].active != true && subListJSON[i].active != false){
      throw new Error('The value of active is not a boolen value');
    }
    if((subListJSON[i].repo == '' && subListJSON[i].branch != '') || (subListJSON[i].repo != '' && subListJSON[i].branch == '')){
      throw new Error('The values of repo and branch must be empty or completed at the same time');
    }
  }
}
check();