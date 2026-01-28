import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])

    // usEffect for the data fetch
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    console.log(products)
    return (
        <div className='md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                products.map(product =>(
                    <div key={product.product_id} className="card bg-base-100 shadow-sm">
  <figure>
    <img className="w-full h-50"
      src={product.product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{product.product_name}</h2>
    <p className="text-lg">{product.product_details}</p>

    {/* reviws-div */}
    <div className="flex gap-5 items-center text-purple-500">
        <p>Reviews: {product.Review}</p>
        <p>Available: {product.available}</p>
    </div>
    <div className="flex fap-4 text-lg font-semibold items-center">
        <i className="fa-solid fa-dollar-sign"></i>
        <p className="">Price: {product.price}</p>
    </div>

    {/* features and benifits div */}
    <div className="mt-6 flex gap-4">
        {/* features div */}
            <div>
                <h2 className="font-bold text-purple-800">Key features:</h2>
                {
                    product.features_benefits.features.map((feature, index)=>(
                        <li key={index} className="ml-2">{feature}</li>
                    ))
                }
            </div>
        {/* benifits div */}
        <div>
                <h2 className="font-bold text-purple-800">Key Benifits:</h2>
                {
                    product.features_benefits.benefits.map((benifit, index)=>(
                        <li key={index} className="ml-2">{benifit}</li>
                    ))
                }
            </div>
    </div>
    <div className="card-actions mt-5">
      <button className="btn w-full bg-purple-600 text-lg text-white font-semibold">Add to Cart</button>
    </div>
  </div>
</div>
                ))
            }
        </div>
    );
};

export default Products;