import PromotersSection from "../components/PromotersSection";
import LoginForm from "../components/LoginForm";

const Home = () => {
    return (
        <div className=" min-h-[calc(100vh-96px)] flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
            <main className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl px-4 py-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <PromotersSection />
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <LoginForm />
                </div>
            </main>
        </div>
    );
};

export default Home;
