export default [
  {
    title: "Home",
    icon: "home",
    to: "/",
  },
  {
    title: "歯科医療機関Top",
    icon: "plus-square",
    to: "/clinic",
  },
  {
    title: "M 歯科医療機関",
    icon: "plus-square",
    to: "/mypages/clinic",
  },
  {
    title: "プロフィール公開版",
    icon: "plus-square",
    to: "/mypages/clinic/profile",
  },
  {
    group: "/mypages/clinic/regist/account",
    model: false,
    icon: "settings",
    title: "登録(重要)",
    children: [
      {
        title: "1.アカウント登録更新",
        icon: "users",
        to: "/mypages/clinic/regist/account",
      },
      {
        title: "2.医療機関詳細登録",
        icon: "user-check",
        to: "/mypages/clinic/regist/detail",
      },
      {
        title: "3.所属学会登録",
        icon: "award",
        to: "/mypages/clinic/regist/society",
      },
      {
        title: "4.契約状況・名刺印刷",
        icon: "credit-card",
        to: "/mypages/clinic/contract",
      },
      {
        title: "_外注先：技工所",
        icon: "truck",
        to: "/mypages/labo",
      },
      {
        title: "_担当：歯科技工士",
        icon: "user-check",
        to: "/mypages/artisan",
      },
    ]
  },

  { header: "スタッフ登録" },
  // {
  //   title: "スタッフ一覧/笑顔コイン付与",
  //   icon: "users",
  //   to: "/mypages/clinic/engineer",
  // },
  {
    title: "就業状況・追加登録",
    icon: "users",
    to: "/mypages/clinic/engineerlist",
  },
  {
    title: "__承認・完了:スタッフ",
    icon: "user-plus",
    to: "/mypages/clinic/approval",
  },
  {
    title: "__承認・完了:顧客",
    icon: "user-plus",
    to: "/mypages/clinic/approval_suppliers",
  },
  {
    title: "治療一覧",
    icon: "award",
    to: "/mypages/clinic/carelist",
  },
  {
    title: "_治療情報 詳細",
    icon: "award",
    to: "/mypages/clinic/caredetail",
  },
  {
    title: "技工記録 一覧",
    icon: "award",
    to: "/mypages/clinic/productlist",
  },
  {
    title: "_技工記録 詳細",
    icon: "award",
    to: "/mypages/clinic/productdetail",
  },
  {
    title: "_笑顔コイン",
    icon: "smile",
    to: "/mypages/clinic/egaocoin",
  },
  {
    title: "_つら〜いコイン",
    icon: "cloud-drizzle",
    to: "/mypages/clinic/tsuraicoin",
  },
  {
    title: "統計データ",
    icon: "trending-up",
    to: "/mypages/clinic/satistics",
  },
  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/clinic/search/medical",
  },
  { header: "問合せ" },
  {
    title: "問い合わせ",
    icon: "mail",
    to: "/mypages/clinic/inquiry",
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
      title: "歯科医療機関",
      icon: "disc",
      to: "/clinic",
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
