function Banner() {
    return (
        <div id="home" className="mt-[-50px] pt-[50px] bg-[#343944]">
            <div className="px-4 py-8 flex justify-center items-center lg:px-24">
                <div className="bg-banner-radial-red text-[#343944] flex flex-col items-center w-full md:w-1/2 p-3 border-6 border-white rounded-lg ">
                    <h1 className="text-5xl font-black">Tutoring</h1>
                    <h2 className="text-lg font-semibold">Let me help you succeed!</h2>
                    <img src="/images/tutoring.png" alt="Tutoring" className="h-[282px] w-[235px] mt-3"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;