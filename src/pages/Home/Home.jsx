import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mt-20">User Management System</h1>
            <h1 className="text-5xl font-bold mt-20">All Users</h1>
          <Link to='/addUser'>
          <button className="btn btn-secondary">Add User</button>
          </Link>
            <div className="">

            </div>
        </div>
    );
};

export default Home;