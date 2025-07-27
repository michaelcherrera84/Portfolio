import bannerImage from '../../../public/images/bitmoji2.png';

function Banner() {
    return (
        <div id="home">
            <div className="bg-banner-radial flex justify-center items-center mt-[-50px] pt-[50px] lg:px-24">
                <div className="flex flex-col min-h-96 w-full md:flex-row md:justify-between md:px-20 lg:max-w-5xl lg:px-0">
                    <div className="self-center py-5">
                        <h1 className="font-audiowide text-3xl text-[#ce4233] text-shadow-[1px_1px_1px_#382711] text-nowrap lg:text-5xl">
                            Michael C. Herrera
                        </h1>
                        <p className="font-medium text-2xl text-[#ce4233] text-shadow-[1px_1px_1px_#382711] text-center md:text-left">
                            Software Developer
                        </p>
                    </div>
                    <div className="self-center md:self-end">
                        <img src={bannerImage} alt="My Bitmoji" className="h-80 min-w-[171px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;