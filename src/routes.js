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
    component: RegularTables,
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
