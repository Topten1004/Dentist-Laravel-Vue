export default [
  {
    title: "Home",
    icon: "home",
    to: "/",
  },
  {
    title: "Index 歯科技工所",
    icon: "grid",
    to: "/labo",
  },
  {
    title: "M 歯科技工所",
    icon: "sunrise",
    to: "/mypages/labo",
  },
  {
    title: "取引先用プロフィール",
    icon: "user",
    to: "/mypages/labo/profile",
  },
  {
    title: "公開用プロフィール",
    icon: "user",
    to: "/mypages/labo/openprofile",
  },
  
  {
    group: "/mypages/labo/regist/account",
    model: false,
    icon: "settings",
    title: "登録(重要)",
    children: [
      {
        title: "2.1.アカウント登録更新",
        icon: "users",
        to: "/mypages/labo/regist/account",
      },
      {
        title: "2.2.技工所詳細登録",
        icon: "user-check",
        to: "/mypages/labo/regist/detail",
      },
      {
        title: "2.3.所属学会登録",
        icon: "award",
        to: "/mypages/labo/regist/society",
      },
      {
        title: "2.4.契約状況・名刺印刷",
        icon: "credit-card",
        to: "/mypages/labo/contract",
      },
    ]
  },
  { header: "取引先登録" },
  {
    title: "2.5.取引先：歯科医療機関",
    icon: "truck",
    to: "/mypages/labo/clientlist",
  },
  // {
  //   title: "スタッフ登録",
  //   icon: "user-plus",
  //   to: "/mypages/labo/regist/affiliation",
  // },
  { header: "スタッフ登録" },
  {
    title: "スタッフ一覧/笑顔コイン付与",
    icon: "users",
    to: "/mypages/labo/engineer",
  },
  {
    title: "就業状況・追加登録",
    icon: "users",
    to: "/mypages/labo/engineerlist",
  },
  {
    title: "__承認・完了:スタッフ",
    icon: "user-plus",
    to: "/mypages/labo/approval",
  },
  {
    title: "__承認・完了:顧客",
    icon: "user-plus",
    to: "/mypages/labo/approval_suppliers",
  },
  
  { header: "技工装置関連" },
  {
    title: "技工装置撮影",
    icon: "camera",
    to: "/mypages/labo/snapshot",
  },
  {
    title: "技工装置 一覧",
    icon: "award",
    to: "/mypages/labo/productlist",
  },
  {
    title: "_技工装置 詳細",
    icon: "award",
    to: "/mypages/labo/productdetail",
  },

  { header: "口腔内画像関連" },
  {
    title: "4.6.治療一覧",
    icon: "award",
    to: "/mypages/labo/carelist",
  },
  {
    title: "4.7_治療情報 詳細",
    icon: "award",
    to: "/mypages/labo/caredetail",
  },

  {
    title: "統計データ",
    icon: "trending-up",
    to: "/mypages/labo/satistics",
  },
  {
    title: "笑顔コイン",
    icon: "smile",
    to: "/mypages/labo/egaocoin",
  },
  {
    title: "つら〜いコイン",
    icon: "cloud-drizzle",
    to: "/mypages/labo/tsuraicoin",
  },

  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/labo/search/medical",
  },
  {
    title: "問合せ",
    icon: "mail",
    to: "/mypages/labo/inquiry",
  },

//ここから CS24 説明用　分岐リンク  -------
// Template素材入り口（参考資料）
 { header : "Template素材入り口" },
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

];
