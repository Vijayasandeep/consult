const PromotersSection = () => {
    return (
        <div className="py-12 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">PROMOTERS OF OUR GROWTH</h2>

                <div className="flex justify-center gap-12 mb-12">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">INDIVIDUAL PROMOTERS</div>
                            <div className="stat-value text-primary">500</div>
                        </div>
                    </div>

                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">INSTITUTIONAL PROMOTERS</div>
                            <div className="stat-value text-secondary">600</div>
                        </div>
                    </div>
                </div>

                <div className="divider">OR</div>
            </div>
        </div>
    );
};

export default PromotersSection;