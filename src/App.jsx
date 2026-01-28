import Banner from "./components/Banner";
import Header from "./components/Header";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="container mx-auto px-4">
            {/* header */}
            <Header></Header>
            {/* banner */}
            <Banner></Banner>
            {/* cards Section */}
            <section className="my-14 md:flex gap-4">
                {/* products container*/}
                    <Products></Products>
                {/* sidebar */}
                <Sidebar></Sidebar>
            </section>
        </div>
    );
};

export default App;