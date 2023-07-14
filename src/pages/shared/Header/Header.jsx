import { Link } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
const Header = () => {
    const navLinks=<>
            <li className="">

            <Link to='/'>Home</Link>    
            </li>
            <li className="">

            <Link to={`/addUser/${'postId'}`}>Add User</Link>    
            </li>
            <li className="">

            <Link to='/about'>About Us</Link>    
            </li>
           
          
    </>
    return (
        <div>
            
            <div className="navbar bg-purple-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}

      </ul>
    </div>
    <div className="flex justify-center items-center ">

    <img src="https://png.pngtree.com/png-vector/20190712/ourmid/pngtree-user-management-icon-trendy-style-isolated-background-png-image_1542180.jpg"
     className="md:w-12 md:h-12 w-8 h-8 md:ml-0 ml-3 rounded-full" alt="" />
    <a className="btn btn-ghost normal-case font-bold text-xl">userManagement</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-secondary "><FaUserCog className="md:w-10 md:h-10"/></a>
  </div>
</div>


        </div>
    );
};

export default Header;