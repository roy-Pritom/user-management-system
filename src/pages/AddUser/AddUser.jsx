import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name"  {...register("firstName", { required: true })} className="input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name"  {...register("lastName", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"  {...register("email", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input type="url" placeholder="PhotoUrl"  {...register("userPhoto", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" placeholder="Phone Number"  {...register("phoneNumber", { required: true })} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="number" placeholder="Date"  {...register("phoneNumber")} className="input input-bordered" />
                                </div>
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;