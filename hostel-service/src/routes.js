import mainMenu from "./Pages/main-menu"
import studentLogin from "./Pages/student-login.vue"
import advisorLogin from "./Pages/advisor-login.vue"
import hostelLogin from "./Pages/hostel-login.vue"

import HostelPage from "./Pages/hostel-page.vue"
import studentProfile from "./Pages/student-profile.vue"
import hostelStaffInfo from "./Pages/hostel-staff-info.vue"
import advisorPage from "./Pages/advisor-page.vue"
import advisorPageStudent from "./Pages/advisor-page-student.vue"

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
    {
        path: "/studentPage",
        component: studentProfile
    },
    {
        path: "/hostelStaffInfo",
        component: hostelStaffInfo
    },

    {
        path: "/advisorPage",
        component: advisorPage
    },
    {
        path: "/myStudents",
        component: advisorPageStudent
    },

    {
        path: "/students",
        component: studentProfile
    },
];
