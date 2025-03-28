import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PromotersSection from "../components/PromotersSection";
import LoginForm from "../components/LoginForm";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navbar />
            <main className="flex-grow">
                <PromotersSection />
                <LoginForm />
            </main>
        </div>
    );
};

export default Home;