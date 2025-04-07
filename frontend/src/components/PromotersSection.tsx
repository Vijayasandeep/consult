const PromotersSection = () => {
    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-6">PROMOTERS OF OUR GROWTH</h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="flex-1 border rounded p-4 text-center">
                    <div className="text-sm text-gray-500">INDIVIDUAL PROMOTERS</div>
                    <div className="text-2xl font-bold text-violet-600">500</div>
                </div>
                <div className="flex-1 border rounded p-4 text-center">
                    <div className="text-sm text-gray-500">INSTITUTIONAL PROMOTERS</div>
                    <div className="text-2xl font-bold text-pink-600">600</div>
                </div>
            </div>
        </div>
    );
};

export default PromotersSection;
