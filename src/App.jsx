import { Banner } from "./components/Banner";
import { Form } from "./components/Banner/Form";
import { Destaques } from "./components/Destaques";
import { Footer } from "./components/Footer";
import { GridImages } from "./components/GridImages";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="bg-gray-50">
      <Header/>
      <Banner/>
      <Destaques/>
      <GridImages/>
      <Form />
      <Footer/>
    </div>
  ) 
}
