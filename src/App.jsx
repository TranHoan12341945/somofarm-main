import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Admin/layouts/dashboard"; 
import Auth from "./Admin/layouts/auth";
import SignIn from "./Admin/pages/auth/sign-in";
import { Banner } from "./components/Banner";
// import { Form } from "./components/Banner/Form";
import { Destaques } from "./components/Destaques";
import { Footer } from "./components/Footer";
import { GridImages } from "./components/GridImages";
import { Header } from "./components/Header";
// import RoomList from "./components/Roomlist";
import ManageRooms from "./Admin/pages/dashboard/tables"; // Adjusted path
import BookedRooms from "./Admin/pages/dashboard/bookedrooms";
import CustomerManagement from "./Admin/pages/dashboard/CustomerManagement"; // Import mới
import StaffManagement from "./Admin/pages/dashboard/StaffManagement"; // Import mới
import RoomListPage from './pages/RoomListPage/RoomListPage';
import CancelBookingPage from './pages/CancelBookingPage/CancelBookingPage';
import DetailPage from './pages/DetailPage/DetailPage';
import SearchRoomPage from './pages/SearchRoomPage/SearchRoomPage';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Banner />
          <Destaques />
          <GridImages />
          {/* <Form /> */}
          <Footer />
        </>
      } />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/admin" element={<Navigate to="/dashboard/manage-rooms" replace />} />
      {/* <Route path="/rooms" element={<RoomList />} /> */}
      <Route path="/manage-rooms" element={<ManageRooms />} />
      <Route path='/room-list' element={<RoomListPage />} />
      <Route path='/cancel-booking' element={<CancelBookingPage />} />
      <Route path='/room-detail' element={<DetailPage />} />
      <Route path='/search-room' element={<SearchRoomPage />} />
      {/* <Route path="/booked-rooms" element={<BookedRooms />} /> */}
      <Route path="/manage-customers" element={<CustomerManagement />} /> {/* Thêm route mới */}
      <Route path="/manage-staff" element={<StaffManagement />} /> {/* Thêm route mới */}
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
