import mainMenu from "./Pages/main-menu"
import studentLogin from "./Pages/student-login.vue"
import advisorLogin from "./Pages/advisor-login.vue"
import hostelLogin from "./Pages/hostel-login.vue"

import HostelPage from "./Pages/hostel-page.vue"
import studentProfile from "./Pages/student-profile.vue"
import hostelStaffInfo from "./Pages/hostel-staff-info.vue"
import advisorPage from "./Pages/advisor-page.vue"
import advisorPageStudent from "./Pages/advisor-page-student.vue"

import hostelLease from "./Pages/hostel-lease.vue"
import hostelInspection from "./Pages/hostel-inspection.vue"
import InspectionSchedule from "./Pages/InspectionSchedule.vue"

import studentResidenceInfoVue from "./Pages/student-residence-info.vue";
import newLeaseVue from "./Pages/new-lease.vue";
import cancelLeaseVue from "./Pages/cancel-lease.vue";
import InvoicesPageVue from "./Pages/InvoicesPage.vue";
import payScreenVue from "./Pages/pay-screen.vue";
import viewInvoiceVue from "./Pages/view-invoice.vue";

export default [
	{ 
        path: "/",
        component: mainMenu
    },
    {
        path: "/login-student",
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
        path: "/my-student-profile",
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
    {
        path: "/hostelLease",
        component: hostelLease
    },
    {
        path: "/hostelInspection",
        component: hostelInspection
    },
    {
        path: "/scheduleInspection",
        component: InspectionSchedule
    },
    {
        path: "/my-residence",
        component: studentResidenceInfoVue
    },
    {
        path: "/request-new-lease",
        component: newLeaseVue
    },
    {
        path: "/cancel-lease",
        component: cancelLeaseVue
    },
    {
        path: "/invoices-info",
        component: InvoicesPageVue
    },
    {
        path: "/payment",
        component: payScreenVue
    },
    {
        path: "/invoice-view",
        component: viewInvoiceVue
    },
];
