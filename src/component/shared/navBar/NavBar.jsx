import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navLinks = <>
 <li>
 <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 Home
</NavLink>
 </li>
 <li>
 <NavLink
  to="/employee"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 Join as Employee
</NavLink>
 </li>
 <li>
 <NavLink
  to="/hrAdmin"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 Join as HR/Admin
</NavLink>
 </li>
    </>
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <div className="flex">
    <a className="btn btn-ghost text-xl"><img className="max-w-11" src="https://i.ibb.co/3dWQJ0n/asset-logo.png" alt="" /></a>
    <h1 className="font-bold text-4xl">AMS</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   <Link to="/login"><button className="btn btn-ghost">Login</button></Link>
   
  </div>
</div>
        </div>
    );
};

export default NavBar;