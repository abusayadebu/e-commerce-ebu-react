
const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
  <div className="">
    <a className="btn btn-ghost text-xl">Ebu E-Commerce</a>
  </div>

  <ul className="flex items-center gap-8">
    <li><a href="">Home</a></li>
    <li><a href="">Products</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contact</a></li>
  </ul>

  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

    );
};

export default Header;