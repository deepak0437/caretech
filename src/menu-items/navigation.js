import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import EditCalendarTwoToneIcon from "@mui/icons-material/EditCalendarTwoTone";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PersonIcon from "@mui/icons-material/Person";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import ContactsIcon from "@mui/icons-material/Contacts";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import ThreePSharpIcon from "@mui/icons-material/ThreePSharp";
import WorkHistorySharpIcon from "@mui/icons-material/WorkHistorySharp";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import FeedIcon from "@mui/icons-material/Feed";
import PolicyIcon from "@mui/icons-material/Policy";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const navigation = [
  {
    kind: "header",
    title: "Home",
  },
  {
    segment: "",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Time Management",
  },
  {
    segment: "/calendar",
    title: "Calender",
    icon: <CalendarMonthOutlinedIcon />,
    children: [
      {
        segment: "calendar/attendance",
        title: "Attendence",
        icon: <ScheduleOutlinedIcon />,
      },
      {
        segment: "/calendar/manage-timesheet",
        title: "Manage Timesheet",
        icon: <EditCalendarTwoToneIcon />,
      },
      {
        segment: "/calendar/apply-leave",
        title: "Apply Leave",
        icon: <EventAvailableOutlinedIcon />,
      },
      {
        segment: "/calendar/holidays",
        title: "Holidays List",
        icon: <EventNoteOutlinedIcon />,
      },
    ],
  },
  {
    segment: "/task-and-goals",
    title: "Task & Goals",
    icon: <AddTaskIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Employee Details",
  },
  {
    segment: "/profile",
    title: "Profile",
    icon: <AccountBoxIcon />,
    children: [
      {
        segment: "/profile/personal-information",
        title: "Personal Information",
        icon: <PersonIcon />,
      },
      {
        segment: "/profile/national-id",
        title: "National ID",
        icon: <ContactEmergencyIcon />,
      },
      {
        segment: "/profile/contact-and-address",
        title: "Contact & Address",
        icon: <ContactsIcon />,
      },
      {
        segment: "/profile/documents",
        title: "Documents",
        icon: <SummarizeOutlinedIcon />,
      },
    ],
  },
  {
    segment: "/employee",
    title: "Employee",
    icon: <Person2SharpIcon />,
    children: [
      {
        segment: "/employee/employee-details",
        title: "Employee Details",
        icon: <ThreePSharpIcon />,
      },
      {
        segment: "/employee/job-information",
        title: "Job Information",
        icon: <WorkHistorySharpIcon />,
      },
      {
        segment: "/employee/people-org-chart",
        title: "People Org Chart",
        icon: <GroupsIcon />,
      },
    ],
  },
  {
    segment: "/reports",
    title: "Employee Training",
    icon: <BarChartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Payroll Information",
  },
  {
    segment: "/payroll",
    title: "Payroll Details",
    icon: <AccountBalanceWalletIcon />,
    children: [
      {
        segment: "/payroll/bank-account",
        title: "Bank Account",
        icon: <AccountBalanceIcon />,
      },
      {
        segment: "/payroll/salary-slips",
        title: "Salary Slips",
        icon: <NoteOutlinedIcon />,
      },
      {
        segment: "/payroll/pay-information",
        title: "Pay Information",
        icon: <AnalyticsIcon />,
      },
      {
        segment: "/payroll/other-benifits",
        title: "Other Benifits",
        icon: <QueryStatsIcon />,
      },
    ],
  },
  {
    segment: "/reimbursement",
    title: "Reimbursement",
    icon: <RedeemOutlinedIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Others",
  },
  {
    segment: "others",
    title: "General",
    icon: <DashboardCustomizeOutlinedIcon />,
    children: [
      {
        segment: "others/search-people",
        title: "Search People",
        icon: <PersonSearchOutlinedIcon />,
      },
      {
        segment: "others/blogs",
        title: "Blogs",
        icon: <FeedIcon />,
      },
      {
        segment: "others/hr-policy",
        title: "HR Policy",
        icon: <PolicyIcon />,
      },
      {
        segment: "others/settelement",
        title: "Settelement",
        icon: <ExitToAppIcon />,
      },
    ],
  },
];

export default navigation;
