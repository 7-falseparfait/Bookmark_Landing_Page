import "../src/index.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Extension } from "./Extension";
import { Faqs } from "./Faqs";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Extension />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
