import List from "../list";

export const check = ()=>{
  let id: number[] = [];
  List.forEach((a)=>{
    id.push(a.id);
    if((!a.repo && a.branch) || (a.repo && !a.branch)){
      throw new Error('repo and branch must exist or not exist at the same time.');
      return
    }
  });
  let temp: number[] = [];
  for(let i = 0; i < id.length; i++){
    if(id[i] <= 0){
      throw new Error('Id can not be negative number or zero.');
      return
    }

    if(temp.indexOf(id[i]) != -1 && List[i].duplicate !== true){
      throw new Error('Can not add the subscription that has same ids.');
      return
    }
    else temp.push(id[i]);
  }
  console.log('list.ts合法');
};
check();