/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import VectorMap from "views/maps/VectorMap.jsx";
import GoogleMaps from "views/maps/GoogleMaps.jsx";
import FullScreenMap from "views/maps/FullScreenMap.jsx";
import ReactTables from "views/tables/ReactTables.jsx";
import RegularTables from "views/tables/RegularTables.jsx";
import ExtendedTables from "views/tables/ExtendedTables.jsx";
import Wizard from "views/forms/Wizard.jsx";
import ValidationForms from "views/forms/ValidationForms.jsx";
import ExtendedForms from "views/forms/ExtendedForms.jsx";
import RegularForms from "views/forms/RegularForms.jsx";
import Calendar from "views/Calendar.jsx";
import Widgets from "views/Widgets.jsx";
import Charts from "views/Charts.jsx";
import Dashboard from "views/Dashboard.jsx";
import LeagueLeaders from "views/LeagueLeaders.jsx";
import Buttons from "views/components/Buttons.jsx";
import SweetAlert from "views/components/SweetAlert.jsx";
import Notifications from "views/components/Notifications.jsx";
import Grid from "views/components/Grid.jsx";
import Typography from "views/components/Typography.jsx";
import Panels from "views/components/Panels.jsx";
import Icons from "views/components/Icons.jsx";
import Pricing from "views/pages/Pricing.jsx";
import Register from "views/pages/Register.jsx";
import Timeline from "views/pages/Timeline.jsx";
import User from "views/pages/User.jsx";
import Login from "views/pages/Login.jsx";
import Rtl from "views/pages/Rtl.jsx";
import Lock from "views/pages/Lock.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/leaders",
    name: "League Leaders",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-bar-32",
    component: LeagueLeaders,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: Pricing,
        layout: "/auth"
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: Rtl,
        layout: "/rtl"
      },
      {
        path: "/timeline",
        name: "Timeline",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: Timeline,
        layout: "/admin"
      },
      {
        path: "/login",
        name: "Login",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/lock-screen",
        name: "Lock Screen",
        rtlName: "اقفل الشاشة",
        mini: "LS",
        rtlMini: "هذاع",
        component: Lock,
        layout: "/auth"
      },
      {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: User,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "المكونات",
    icon: "tim-icons icon-molecule-40",
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "انهيار متعدد المستويات",
        mini: "MLT",
        rtlMini: "ر",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "وصفت",
            mini: "B",
            rtlMini: "ب",
            component: Buttons,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "نظام الشبكة",
        mini: "GS",
        rtlMini: "زو",
        component: Grid,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "الحلو تنبيه",
        mini: "SA",
        rtlMini: "ومن",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        mini: "N",
        rtlMini: "ن",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        mini: "I",
        rtlMini: "و",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        mini: "T",
        rtlMini: "ر",
        component: Typography,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "الجداول",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "جداول ممتدة",
        mini: "ET",
        rtlMini: "هور",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
];

export default routes;
