import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Admin/layouts/dashboard"; 
import Auth from "./Admin/layouts/auth";
import SignIn from "./Admin/pages/auth/sign-in";
import { Banner } from "./components/Banner";
import { Form } from "./components/Banner/Form";
import { Destaques } from "./components/Destaques";
import { Footer } from "./components/Footer";
import { GridImages } from "./components/GridImages";
import { Header } from "./components/Header";
import RoomList from "./components/Roomlist";
import ManageRooms from "./Admin/pages/dashboard/tables"; // Adjusted path
import BookedRooms from "./Admin/pages/dashboard/bookedrooms";

export function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Banner />
          <Destaques />
          <GridImages />
          <Form />
          <Footer />
        </>
      } />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/admin" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/rooms" element={<RoomList />} />
      <Route path="/manage-rooms" element={<ManageRooms />} />
      <Route path="/booked-rooms" element={<BookedRooms />} />
    </Routes>
  );
}

export default App;
