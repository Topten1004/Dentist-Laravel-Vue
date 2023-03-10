export default [
  {
    title: "トップ",
    icon: "home",
    to: "/",
  },
  {
    title: "Index未ログイン",
    icon: "user",
    to: "/society",
  },
  {
    title: "M 学会団体",
    icon: "user",
    to: "/mypages/society",
  },
  
  {
    title: "_会員承認登録",
    icon: "upload",
    to: "/mypages/society/approval",
  },

  {
    group: "/mypages/society/regist/account",
    model: false,
    icon: "user-check",
    title: "登録(重要)",
    children: [
      {
        title: "1.アカウント登録更新",
        icon: "users",
        to: "/mypages/society/regist/account",
      },
    ]
  },

  {
    title: "_笑顔コイン",
    icon: "smile",
    to: "/mypages/society/egaocoin",
  },
  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/society/search/medical",
  },
  { header: "問合せ" },
  {
    title: "_問合せ",
    icon: "mail",
    to: "/mypages/society/inquiry",
  },
  
];
