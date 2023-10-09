import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-hot-toast";
import SocialLogin from "../components/shared/SocialLogin";
import UseAuth from "../Hooks/UseAuth";
import { saveUser } from "../api/auth";
// import axios from 'axios';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = UseAuth();

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const from = location.state?.from?.pathname || '/'

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        updateUserProfile(data.name, data.PhotoUrl)
          .then(() => {
            saveUser(result.user)
            .then((data) => {
              // console.log(data);
              if (data.upsertedCount)
              reset();
                toast.success("Singed up successfully", {
                  duration: 3000,
                  style: {
                    background: "#E3F4F4",
                    fontWeight: "700",
                  },
                });
              navigate(from, { replace: true });
            })
            .catch((err) => console.log(err.message));
            
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const validatePassword = (value) => {
    const password = watch("password"); // Get the value of the password field
    if (value !== password) {
      return "Password do not match";
    }
    return true;
  };
  const showPassword = () => {
    setVisible((preState) => !preState);
  };

  return (
    <div className="pt-20 font-kanit pb-10">
      <div className="w-full px-2 lg:p-0 lg:w-96 mx-auto border-4 rounded-lg">
        <SocialLogin></SocialLogin>
        <div className="divider px-3">OR</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white bg-opacity-75 shadow-lg"
        >
          <div className="px-8 pt-6 pb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                id="name"
                type="text"
                placeholder="Enter your Name"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            {/* passoword field */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\])/,
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                  id="password"
                  type={visible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <div
                  onClick={showPassword}
                  type="button"
                  className="flex items-center"
                >
                  {visible ? (
                    <FaEyeSlash className="-ml-7 w-6 h-6 text-gray-500"></FaEyeSlash>
                  ) : (
                    <FaEye className="-ml-7 w-6 h-6 text-gray-500"></FaEye>
                  )}
                </div>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is requied</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password should be minimum six length
                </p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password should contain one Uppercase letter and one special
                  character
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                {...register("confirm", {
                  required: true,
                  validate: validatePassword,
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                id="confirm"
                type="password"
                placeholder="Confirm your password"
              />
              {errors.confirm && (
                <span className="text-red-500">Password do not match</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Photo URL
              </label>
              <input
                {...register("PhotoUrl", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                id="photo"
                type="text"
                placeholder="Enter Photo URL"
              />
              {errors.PhotoUrl && (
                <span className="text-red-500">PhotoURL is required</span>
              )}
            </div>
            <div className="flex items-center justify-between">
            <button className="px-5 py-2 rounded-full btn-1 text-white hover:bg-black transition tracking-wide">
              Signin
            </button>
            </div>
          </div>
          <p className="ml-8 pb-7 pt-2">
            Already have and account?{" "}
            <Link to="/login">
              <span className="text-yellow-600 hover:text-blue-950">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
