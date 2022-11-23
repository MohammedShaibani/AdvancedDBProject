import mainMenu from "./Pages/main-menu"
import studentLogin from "./Pages/student-login.vue"
import advisorLogin from "./Pages/advisor-login.vue"
import hostelLogin from "./Pages/hostel-login.vue"

import HostelPage from "./Pages/hostel-page.vue"

export default [
	{ 
        path: "/",
        component: mainMenu
    },
    {
        path: "/studentLogin",
        component: studentLogin
    },
    {
        path: "/advisorLogin",
        component: advisorLogin
    },
    {
        path: "/hostelLogin",
        component: hostelLogin
    },
    {
        path: "/hostelPage",
        component: HostelPage
    },
];
