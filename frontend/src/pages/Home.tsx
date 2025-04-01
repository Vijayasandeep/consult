
import PromotersSection from "../components/PromotersSection";
import LoginForm from "../components/LoginForm";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex w-full bg-blue-500">
           
            </div>
            <main className="flex-grow">
                <PromotersSection />
                <LoginForm />
            </main>
        </div>
    );
};

export default Home;