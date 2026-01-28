import hero from "../assets/hero.jpg";

const Banner = () => {
    return (
        <div className="w-full mx-auto lg:flex justify-between items-center gap-20">

            {/* <!-- left div --> */}
            <div className="sm:w-full md:w-1/2 space-y-5">
                <h2 className="text-purple-500 text-4xl font-bold">“Your trusted travel partner for unforgettable journeys.”</h2>
                <p className="text-gray-500">Welcome to ABC Travels, one of the leading travel agencies in Bangladesh. With our curated packages and customer-first approach, we help travelers explore the world with ease. Partner with us to discover breathtaking destinations and create lifelong memories. Experience the power of ABC Travels and unlock the adventure of a lifetime.</p>
                <div className="md:space-x-3">
                    <button className="text-white font-bold bg-purple-500 px-5 py-2">Book Free Consulation</button>
                <button className="font-bold border border-purple-500 px-5 py-2">Explore Destinations Here</button>
                </div>
            </div>

            {/* right div */}
            <div className="sm: mt-5 lg:w-1/2 border-4 border-purple-400 rounded-2xl">
                {/* <img src="" alt="" /> */}
                <img className="w-full rounded-xl" src={hero} alt="Hero banner" />
            </div>
        </div>
    );
};

export default Banner;