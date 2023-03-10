export default [
  { header: "Home" },
  {
    title: "トップ",
    icon: "home",
    to: "/",
  },

  // {
  //   group: "/mypages/admin",
  //   model: false,
  //   icon: "settings",
  //   title: "総合管理者",
  //   children: [
  //     {
  //       title: "Admin Top",
  //       icon: "users",
  //       to: "/mypages/admin",
  //     },
  //   ]
  // },
  {
    title: "Admin Top",
    icon: "users",
    to: "/mypages/admin",
  },
  {
    title: "ユーザー検索",
    icon: "search",
    to: "/mypages/admin/usersearch",
  },
  {
    title: "技術者リスト",
    icon: "users",
    to: "/mypages/admin/userslist",
  },
  {
    title: "_ユーザー更新",
    icon: "users",
    to: "/mypages/admin/users_editer",
  },
  {
    title: "歯科医療機関リスト",
    icon: "users",
    to: "/mypages/admin/clinicslist",
  },
  {
    title: "_歯科医療機関更新",
    icon: "users",
    to: "/mypages/admin/clinic_editer",
  },
  {
    title: "歯科技工所リスト",
    icon: "users",
    to: "/mypages/admin/laboslist",
  },
  {
    title: "_歯科技工所更新",
    icon: "users",
    to: "/mypages/admin/labo_editer",
  },
  {
    title: "メール配信機能",
    icon: "mail",
    to: "/mypages/admin/sendmail",
  },

  { header : "▼ 各マイページーーー" },
  {
    group: "/mypages/admin/",
    model: false,
    icon: "users",
    title: "M ユーザー",
    children: [
      {
        title: "M 歯科技工士",
        icon: "user",
        to: "/mypages/artisan",
      },
      {
        title: "M 歯科技工所",
        icon: "user",
        to: "/mypages/labo",
      },
      {
        title: "M 歯科医療機関",
        icon: "user",
        to: "/mypages/clinic",
      },
      {
        title: "M 歯科衛生士",
        icon: "user",
        to: "/mypages/hygienist",
      },
      {
        title: "M 歯科医師",
        icon: "user",
        to: "/mypages/dentist",
      },
      {
        title: "M 学会",
        icon: "user",
        to: "/mypages/society",
      },
      {
        title: "M 患者",
        icon: "user",
        to: "/mypages/patient",
      },
    ]
  },

  {
    group: "/mypages/admin/",
    model: false,
    icon: "users",
    title: "Indexユーザー",
    children: [
      {
        title: "歯科技工士",
        icon: "grid",
        to: "/artisan",
      },
      {
        title: "歯科技工所",
        icon: "grid",
        to: "/labo",
      },
      {
        title: "歯科医療機関",
        icon: "grid",
        to: "/clinic",
      },
      {
        title: "歯科衛生士",
        icon: "grid",
        to: "/hygienist",
      },
      {
        title: "歯科医師",
        icon: "grid",
        to: "/dentist",
      },
      {
        title: "学会",
        icon: "grid",
        to: "/society",
      },
    ]
  },
];
