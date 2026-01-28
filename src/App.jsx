import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const App = () => {
        // cartQue state declare
        const [cartQueue, setCartQueue] = useState([])


        // function for the button handler
        const handleAddToCart = (product)=>{
            const isExist = cartQueue.find(previousProduct => previousProduct.product_id === product.product_id)
            if(!isExist){
                setCartQueue([...cartQueue, product])
            }
            else{
                alert("opps, you already added this product to the cart")
            }
        }


    return (
        <div className="container mx-auto px-4">
            {/* header */}
            <Header></Header>
            {/* banner */}
            <Banner></Banner>
            {/* cards Section */}
            <section className="my-14 md:flex gap-4">
                {/* products container*/}
                    <Products handleAddToCart={handleAddToCart}></Products>
                {/* sidebar */}
                <Sidebar cartQueue={cartQueue}></Sidebar>
            </section>
        </div>
    );
};

export default App;