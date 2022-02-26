import "./App.css";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Homescreen from "./Screens/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
