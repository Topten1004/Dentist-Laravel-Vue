export default [
  {
    title: "トップ",
    icon: "home",
    to: "/",
  },
  {
    title: "Index(未ログイン)",
    icon: "user",
    to: "/dentist",
  },
  {
    title: "Mypage 歯科医師",
    icon: "user",
    to: "/mypages/dentist",
  },
  {
    title: "プロフィール公開版",
    icon: "user",
    to: "/mypages/dentist/profile",
  },
  {
    title: "プロフィール個人版",
    icon: "user",
    to: "/mypages/dentist/myprofile",
  },

  //登録関連リンク  -------
 {
  group: "/mypages/dentist/registaccount",
  model: false,
  icon: "settings",
  title: "(重要)登録",
  children: [
      {
        title: "2.1.アカウント登録更新",
        icon: "upload",
        to: "/mypages/dentist/regist/account",
      },
      {
        title: "2.2.所属登録",
        icon: "user-plus",
        to: "/mypages/dentist/regist/job",
      },
      {
        title: "2.3.詳細登録",
        icon: "grid",
        to: "/mypages/dentist/regist/detail",
      },
      {
        title: "2.4.学会登録",
        icon: "link",
        to: "/mypages/dentist/regist/society",
      },
      {
        title: "2.5.目標値登録",
        icon: "feather",
        to: "/mypages/dentist/regist/target",
      },
    ],
  },


  {
    title: "_口腔装置撮影",
    icon: "camera",
    to: "/mypages/dentist/snapshot",
  },
  {
    title: "治療一覧",
    icon: "award",
    to: "/mypages/dentist/carelist",
  },
  {
    title: "_治療情報 詳細",
    icon: "award",
    to: "/mypages/dentist/caredetail",
  },
  {
    title: "技工記録 一覧",
    icon: "award",
    to: "/mypages/dentist/productlist",
  },
  {
    title: "_技工記録 詳細",
    icon: "award",
    to: "/mypages/dentist/productdetail",
  },
  {
    title: "笑顔コイン",
    icon: "smile",
    to: "/mypages/dentist/egaocoin",
  },
  {
    title: "つら〜いコイン",
    icon: "cloud-drizzle",
    to: "/mypages/dentist/tsuraicoin",
  },
  {
    title: "統計データ",
    icon: "trending-up",
    to: "/mypages/dentist/satistics",
  },
  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/dentist/search/medical",
  },
  { header: "問合せ" },
  {
    title: "問合せ",
    icon: "mail",
    to: "/mypages/dentist/inquiry",
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
