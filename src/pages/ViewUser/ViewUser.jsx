import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useTitle from "../../hook/useTitle";

const ViewUser = () => {
    useTitle('ViewUser')
    const { id } = useParams();
    const { data: user } = useQuery(['users', id], async () => {
        const res = await fetch(`http://localhost:3000/users/${id}`)
        return res.json()
    })
    console.log(user);
    const { firstName, lastName, email, userPhoto, phoneNumber, date, _id } = user || {};
    return (
        <div className="max-w-screen-xl mx-auto mb-20">
            <h2 className="text-center font-bold md:text-4xl text-2xl mt-10">User Details</h2>
            <div className="overflow-x-auto mt-28">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className=" md:text-base text-sm">
                                #
                            </th>
                            <th className=" md:text-base text-sm">Image</th>
                            <th className=" md:text-base text-sm">Id</th>
                            <th className=" md:text-base text-sm">UserName</th>
                            <th className=" md:text-base text-sm">Email</th>
                            <th className=" md:text-base text-sm">Phone no</th>
                            <th className=" md:text-base text-sm">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr>
                            <th>
                                <FaUser className="h-[20px] w-[20px]"/>
                            </th>
                            <td>

                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={userPhoto} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>


                            </td>
                            <td>
                                {_id}
                            </td>
                            <td>
                                {firstName} {lastName}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {phoneNumber}
                            </td>
                            <td>
                                {date}
                            </td>
                        </tr>

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ViewUser;