import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const AddUser = () => {
    
    const {id}=useParams();
    // console.log(id);
    // conditionally change title
    if(id==='postId')
    {
        useTitle('AddUser')
    }
    else{
        useTitle('EditUser')
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        if(id==='postId')
        {
            
            fetch('http://localhost:3000/postUser',{
               method:'POST',
               headers:{
                   'content-type':'application/json'
               },
               body:JSON.stringify(data)
       
            })
            .then(res=>res.json())
            .then(info=>{
               if(info.insertedId)
               {
       
                   Swal.fire({
                     position: 'top-end',
                     icon: 'success',
                     title: 'user added successfully',
                     showConfirmButton: false,
                     timer: 1500
                   })
               }
            })
        }

        // Update user
        else{

            fetch(`http://localhost:3000/users/${id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
        
             })
             .then(res=>res.json())
             .then(info=>{
                if(info)
                {
        
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'user updated successfully',
                      showConfirmButton: false,
                      timer: 1500
                    })
                }
             })

        }

    };
    return (
     <div className="bg-base-200">
         {
            id ==='postId'?
            <div className="">
            <h2 className="pt-8 text-center md:text-4xl text-2xl font-bold">Add User</h2>
            <div className="hero ">
                    <div className="hero-content my-10">
    
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
                                        <input type="date" placeholder="Date"  {...register("date")} className="input input-bordered" />
                                    </div>
                                </div>
    
    
    
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-secondary">Add User</button>
                                </div>
                            </form>
    
                        </div>
                    </div>
                </div>
           </div>
           :
        // Update
           <div className="">
           <h2 className="pt-8 text-center md:text-4xl text-2xl font-bold">Edit User</h2>
           <div className="hero ">
                   <div className="hero-content my-10">
   
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
                                       <input type="date" placeholder="Date"  {...register("date", { required: true })} className="input input-bordered" />
                                   </div>
                               </div>
   
   
   
                               <div className="form-control mt-6">
                                   <button type="submit" className="btn btn-secondary">Update User</button>
                               </div>
                           </form>
   
                       </div>
                   </div>
               </div>
          </div>
         }
     </div>
    );
};

export default AddUser;