export default [
  {
    title: "Home",
    icon: "home",
    to: "/",
  },

  // 新規登録とログインは、ログイン済の場合,非表示とする。
  {
    title: "新規登録",
    icon: "user-check",
    to: "/regist",
  },
  {
    title: "ログイン",
    icon: "log-in",
    to: "/login",
  },

  {
    title: "患者Index(未ログイン)",
    icon: "user",
    to: "/patient",
  },
  {
    title: "患者MypageTop",
    icon: "user",
    to: "/mypages/patient",
  },
  {
    title: "アカウント登録更新",
    icon: "user",
    to: "/mypages/patient/account",
  },
  {
    title: "笑顔アンケート履歴",
    icon: "file-text",
    to: "/patient/opinionhistory",
  },
  {
    title: "笑顔コイン付与投稿",
    icon: "smile",
    to: "/patient/opinion",
  },
  {
    title: "専任・歯科医療技術者",
    icon: "star",
    to: "/mypages/patient/exclusive",
  },
  {
    title: "治療一覧(口腔内画像・技工装置)",
    icon: "award",
    to: "/mypages/patient/allcarelist",
  },
  {
    title: "_治療情報 詳細",
    icon: "award",
    to: "/mypages/patient/caredetail",
  },
  {
    title: "_技工装置情報 詳細",
    icon: "award",
    to: "/mypages/patient/productdetail",
  },
  {
    title: "x_技工装置一覧(治療一覧に統合)",
    icon: "award",
    to: "/mypages/patient/productlist",
  },
  
  {
    title: "_担当者プロフィール",
    icon: "users",
    to: "/mypages/patient/engineerprofile",
  },
  {
    title: "_歯科技工所プロフィール",
    icon: "users",
    to: "/mypages/patient/laboprofile",
  },
  
  {
    title: "笑顔コインについて",
    icon: "smile",
    to: "/patient/egaocoin",
  },
  {
    title: "つら〜いコインについて",
    icon: "cloud-rain",
    to: "/patient/tsuraicoin",
  },
  {
    title: "医療機関検索",
    icon: "search",
    to: "/mypages/patient/search/medical",
  },

  { header: "各種設定・FAQ" },
  // {
  //   title: "お知らせ",
  //   icon: "globe",
  //   to: "/news",
  // },

  {
    title: "お問合せ",
    icon: "mail",
    to: "/inquiry",
  },

  { header: "以下製作上リンク" },
  //ここから CS24 説明用　分岐リンク  -------
  {
    group: "/mypages/",

    model: false,
    icon: "grid",
    title: "参照リンク",
    children: [
      {
        title: "担当：歯科医療機関",
        icon: "user",
        to: "/mypages/clinic",
      },
      {
        title: "担当：歯科技工士",
        icon: "user",
        to: "/mypages/artisan",
      },
      {
        title: "担当：歯科衛生士",
        icon: "user",
        to: "/mypages/hygienist",
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
