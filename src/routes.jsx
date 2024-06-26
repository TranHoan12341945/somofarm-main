import { 
  HomeIcon, 
  UserCircleIcon, 
  TableCellsIcon, 
  InformationCircleIcon, 
  ServerStackIcon, 
  RectangleStackIcon, 
  BookOpenIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import Home from "./Admin/pages/dashboard/home";
import Profile from "./Admin/pages/dashboard/profile";
import Tables from "./Admin/pages/dashboard/tables";
import Notifications from "./Admin/pages/dashboard/notifications";
import SignIn from "./Admin/pages/auth/sign-in";
import SignUp from "./Admin/pages/auth/sign-up";
import ManageRooms from "./Admin/pages/dashboard/tables";
// import BookedRooms from "./Admin/pages/dashboard/bookedrooms";
import StaffManagement from "./Admin/pages/dashboard/StaffManagement";
import CustomerManagement from "./Admin/pages/dashboard/CustomerManagement";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "dashboard",
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      {
        icon: <BookOpenIcon {...icon} />,
        name: "Manage Rooms",
        path: "/manage-rooms",
        element: <ManageRooms />,
      },
      // {
      //   icon: <BookOpenIcon {...icon} />,
      //   name: "Booked Rooms",
      //   path: "/booked-rooms",
      //   element: <BookedRooms />,
      // },
      {
        icon: <BriefcaseIcon {...icon} />,
        name: "Manage Staff",
        path: "/manage-staff",
        element: <StaffManagement />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Manage Customers",
        path: "/manage-customers",
        element: <CustomerManagement />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
