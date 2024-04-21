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
    active: true,
  },
  {
    name: 'AIsouler的GKD订阅',
    author: 'AIsouler',
    id: 666,
    prescribedUpdateUrl: false,
    subUrls: [
      {
        name: 'npmmirror源（国内）（推荐使用）',
        importUrl:
          'https://registry.npmmirror.com/@aisouler/gkd_subscription/latest/files/dist/AIsouler_gkd.json5',
      },
      {
        name: 'gitmirror源（国内）',
        importUrl: 'https://raw.gitmirror.com/AIsouler/GKD_subscription/main/dist/AIsouler_gkd.json5',
      },
    ],
    repo: 'AIsouler/GKD_subscription',
    branch: 'main',
    active: true,
  },
  {
    name: '奥怪的GKD订阅',
    author: 'aoguai',
    prescribedUpdateUrl: false,
    id: 86,
    subUrls: [
      {
        name: 'Github源',
        importUrl: 'https://raw.githubusercontent.com/aoguai/subscription/custom/dist/aoguai_gkd.json5',
      },
      {
        name: 'npmmirror源（国内）',
        importUrl: 'https://registry.npmmirror.com/@aoguai/subscription/latest/files/dist/aoguai_gkd.json5',
      },
      {
        name: 'gitmirror源（国内）',
        importUrl: 'https://raw.gitmirror.com/aoguai/subscription/custom/dist/aoguai_gkd.json5',
      },
      {
        name: 'jsDelivr源',
        importUrl: 'https://cdn.jsdelivr.net/gh/aoguai/subscription@custom/dist/aoguai_gkd.json5',
      },
    ],
    repo: 'aoguai/subscription',
    branch: 'custom',
    active: true,
  },
  {
    name: '甘霖的GKD订阅',
    author: 'ganlinte',
    id: 233,
    subUrls: [
      {
        name: 'Github源',
        importUrl: 'https://raw.githubusercontent.com/ganlinte/GKD-subscription/main/dist/ganlin_gkd.json5',
      },
      {
        name: 'npmmirror源（国内）',
        defaultUpdateUrl: true,
        importUrl: 'https://registry.npmmirror.com/@ganlinte/gkd-subscription/latest/files',
      },
    ],
    repo: 'ganlinte/GKD-subscription',
    branch: 'main',
    active: true,
  },
  {
    name: 'Jamison Leo的GKD订阅',
    author: 'Jamison Leo',
    id: 1025,
    subUrls: [
      {
        name: 'gitmirror源（国内）',
        defaultUpdateUrl: true,
        importUrl: 'https://raw.gitmirror.com/JamisonLeo/GKD-subscription/main/subscription.json',
      },
    ],
    repo: 'JamisonLeo/GKD-subscription',
    branch: 'main',
    active: false,
  },
  {
    name: '田所浩二的GKD订阅',
    author: 'たどころ こうじ',
    prescribedUpdateUrl: false,
    id: 114514,
    subUrls: [
      {
        name: 'gitmirror源（国内）',
        importUrl: 'https://raw.gitmirror.com/gkd-sub-repo/114514_subscription/main/dist/114514_gkd.json5',
      },
      {
        name: 'npmmirror源（国内）（推荐使用）',
        importUrl: 'https://registry.npmmirror.com/@kunjinkao/gkd-subscription/latest/files/dist/114514_gkd.json5',
      },
      {
        name: 'jsDelivr源',
        importUrl: 'https://cdn.jsdelivr.net/gh/gkd-sub-repo/114514_subscription@main/dist/114514_gkd.json5',
      },
    ],
    repo: 'gkd-sub-repo/114514_subscription',
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
    active: true,
  },
];

export default List;
