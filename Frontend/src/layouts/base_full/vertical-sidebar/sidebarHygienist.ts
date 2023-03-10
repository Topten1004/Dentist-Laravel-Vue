export default [
  {
    title: "トップ",
    icon: "home",
    to: "/",
  },
  {
    title: "Index歯科衛生士",
    icon: "user",
    to: "/hygienist",
  },
  {
    title: "M 歯科衛生士",
    icon: "user",
    to: "/mypages/hygienist",
  },
  {
    title: "プロフィール公開版",
    icon: "plus-square",
    to: "/mypages/hygienist/profile",
  },
  {
    title: "プロフィール個人版",
    icon: "plus-square",
    to: "/mypages/hygienist/myprofile",
  },

  //登録関連リンク  -------
 {
  group: "/mypages/hygienist/account",
  model: false,
  icon: "grid",
  title: "重要事項登録",
  children: [
      {
        title: "2.1.アカウント登録更新",
        icon: "upload",
        to: "/mypages/hygienist/regist/account",
      },
      {
        title: "2.2.所属登録",
        icon: "user-plus",
        to: "/mypages/hygienist/regist/job",
      },
      {
        title: "2.3.詳細登録",
        icon: "settings",
        to: "/mypages/hygienist/regist/detail",
      },
      {
        title: "2.4.学会登録",
        icon: "link",
        to: "/mypages/hygienist/regist/society",
      },
      {
        title: "2.5.目標値登録",
        icon: "feather",
        to: "/mypages/hygienist/regist/target",
      },
    ],
  },
  

  {
    title: "_口腔内撮影",
    icon: "camera",
    to: "/mypages/hygienist/snapshot",
  },
  {
    title: "治療一覧",
    icon: "award",
    to: "/mypages/hygienist/carelist",
  },
  {
    title: "_治療情報 詳細",
    icon: "award",
    to: "/mypages/hygienist/caredetail",
  },
  {
    title: "技工記録 一覧",
    icon: "award",
    to: "/mypages/hygienist/productlist",
  },
  {
    title: "_技工記録 詳細",
    icon: "award",
    to: "/mypages/hygienist/productdetail",
  },
  {
    title: "_笑顔コイン",
    icon: "smile",
    to: "/mypages/hygienist/egaocoin",
  },
  {
    title: "_つら〜いコイン",
    icon: "cloud-drizzle",
    to: "/mypages/hygienist/tsuraicoin",
  },
  {
    title: "_統計データ",
    icon: "trending-up",
    to: "/mypages/hygienist/satistics",
  },
  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/hygienist/search/medical",
  },
  { header: "問合せ" },
  {
    title: "_問合せ",
    icon: "mail",
    to: "/mypages/hygienist/inquiry",
  },

  //ここから CS24 説明用　分岐リンク  -------
 {
  group: "/mypages/",

  model: false,
  icon: "grid",
  title: "参照リンク",
  children: [
    {
      title: "歯科衛生士",
      icon: "disc",
      to: "/mypages/hygienist",
    },
    {
      title: "歯科技工所",
      icon: "disc",
      to: "/mypages/labo",
    },
    {
      title: "担当：歯科技工士",
      icon: "user",
      to: "/mypages/artisan",
    },
    {
      title: "歯科医療機関",
      icon: "disc",
      to: "/mypages/clinic",
    },
    {
      title: "歯科医師",
      icon: "disc",
      to: "/mypages/dentist",
    },
    {
      title: "学会",
      icon: "disc",
      to: "/mypages/society",
    },
    {
      title: "患者",
      icon: "disc",
      to: "/mypages/patient",
    },
    {
      title: "総合管理者",
      icon: "disc",
      to: "/mypages/admin",
    },
    
  ],
},
// ----- ここまで

];
