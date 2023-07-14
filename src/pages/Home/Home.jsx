import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaRegEye, FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const Home = () => {
    useTitle('Home')
    // tanStack query 
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://user-management-server-vert.vercel.app/users')
        return res.json()
    })





    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://user-management-server-vert.vercel.app/users/${id}`, {
                    method: "DELETE"

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);


                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }


                    })

            }

        })



    }

    return (
        <div className="max-w-screen-xl mx-auto mb-20 md:px-0 px-3">
            <h1 className="md:text-5xl text-2xl font-bold mt-10 text-center">User Management System</h1>
            <h1 className="md:text-5xl font-bold my-10 text-2xl">All Users</h1>
            <Link to={`/addUser/${'postId'}`}>
                <button className="btn btn-secondary btn-sm mb-5">Add User</button>
            </Link>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table  table-zebra w-full">
                        {/* head */}
                        <thead >
                            <tr>
                                <th>
                                    #
                                </th>
                                <th className=" md:text-base text-sm">User Photo</th>
                                <th className=" md:text-base text-sm">Id</th>
                                <th className=" md:text-base text-sm">User Name</th>
                                <th className=" md:text-base text-sm">View</th>
                                <th className=" md:text-base text-sm">Edit</th>
                                <th className=" md:text-base text-sm">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}

                            {
                                users?.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>



                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={user?.userPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{user?._id}</td>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    <td>
                                        <Link to={`/viewUser/${user._id}`}>
                                            <button className="btn btn-secondary md:btn-sm ">
                                                View
                                                <FaRegEye />
                                            </button>
                                        </Link>
                                    </td>

                                    <td>
                                        <Link to={`/addUser/${user._id}`}>
                                            <button className="btn btn-secondary md:btn-sm">
                                                Edit
                                                <FaUserEdit />
                                            </button>
                                        </Link>
                                    </td>

                                    <td>

                                        <button onClick={() => handleDelete(user._id)} className="btn btn-ghost bg-red-600  text-white">
                                            {/* Delete */}
                                            <FaRegTrashAlt />
                                        </button>

                                    </td>



                                </tr>)
                            }



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;