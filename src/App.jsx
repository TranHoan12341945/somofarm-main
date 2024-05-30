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
    </Routes>
  );
}

export default App;