import "./styles/styles.css";
import Hero from "./components/Hero/Hero";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <section className="first-container">
      <Header />
      <Hero />
      <Footer />
    </section>
  );
}

export default App;
