import { Root, IArray } from "./types";
import { List } from "../list";

const iArrayToArray = <T>(array: IArray<T> = []): T[] => {
  return Array<T>().concat(array);
};

export const check = ()=>{
  const ListArray = iArrayToArray(List);
  let id: number[] = [];
  ListArray.forEach((a)=>{
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

    if(temp.indexOf(id[i]) != -1 && ListArray[i].duplicate !== true){
      throw new Error('Can not add the subscription that has same ids.');
      return
    }
    else temp.push(id[i]);
  }
  console.log('list.ts合法');
};
check();