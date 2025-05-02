import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import LatestNews from "./pages/LatestNews.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions .tsx";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <div className="flex flex-col min-h-screen bg-white">
                    <Navbar />
                    <main className="flex-1 pt-20"> {/* Adjust pt-20 to match your Navbar height */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/services/:key" element={<LatestNews />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>

        </>
       
    );
}

export default App;