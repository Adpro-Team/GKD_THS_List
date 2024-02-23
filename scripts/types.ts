export type IArray<T> = T | T[];

export type Root = IArray<CommonInfo>;

type CommonInfo = {
  /**
   * 订阅名字，与你的订阅文件里的name字段相同
   */
  name: string;

  /**
   * 订阅作者，与你的订阅文件里的author字段相同
   * 
   * 如果填写了repo，也可以填仓库所有者
   */
  author: string;

  /**
   * 订阅id
   */
  id: number;

  /**
   * 若与现有收录订阅的id存在重复，则填写该字段
   */
  duplicate?: boolean;

  /**
   * 是否为本地订阅
   */
  local?: boolean;

  /**
   * 包含所有订阅链接的数组
   */
  subUrls: IArray<SubUrlsInfo>;

  /**
   * Github仓库名，形如：用户名/仓库名
   */
  repo?: string;

  /**
   * 订阅仓库中的发布分支，无repo，则branch也不能出现
   */
  branch?: string;

  /**
   * 订阅维护状态，维护则为true，停止维护则为false
   */
  active: boolean;
};

type SubUrlsInfo = {
  /**
   * 超链接显示的字段
   */
  name?: string;

  /**
   * 订阅导入链接
   */
  importUrl: string;
};