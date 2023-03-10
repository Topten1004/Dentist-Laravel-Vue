import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    //cs24 insert 最上部表示用
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          top: 0
        }
      }
    },
  history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHistory("/"),
  routes: [
  // Top LandingPage
    {
      path: "/",
      redirect: "/",
      component: () => import("@/layouts/base/LandingLayout.vue"),
      children: [
        {
          name: "Top",
          path: "/",
          component: () => import("@/views/tops/IndexLanding.vue"),
        },
        {
          name: "Egaocoin",
          path: "/egaocoin",
          component: () => import("@/views/tops/IndexEgaocoin.vue"),
        },
        {
          name: "Tsuraicoin",
          path: "/tsuraicoin",
          component: () => import("@/views/tops/IndexTsuraicoin.vue"),
        },
      ]
    },
  // ログインレイアウト
    {
      path: "/login",
      component: () => import("@/layouts/base/BlankLayout.vue"),
      children: [
        {
          name: "Auth Login",
          path: "/login",
          component: () => import("@/views/auth/FullLogin.vue"),
        },
        {
          name: "Auth Regist",
          path: "/regist",
          component: () => import("@/views/auth/FullRegister.vue"),
        },
        {
          name: "Auth PassWord Reset",
          path: "/passwordreset",
          component: () => import("@/views/auth/FullForgotPassword.vue"),
        },
        {
          name: "ErrorAll",
          path: "/error",
          component: () => import("@/views/auth/Error.vue"),
        },
        {
          name: "Error400",
          path: "/error400",
          component: () => import("@/views/auth/Error400.vue"),
        },
        {
          name: "Error401",
          path: "/error401",
          component: () => import("@/views/auth/Error401.vue"),
        },
        {
          name: "Error403",
          path: "/error403",
          component: () => import("@/views/auth/Error403.vue"),
        },
        {
          name: "Error404",
          path: "/error404",
          component: () => import("@/views/auth/Error404.vue"),
        },
        {
          name: "Error500",
          path: "/error500",
          component: () => import("@/views/auth/Error500.vue"),
        },
        {
          name: "Error503",
          path: "/error503",
          component: () => import("@/views/auth/Error503.vue"),
        },
      ],
    },

  // Admin Layout  -- 総合管理者 --
    {
      path: "/mypages/admin",
      redirect: "/mypages/admin",
      component: () => import("@/layouts/base_full/FullLayoutAdmin.vue"),
      children: [
        {
          name: "Index Admin",
          path: "/mypages/admin",
          component: () => import("@/views/admin/IndexAdmin.vue"),
        },
        {
          name: "User Search Admin",
          path: "/mypages/admin/usersearch",
          component: () => import("@/views/admin/UserSearch.vue"),
        },
        {
          name: "Users List Admin",
          path: "/mypages/admin/userslist",
          component: () => import("@/views/admin/UsersList.vue"),
        },
        {
          name: "Users Editer Admin",
          path: "/mypages/admin/users_editer",
          component: () => import("@/views/admin/UsersEditer.vue"),
        },
        {
          name: "Clinics List Admin",
          path: "/mypages/admin/clinicslist",
          component: () => import("@/views/admin/ClinicsList.vue"),
        },
        {
          name: "Clinic Editer Admin",
          path: "/mypages/admin/clinic_editer",
          component: () => import("@/views/admin/ClinicEditer.vue"),
        },
        {
          name: "Labos List Admin",
          path: "/mypages/admin/laboslist",
          component: () => import("@/views/admin/LabosList.vue"),
        },
        {
          name: "Labo Editer Admin",
          path: "/mypages/admin/labo_editer",
          component: () => import("@/views/admin/LaboEditer.vue"),
        },

        {
          name: "Admin Send Mail",
          path: "/mypages/admin/sendmail",
          component: () => import("@/views/admin/SendMail.vue"),
        },
      ]
    },
    //  Common Layout  
    {
      path: "/",
      redirect: "/",
      component: () => import("@/layouts/base_full/FullLayout.vue"),
      children: [
        {
          name: "Index News",
          path: "/news",
          component: () => import("@/views/news/IndexNews.vue"),
        },
      ]
    },

  // Artisan Layout  -- 歯科技工士 --
    {
      path: "/artisan",
      redirect: "/artisan",
      component: () => import("@/layouts/base_full/FullLayoutArtisan.vue"),
      children: [
        {
          name: "Index Artisans",
          path: "/artisan",
          component: () => import("@/views/mypages/artisan/IndexArtisan.vue"),
        },
        {
          name: "Artisans Mypage",
          path: "/mypages/artisan",
          component: () => import("@/views/mypages/artisan/IndexArtisanMypage.vue"),
        },
        // 技工士の個人参照用プロフィール
        {
          name: "Artisans Profile",
          path: "/mypages/artisan/myprofile",
          component: () => import("@/views/mypages/artisan/MyProfile.vue"),
        },
        // 技工士の公開用プロフィール
        {
          name: "Artisans Open Profile",
          path: "/mypages/artisan/profile",
          component: () => import("@/views/mypages/artisan/OpenProfile.vue"),
        },
        // 登録関連　１〜５
        // 登録１　技工士アカウント
        {
          name: "Artisans Account Regist",
          path: "/mypages/artisan/regist/account",
          component: () => import("@/views/mypages/artisan/RegistAccount.vue"),
        },
        // 登録２　技工士職場登録
        {
          name: "Artisans Job Regist",
          path: "/mypages/artisan/regist/job",
          component: () => import("@/views/mypages/artisan/RegistJob.vue"),
        },
        // 登録３　技工士詳細登録
        {
          name: "Artisans Detail Regist",
          path: "/mypages/artisan/regist/detail",
          component: () => import("@/views/mypages/artisan/RegistDetail.vue"),
        },
        // 登録４　技工士学会登録
        {
          name: "Artisans Societies Regist",
          path: "/mypages/artisan/regist/society",
          component: () => import("@/views/mypages/artisan/RegistSocieties.vue"),
        },
        // 登録５　技工士目標登録
        {
          name: "Artisans Target Regist",
          path: "/mypages/artisan/regist/target",
          component: () => import("@/views/mypages/artisan/RegistTarget.vue"),
        },

        {
          name: "Mypage Engineer List",
          path: "/mypages/artisan/engineer",
          component: () => import("@/views/mypages/artisan/AffiliationEngineer.vue"),
        },
        // 統計リンク
        {
          name: "Artisans Statistics",
          path: "/mypages/artisan/satistics",
          component: () => import("@/views/mypages/artisan/SatisticsArtisan.vue"),
        },
        // 笑顔コインリンク
        {
          name: "Artisans EgaoCoin",
          path: "/mypages/artisan/egaocoin",
          component: () => import("@/views/mypages/artisan/EgaoCoin.vue"),
        },
        // つら〜いコインリンク
        {
          name: "Artisans TsuraiCoin",
          path: "/mypages/artisan/tsuraicoin",
          component: () => import("@/views/mypages/artisan/TsuraiCoin.vue"),
        },
        // 技工装置の写真撮影
        {
          name: "Artisans SnapShot",
          path: "/mypages/artisan/snapshot",
          component: () => import("@/views/mypages/artisan/SnapShot.vue"),
        },
        // 技工装置の詳細
        {
          name: "Artisans Product Detail",
          path: "/mypages/artisan/productdetail",
          component: () => import("@/views/mypages/artisan/ProductDetail.vue"),
        },
        // 技工装置の一覧
        {
          name: "Artisans Product List",
          path: "/mypages/artisan/productlist",
          component: () => import("@/views/mypages/artisan/ProductList.vue"),
        },
        // 技工装置の写真撮影登録後のアクセスコード発行　番号表示
        {
          name: "Artisans Access Code",
          path: "/mypages/artisan/accesscode",
          component: () => import("@/views/mypages/artisan/AccessCode.vue"),
        },
        // 技工装置の写真撮影登録後のアクセスコード発行済一覧
        {
          name: "Artisans Access Code List",
          path: "/mypages/artisan/accesscodelist",
          component: () => import("@/views/mypages/artisan/AccessCodeList.vue"),
        },

        // 治療履歴の一覧
        {
          name: "Artisans Care List",
          path: "/mypages/artisan/carelist",
          component: () => import("@/views/mypages/artisan/CareList.vue"),
        },
        // 治療の詳細
        {
          name: "Artisans Care Detail",
          path: "/mypages/artisan/caredetail",
          component: () => import("@/views/mypages/artisan/CareDetail.vue"),
        },
        // 検索フォーム
        {
          name: "Search Artisans",
          path: "/mypages/artisan/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Artisans",
          path: "/mypages/artisan/search/medical",
          component: () => import("@/views/mypages/artisan/SearchMedical.vue"),
        },
        // 問合せフォーム
        {
          name: "Inquiry Artisans",
          path: "/mypages/artisan/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },

// Hygienist Layout　-- 歯科衛生士 -- 
    {
      path: "/hygienist",
      redirect: "/hygienist",
      component: () => import("@/layouts/base_full/FullLayoutHygienist.vue"),
      children: [
        {
          name: "Top Hygienists",
          path: "/hygienist",
          component: () => import("@/views/mypages/hygienist/IndexHygienist.vue"),
        },
        {
          name: "Mypage Hygienists",
          path: "/mypages/hygienist",
          component: () => import("@/views/mypages/hygienist/IndexHygienistMypage.vue"),
        },
        // 歯科衛生士の公開用プロフィール
        {
          name: "Hygienists Open Profile",
          path: "/mypages/hygienist/profile",
          component: () => import("@/views/mypages/hygienist/OpenProfile.vue"),
        },
        // 個人参照用プロフィール
        {
          name: "Hygienists My Profile",
          path: "/mypages/hygienist/myprofile",
          component: () => import("@/views/mypages/hygienist/MyProfile.vue"),
        },
        // 登録フォームリンク
        {
          name: "Hygienists Account Regist",
          path: "/mypages/hygienist/account",
          component: () => import("@/views/mypages/hygienist/RegistAccount.vue"),
        },

        // 登録関連　１〜５
        {
          name: "Hygienists Account Regist",
          path: "/mypages/hygienist/regist/account",
          component: () => import("@/views/mypages/hygienist/RegistAccount.vue"),
        },
        {
          name: "Hygienists Job Regist",
          path: "/mypages/hygienist/regist/job",
          component: () => import("@/views/mypages/hygienist/RegistJob.vue"),
        },
        {
          name: "Hygienists Detail Regist",
          path: "/mypages/hygienist/regist/detail",
          component: () => import("@/views/mypages/hygienist/RegistDetail.vue"),
        },
        {
          name: "Hygienists Societies Regist",
          path: "/mypages/hygienist/regist/society",
          component: () => import("@/views/mypages/hygienist/RegistSocieties.vue"),
        },
        {
          name: "Hygienists Target Regist",
          path: "/mypages/hygienist/regist/target",
          component: () => import("@/views/mypages/hygienist/RegistTarget.vue"),
        },

        // 統計リンク
        {
          name: "Hygienists Statistics",
          path: "/mypages/hygienist/satistics",
          component: () => import("@/views/mypages/hygienist/SatisticsHygienist.vue"),
        },
        // 笑顔コインリンク
        {
          name: "Hygienists EgaoCoin",
          path: "/mypages/hygienist/egaocoin",
          component: () => import("@/views/mypages/hygienist/EgaoCoin.vue"),
        },
        // つら〜いコインリンク
        {
          name: "Hygienists TsuraiCoin",
          path: "/mypages/hygienist/tsuraicoin",
          component: () => import("@/views/mypages/hygienist/TsuraiCoin.vue"),
        },
        // 口腔内の写真撮影
        {
          name: "Hygienists SnapShot",
          path: "/mypages/hygienist/snapshot",
          component: () => import("@/views/mypages/hygienist/SnapShot.vue"),
        },
        // 治療履歴の一覧
        {
          name: "Hygienists Care List",
          path: "/mypages/hygienist/carelist",
          component: () => import("@/views/mypages/hygienist/CareList.vue"),
        },
        // 治療の詳細
        {
          name: "Hygienists Care Detail",
          path: "/mypages/hygienist/caredetail",
          component: () => import("@/views/mypages/hygienist/CareDetail.vue"),
        },
        // 技工装置 一覧
        {
          name: "Hygienists Treat List",
          path: "/mypages/hygienist/productlist",
          component: () => import("@/views/mypages/hygienist/ProductList.vue"),
        },
        // 技工装置の詳細
        {
          name: "Hygienists Treat Detail",
          path: "/mypages/hygienist/productdetail",
          component: () => import("@/views/mypages/hygienist/ProductDetail.vue"),
        },
        // 検索フォーム
        {
          name: "Search Hygienists",
          path: "/mypages/hygienist/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Hygienists",
          path: "/mypages/hygienist/search/medical",
          component: () => import("@/views/mypages/common/form/MedicalSearch.vue"),
        },
          // 問合せフォーム
        {
          name: "Inquiry Hygienists",
          path: "/mypages/hygienist/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },
    // Dentist Layout　-- 歯科医師 --
    {
      path: "/dentist",
      redirect: "/dentist",
      component: () => import("@/layouts/base_full/FullLayoutDentist.vue"),
      children: [
        {
          name: "Index Dentist",
          path: "/dentist",
          component: () => import("@/views/mypages/dentist/IndexDentist.vue"),
        },
        {
          name: "Mypage Dentist",
          path: "/mypages/dentist",
          component: () => import("@/views/mypages/dentist/IndexMypage.vue"),
        },
        // 歯科医師の公開用プロフィール
        {
          name: "Dentists Open Profile",
          path: "/mypages/dentist/profile",
          component: () => import("@/views/mypages/dentist/OpenProfile.vue"),
        },
        // 個人参照用プロフィール
        {
          name: "Dentists Profile",
          path: "/mypages/dentist/myprofile",
          component: () => import("@/views/mypages/dentist/MyProfile.vue"),
        },

        // 登録関連　１〜５
        {
          name: "Dentists Account Regist",
          path: "/mypages/dentist/regist/account",
          component: () => import("@/views/mypages/dentist/RegistAccount.vue"),
        },
        {
          name: "Dentists Job Regist",
          path: "/mypages/dentist/regist/job",
          component: () => import("@/views/mypages/dentist/RegistJob.vue"),
        },
        {
          name: "Dentists Detail Regist",
          path: "/mypages/dentist/regist/detail",
          component: () => import("@/views/mypages/dentist/RegistDetail.vue"),
        },
        {
          name: "Dentists Societies Regist",
          path: "/mypages/dentist/regist/society",
          component: () => import("@/views/mypages/dentist/RegistSocieties.vue"),
        },
        {
          name: "Dentists Target Regist",
          path: "/mypages/dentist/regist/target",
          component: () => import("@/views/mypages/dentist/RegistTarget.vue"),
        },
        // 統計リンク
        {
          name: "Dentists Statistics",
          path: "/mypages/dentist/satistics",
          component: () => import("@/views/mypages/dentist/SatisticsDentist.vue"),
        },
        // 笑顔コインリンク
        {
          name: "Dentists EgaoCoin",
          path: "/mypages/dentist/egaocoin",
          component: () => import("@/views/mypages/dentist/EgaoCoin.vue"),
        },
        // つら〜いコインリンク
        {
          name: "Dentists TsuraiCoin",
          path: "/mypages/dentist/tsuraicoin",
          component: () => import("@/views/mypages/dentist/TsuraiCoin.vue"),
        },
        // 口腔内の写真撮影
        {
          name: "Dentists SnapShot",
          path: "/mypages/dentist/snapshot",
          component: () => import("@/views/mypages/dentist/SnapShot.vue"),
        },

        // 治療履歴の一覧
        {
          name: "Dentist Care List",
          path: "/mypages/dentist/carelist",
          component: () => import("@/views/mypages/dentist/CareList.vue"),
        },
        // 治療の詳細
        {
          name: "Dentist Care Detail",
          path: "/mypages/dentist/caredetail",
          component: () => import("@/views/mypages/dentist/CareDetail.vue"),
        },
        // 技工装置 一覧
        {
          name: "Dentist Treat List",
          path: "/mypages/dentist/productlist",
          component: () => import("@/views/mypages/dentist/ProductList.vue"),
        },
        // 技工装置の詳細
        {
          name: "Dentists Product Detail",
          path: "/mypages/dentist/productdetail",
          component: () => import("@/views/mypages/dentist/ProductDetail.vue"),
        },
        // 検索フォーム
        {
          name: "Search Dentists",
          path: "/mypages/dentist/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Dentists",
          path: "/mypages/dentist/search/medical",
          component: () => import("@/views/mypages/common/form/MedicalSearch.vue"),
        },
        
        // 問合せフォーム
        {
          name: "Inquiry Dentists",
          path: "/mypages/dentist/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },

    // Labo Layout　-- 歯科技工所 -- 
    {
      path: "/labo",
      redirect: "/labo",
      component: () => import("@/layouts/base_full/FullLayoutLabo.vue"),
      children: [
        {
          name: "Index Labos",
          path: "/labo",
          component: () => import("@/views/mypages/labo/IndexLabo.vue"),
        },
        {
          name: "Mypage Labos",
          path: "/mypages/labo",
          component: () => import("@/views/mypages/labo/IndexLaboMypage.vue"),
        },
        // 歯科技工所の 取引先表示用Myプロフィール 
        {
          name: "Labo My Profile",
          path: "/mypages/labo/profile",
          component: () => import("@/views/mypages/labo/MyProfile.vue"),
        },
        // 歯科技工所の 公開用プロフィール
        {
          name: "Labos Open Profile",
          path: "/mypages/labo/openprofile",
          component: () => import("@/views/mypages/labo/OpenProfile.vue"),
        },
        // 契約状況
        {
          name: "Labo Constract Status",
          path: "/mypages/labo/contract",
          component: () => import("@/views/mypages/labo/ContractStatus.vue"),
        },
        // 登録フォームリンク
        {
          name: "Labos Account",
          path: "/mypages/labo/regist/account",
          component: () => import("@/views/mypages/labo/RegistAccount.vue"),
        },
        // 詳細登録フォームリンク
        {
          name: "Labos Regist Detail",
          path: "/mypages/labo/regist/detail",
          component: () => import("@/views/mypages/labo/RegistDetail.vue"),
        },
        // 学会・団体　登録
        {
          name: "Labos Societies Regist",
          path: "/mypages/labo/regist/society",
          component: () => import("@/views/mypages/labo/RegistSocieties.vue"),
        },
        // // 従業員登録フォームリンク
        // {
        //   name: "Labos Affiliation Regist ",
        //   path: "/mypages/labo/regist/affiliation",
        //   component: () => import("@/views/mypages/labo/RegistAffiliation.vue"),
        // },
        // 顧客一覧
        {
          name: "Labos Client List",
          path: "/mypages/labo/clientlist",
          component: () => import("@/views/mypages/labo/ClientList.vue"),
        },

        // スタッフ一覧/登録
        {
          name: "Labos Engineer",
          path: "/mypages/labo/engineer",
          component: () => import("@/views/mypages/labo/AffiliationEngineer.vue"),
        },
        // スタッフ一覧/登録
        {
          name: "Labos Engineer List",
          path: "/mypages/labo/engineerlist",
          component: () => import("@/views/mypages/labo/EngineerList.vue"),
        },
        // スタッフの連携承認
        {
          name: "Labos Approval Staffs",
          path: "/mypages/labo/approval",
          component: () => import("@/views/mypages/labo/ApprovalRegister.vue"),
        },
        // 顧客の連携承認
        {
          name: "Labos Approval Suppliers",
          path: "/mypages/labo/approval_suppliers",
          component: () => import("@/views/mypages/labo/ApprovalSuppliers.vue"),
        },
        // 統計リンク
        {
          name: "Labos Statistics",
          path: "/mypages/labo/satistics",
          component: () => import("@/views/mypages/labo/SatisticsLabo.vue"),
        },
        // 技工装置 一覧
        {
          name: "Labos Treat List",
          path: "/mypages/labo/productlist",
          component: () => import("@/views/mypages/labo/ProductList.vue"),
        },
        // 笑顔コインリンク
        {
          name: "Labos EgaoCoin",
          path: "/mypages/labo/egaocoin",
          component: () => import("@/views/mypages/labo/EgaoCoin.vue"),
        },
        // つら〜いコインリンク
        {
          name: "Labos TsuraiCoin",
          path: "/mypages/labo/tsuraicoin",
          component: () => import("@/views/mypages/labo/TsuraiCoin.vue"),
        },
        // 技工装置の写真撮影
        {
          name: "Labo SnapShot",
          path: "/mypages/labo/snapshot",
          // component: () => import("@/views/mypages/labo/SnapShot.vue"),
          component: () => import("@/views/mypages/artisan/SnapShot.vue"),
        },
        // 技工装置の詳細
        {
          name: "Labos Product Detail",
          path: "/mypages/labo/productdetail",
          component: () => import("@/views/mypages/labo/ProductDetail.vue"),
        },

        // 治療履歴の一覧
        {
          name: "Labos Care List",
          path: "/mypages/labo/carelist",
          component: () => import("@/views/mypages/labo/CareList.vue"),
        },
        // 治療の詳細
        {
          name: "Labos Care Detail",
          path: "/mypages/labo/caredetail",
          component: () => import("@/views/mypages/labo/CareDetail.vue"),
        },

        // 検索フォーム
        {
          name: "Search Labos",
          path: "/mypages/labo/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Labos",
          path: "/mypages/labo/search/medical",
          component: () => import("@/views/mypages/common/form/MedicalSearch.vue"),
        },
        // 問合せフォーム
        {
          name: "Inquiry Labos",
          path: "/mypages/labo/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },

    // Clinic Layout　-- 歯科医療機関 --
    {
      path: "/clinic",
      redirect: "/clinic",
      component: () => import("@/layouts/base_full/FullLayoutClinic.vue"),
      children: [
        {
          name: "Index Clinics",
          path: "/clinic",
          component: () => import("@/views/mypages/clinic/IndexClinic.vue"),
        },
        {
          name: "Mypage Clinics",
          path: "/mypages/clinic",
          component: () => import("@/views/mypages/clinic/IndexClinicMypage.vue"),
        },
        // 歯科医院の 公開用プロフィール
        {
          name: "Clinics Open Profile",
          path: "/mypages/clinic/profile",
          component: () => import("@/views/mypages/clinic/OpenProfile.vue"),
        },
        // 登録フォームリンク
        {
          name: "Clinics Account",
          path: "/mypages/clinic/regist/account",
          component: () => import("@/views/mypages/clinic/RegistAccount.vue"),
        },
        // 詳細登録フォームリンク
        {
          name: "Clinics Regist Detail",
          path: "/mypages/clinic/regist/detail",
          component: () => import("@/views/mypages/clinic/RegistDetail.vue"),
        },
        // 学会・団体　登録
        {
          name: "Clinics Societies Regist",
          path: "/mypages/clinic/regist/society",
          component: () => import("@/views/mypages/clinic/RegistSocieties.vue"),
        },
        // 契約状況
        {
          name: "Clinics Constract Status",
          path: "/mypages/clinic/contract",
          component: () => import("@/views/mypages/clinic/ContractStatus.vue"),
        },
        // 従業員登録フォームリンク（要検討）
        {
          name: "Clinics Affiliation Regist ",
          path: "/mypages/clinic/regist/affiliation",
          component: () => import("@/views/mypages/clinic/RegistAffiliation.vue"),
        },
        // 従業員の連携承認
        {
          name: "Clinics Approval Staffs",
          path: "/mypages/clinic/approval",
          component: () => import("@/views/mypages/clinic/ApprovalRegister.vue"),
        },
        // 顧客の連携承認
        {
          name: "Clinics Approval Suppliers",
          path: "/mypages/clinic/approval_suppliers",
          component: () => import("@/views/mypages/clinic/ApprovalSuppliers.vue"),
        },
        // 治療履歴の一覧
        {
          name: "Clinic Care List",
          path: "/mypages/clinic/carelist",
          component: () => import("@/views/mypages/clinic/CareList.vue"),
        },
        // 治療の詳細
        {
          name: "Clinic Care Detail",
          path: "/mypages/clinic/caredetail",
          component: () => import("@/views/mypages/clinic/CareDetail.vue"),
        },
        
        // 技工装置の一覧
        {
          name: "Clinic Treat List",
          path: "/mypages/clinic/productlist",
          component: () => import("@/views/mypages/clinic/ProductList.vue"),
        },
        // 技工装置の詳細
        {
          name: "Clinic Treat Detail",
          path: "/mypages/clinic/productdetail",
          component: () => import("@/views/mypages/clinic/ProductDetail.vue"),
        },
        // 笑顔コイン
        {
          name: "Mypage Clinic EgaoCoin",
          path: "/mypages/clinic/egaocoin",
          component: () => import("@/views/mypages/clinic/EgaoCoin.vue"),
        },
        // つら〜いコイン
        {
          name: "Mypage Clinic TsuraiCoin",
          path: "/mypages/clinic/tsuraicoin",
          component: () => import("@/views/mypages/clinic/TsuraiCoin.vue"),
        },
        // 統計リンク
        {
          name: "Clinics Statistics",
          path: "/mypages/clinic/satistics",
          component: () => import("@/views/mypages/clinic/SatisticsClinic.vue"),
        },
        // スタッフ一覧・登録
        {
          name: "Mypage Clinics Engineer List",
          path: "/mypages/clinic/engineerlist",
          component: () => import("@/views/mypages/clinic/EngineerList.vue"),
        },
        // 技工装置の詳細
        {
          name: "Clinics Product Detail",
          path: "/mypages/clinic/productdetail",
          component: () => import("@/views/mypages/clinic/ProductDetail.vue"),
        },
        // 検索フォーム
        {
          name: "Search Clinic",
          path: "/mypages/clinic/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Clinics",
          path: "/mypages/clinic/search/medical",
          component: () => import("@/views/mypages/common/form/MedicalSearch.vue"),
        },
        // 問合せフォーム
        {
          name: "Inquiry Clinics",
          path: "/mypages/clinic/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },

    // Society Layout　-- 学会 --
    {
      path: "/society",
      redirect: "/society",
      component: () => import("@/layouts/base_full/FullLayoutSociety.vue"),
      children: [
        {
          name: "Index Society",
          path: "/society",
          component: () => import("@/views/mypages/society/IndexSociety.vue"),
        },
        {
          name: "Mypage Society",
          path: "/mypages/society",
          component: () => import("@/views/mypages/society/IndexSocietyMypage.vue"),
        },
        {
          name: "Mypage Society EgaoCoin",
          path: "/mypages/society/egaocoin",
          component: () => import("@/views/mypages/society/EgaoCoin.vue"),
        },
        // 学会管理者用　アカウント登録
        {
          name: "Societies Regist Account",
          path: "/mypages/society/regist/account",
          component: () => import("@/views/mypages/society/RegistAccount.vue"),
        },
        // 学会管理者用　会員承認登録
        {
          name: "Societies Approval Form",
          path: "/mypages/society/approval",
          component: () => import("@/views/mypages/society/ApprovalRegist.vue"),
        },
        // 検索フォーム
        {
          name: "Search Society",
          path: "/mypages/society/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Society",
          path: "/mypages/society/search/medical",
          component: () => import("@/views/mypages/common/form/MedicalSearch.vue"),
        },
        // 問合せフォーム
        {
          name: "Inquiry Societies",
          path: "/mypages/society/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },

// Patient Layout -- 患者 --
    {
      path: "/patient",
      redirect: "/patient",
      component: () => import("@/layouts/base_full/FullLayoutPatient.vue"),
      children: [
        {
          name: "Index Patients",
          path: "/patient",
          component: () => import("@/views/mypages/patient/IndexPatient.vue"),
        },
        {
          name: "Patients Mypage Top",
          path: "/mypages/patient",
          component: () => import("@/views/mypages/patient/IndexPatientMypage.vue"),
        },
        // 患者用　アカウント登録更新
        {
          name: "Patients Regist Account",
          path: "/mypages/patient/account",
          component: () => import("@/views/mypages/patient/RegistAccount.vue"),
        },
        // 患者　アンケート回答
        {
          name: "Patients Opinon",
          path: "/patient/opinion",
          component: () => import("@/views/mypages/patient/RegistOpinion.vue"),
        },
        // 患者　アンケート回答　履歴
        {
          name: "Patients Opinon History",
          path: "/patient/opinionhistory",
          component: () => import("@/views/mypages/patient/OpinionHistory.vue"),
        },
        // 治療履歴の一覧
        {
          name: "Patients All Care List",
          path: "/mypages/patient/allcarelist",
          component: () => import("@/views/mypages/patient/CareListAll.vue"),
        },
        // 専任した医療技術者
        {
          name: "Patients Exclusive List",
          path: "/mypages/patient/exclusive",
          component: () => import("@/views/mypages/patient/ExclusiveEngineer.vue"),
        },
        // 治療の詳細
        {
          name: "Patients Care Detail",
          path: "/mypages/patient/caredetail",
          component: () => import("@/views/mypages/patient/CareDetail.vue"),
        },
        // 技工装置の一覧
        {
          name: "Patients Treat List",
          path: "/mypages/patient/productlist",
          component: () => import("@/views/mypages/patient/ProductList.vue"),
        },
        // 技工装置の詳細
        {
          name: "Patients Treat Detail",
          path: "/mypages/patient/productdetail",
          component: () => import("@/views/mypages/patient/ProductDetail.vue"),
        },
        // 製作担当者の詳細プロフィール
        {
          name: "Engineer Profile",
          path: "/mypages/patient/engineerprofile",
          component: () => import("@/views/mypages/patient/ProfileEngineer.vue"),
        },
        // 歯科技工所の詳細プロフィール
        {
          name: "Labo Profile",
          path: "/mypages/patient/laboprofile",
          component: () => import("@/views/mypages/patient/ProfileLabo.vue"),
        },
        // 笑顔コインリンク
        {
          name: "Patients EgaoCoin",
          path: "/patient/egaocoin",
          component: () => import("@/views/mypages/patient/EgaoCoin.vue"),
        },
        // つら〜いコインリンク
        {
          name: "Patients TsuraiCoin",
          path: "/patient/tsuraicoin",
          component: () => import("@/views/mypages/patient/TsuraiCoin.vue"),
        },
        // 検索フォーム
        {
          name: "Search Patient",
          path: "/mypages/patient/search",
          component: () => import("@/views/mypages/common/form/SearchForm.vue"),
        },
        // 歯科医療機関検索フォーム
        {
          name: "Medical Search Patient",
          path: "/mypages/patient/search/medical",
          component: () => import("@/views/mypages/common/form/MedicalSearch.vue"),
        },
        // 問合せフォーム
        {
          name: "Inquiry Patients",
          path: "/inquiry",
          component: () => import("@/views/mypages/common/form/InquiryForm.vue"),
        },
      ]
    },
  ],
});

export default router;
