import Products from "./Products";


const Sidebar = ({cartQueue}) => {
    return (
        <div className="md:w-1/2 border-2 border-gray-200 rounded-2xl p-4">
            <h2 className="bg-purple-600  font-bold text-xl p-3 text-center text-white rounded-md">Your Cart is here</h2>
            <h2 className="text-purple-600 font-bold text-xl p-5 text-center rounded-2xl">{cartQueue.length} Product Added To Cart</h2>

            <table className="table">
    {/* head */}
    <thead className="text-2xl font-bold">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cartQueue.map(product =>(
            <tr className="hover:bg-base-300" key={product.product_id}>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-20 w-20">
                <img
                  src={product.product_image}
                  alt="Product Emage here" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.product_name}</div>
              <div className="text-sm opacity-50">{product.Review} Reviews</div>
            </div>
          </div>
        </td>
        <td>{product.price} Taka</td>
        <th>
          <button className="btn bg-purple-600 btn-xs text-white">Purchase</button>
        </th>
      </tr>
        ))
      }
      </tbody>
      </table>
        </div>
    );
};

export default Sidebar;