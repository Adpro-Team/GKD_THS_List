import { Root } from './scripts/types'

export const List: Root = [
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
        name: 'Gitee源（国内）',
        importUrl: 'https://gitee.com/adpro/GKD_subscription/raw/main/dist/Adpro_gkd.json5',
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
      {
        name: 'gitmirror源（国内）',
        importUrl: 'https://raw.gitmirror.com/ganlinte/GKD-subscription/main/dist/ganlin_gkd.json5',
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
    name: 'YaChengMu的GKD订阅',
    author: 'YaChengMu',
    id: 303,
    subUrls: [
      {
        name: 'gitmirror源（国内）',
        defaultUpdateUrl: true,
        importUrl: 'https://raw.gitmirror.com/YaChengMu/subscription/main/dist/gkd.json5',
      },
    ],
    repo: 'YaChengMu/subscription',
    branch: 'main',
    active: true,
  },
  {
    name: "田所浩二的GKD订阅",
    author: "たどころ こうじ",
    id: 114514,
    subUrls: [
      {
        name: "gitmirror源（国内）",
        defaultUpdateUrl: true,
        importUrl:
          "https://raw.gitmirror.com/gkd-sub-repo/114514_subscription/main/dist/114514_gkd.json5",
      },
    ],
    repo: "gkd-sub-repo/114514_subscription",
    branch: "main",
    active: true,
  },
];
