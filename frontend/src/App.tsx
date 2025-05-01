import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            <Router>
                <div className="flex flex-col min-h-screen bg-white">
                    <Navbar />
                    <main className="flex-1 pt-20"> {/* Adjust pt-20 to match your Navbar height */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>

        </>
       
    );
}

export default App;