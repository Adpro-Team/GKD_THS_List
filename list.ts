import { Root } from './scripts/types'

const List: Root = [
  {
    name: 'Adpro的GKD订阅',
    author: 'Adpro',
    id: 825,
    prescribedUpdateUrl: false,
    subUrls: [
      {
        name: 'gitmirror源（国内）',
        importUrl: 'https://raw.gitmirror.com/Adpro-Team/GKD_subscription/main/dist/Adpro_gkd.json5',
      },
      {
        name: 'npmmirror源（国内）',
        importUrl: 'https://registry.npmmirror.com/@adpro/gkd_subscription/latest/files/dist/Adpro_gkd.json5',
      },
    ],
    repo: 'Adpro-Team/GKD_subscription',
    branch: 'main',
    active: false,
  },
  {
    name: 'AIsouler的GKD订阅',
    author: 'AIsouler',
    id: 666,
    prescribedUpdateUrl: false,
    subUrls: [
      {
        name: 'npmmirror源（国内）',
        importUrl:
          'https://registry.npmmirror.com/@aisouler/gkd_subscription/latest/files/dist/AIsouler_gkd.json5',
      },
      {
        name: 'GitHub源',
        importUrl:
          'https://raw.githubusercontent.com/AIsouler/GKD_subscription/main/dist/AIsouler_gkd.json5',
      },
    ],
    repo: 'AIsouler/GKD_subscription',
    branch: 'main',
    active: false,
  },
  {
    name: '甘霖的GKD订阅',
    author: 'ganlinte',
    prescribedUpdateUrl: false,
    id: 233,
    subUrls: [
      {
        name: 'Github源',
        importUrl: 'https://raw.githubusercontent.com/ganlinte/GKD-subscription/main/dist/ganlin_gkd.json5',
      },
      {
        name: 'npmmirror源（国内）',
        importUrl: 'https://registry.npmmirror.com/@ganlinte/gkd-subscription/latest/files',
      },
    ],
    repo: 'ganlinte/GKD-subscription',
    branch: 'main',
    active: true,
  },
  {
    name: '梦念逍遥の订阅',
    author: '梦念逍遥',
    id: 1,
    subUrls: [
      {
        name: 'npmmirror源（国内）',
        defaultUpdateUrl: true,
        importUrl: 'https://registry.npmmirror.com/gkd-subscription/latest/files',
      },
    ],
    repo: 'MengNianxiaoyao/gkd-subscription',
    branch: 'main',
    active: false,
  },
  {
    name: '九千院的GKD订阅',
    author: 'jiuqianyuan',
    id: 717,
    prescribedUpdateUrl: false,
    subUrls: [
      {
        name: 'gitmirror源（国内）',
        importUrl: 'https://raw.gitmirror.com/jiuqianyuan/GKD_subscription/main/dist/gkd.json5',
      },
    ],
    repo: 'jiuqianyuan/GKD_subscription',
    branch: 'main',
    active: true,
  },
  {
    name: 'Mrlc的GKD订阅',
    author: 'Mrlc',
    id: 2,
    prescribedUpdateUrl: false,
    subUrls: [
      {
        name: 'npmmirror源（国内）',
        importUrl: 'https://registry.npmmirror.com/gkd-mrlc/latest/files/dist/gkd.json5',
      },
    ],
    repo: 'mrlctate/gkd-mrlc',
    branch: 'main',
    active: true,
  },
];

export default List;
