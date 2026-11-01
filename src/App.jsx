import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}