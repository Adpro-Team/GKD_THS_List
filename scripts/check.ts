import List from "../list";

export const check = ()=>{
  let id: number[] = [];
  List.forEach((a)=>{
    if((!a.repo && a.branch) || (a.repo && !a.branch)){
      throw new Error('repo and branch must exist or not exist at the same time.');
    }
    else id.push(a.id);
  });
  let temp: number[] = [];
  for(let i = 0; i < id.length; i++){
    if(id[i] <= 0){
      throw new Error('Id can not be negative number or zero.');
    }
    else temp.push(id[i]);
  }
  console.log('list.ts合法');
};
check();