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
import RegularTables from "views/tables/RegularTables.jsx";
import Dashboard from "views/Dashboard.jsx";
import LeagueLeaders from "views/LeagueLeaders.jsx";
import User from "views/pages/User.jsx";
import BoxScore from "./views/tables/BoxScore";

const routes = [
  {
    path: "/dashboard",
    name: "Stats",
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
    name: "Box Score",
    rtlName: "الجداول",
    icon: "tim-icons icon-puzzle-10",
    path: "/regular-tables",
    component: BoxScore,
    layout: "/admin"
  },
  {
    name: "Profile",
    rtlName: "الجداول",
    icon: "tim-icons icon-user-run",
    path: "/user-profile",
    component: User,
    layout: "/admin"
  }
];

export default routes;
