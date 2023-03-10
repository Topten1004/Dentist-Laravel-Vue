export default [
  {
    title: "HOME",
    icon: "home",
    to: "/",
  },
  {
    title: "Index 歯科技工士",
    icon: "disc",
    to: "/artisan",
  },
  {
    title: "1.1.マイページ",
    icon: "user",
    to: "/mypages/artisan",
  },
  {
    title: "1.2.プロフィール個人版",
    icon: "user",
    to: "/mypages/artisan/myprofile",
  },
  {
    title: "1.3.プロフィール公開版",
    icon: "user",
    to: "/mypages/artisan/profile",
  },

  {
    group: "/mypages/artisan/regist/account",
    model: false,
    icon: "settings",
    title: "(重要)登録",
    children: [
      {
        title: "2.1.アカウント登録更新",
        icon: "users",
        to: "/mypages/artisan/regist/account",
      },
      {
        title: "2.2.所属登録",
        icon: "user-plus",
        to: "/mypages/artisan/regist/job",
      },
      {
        title: "2.3.詳細登録",
        icon: "user-check",
        to: "/mypages/artisan/regist/detail",
      },
      {
        title: "2.4.学会登録",
        icon: "link",
        to: "/mypages/artisan/regist/society",
      },
      {
        title: "2.5.目標値登録",
        icon: "feather",
        to: "/mypages/artisan/regist/target",
      },
    ]
  },
  
  {
    title: "3.スタッフ一覧",
    icon: "users",
    to: "/mypages/artisan/engineer",
  },
  {
    title: "4.1.技工装置撮影",
    icon: "camera",
    to: "/mypages/artisan/snapshot",
  },
  {
    title: "4.2.技工装置 詳細",
    icon: "award",
    to: "/mypages/artisan/productdetail",
  },
  {
    title: "4.3.技工装置 一覧",
    icon: "list",
    to: "/mypages/artisan/productlist",
  },
  {
    title: "4.4.アクセスコード",
    icon: "file-text",
    to: "/mypages/artisan/accesscode",
  },
  {
    title: "4.5.アクセスコード一覧",
    icon: "file-text",
    to: "/mypages/artisan/accesscodelist",
  },
  {
    title: "4.6.治療一覧",
    icon: "award",
    to: "/mypages/artisan/carelist",
  },
  {
    title: "4.7_治療情報 詳細",
    icon: "award",
    to: "/mypages/artisan/caredetail",
  },
  {
    title: "_統計データ",
    icon: "trending-up",
    to: "/mypages/artisan/satistics",
  },
  {
    title: "_笑顔コイン",
    icon: "smile",
    to: "/mypages/artisan/egaocoin",
  },
  {
    title: "_つら〜いコイン",
    icon: "cloud-drizzle",
    to: "/mypages/artisan/tsuraicoin",
  },
  {
    title: "x_検索（サンプル）",
    icon: "search",
    to: "/mypages/artisan/search",
  },
  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/artisan/search/medical",
  },
  { header: "問い合わせ" },
  {
    title: "_問合せ",
    icon: "mail",
    to: "/mypages/artisan/inquiry",
  },

 //ここから CS24 説明用　分岐リンク  -------
 {
   group: "/mypages/",

   model: false,
   icon: "grid",
   title: "x_参照リンク",
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
      title: "歯科技工士",
      icon: "user",
      to: "/artisan",
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
