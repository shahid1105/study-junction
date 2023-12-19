import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import login from "../../../public/login-img.png";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire("Login successfully");
  };

  return (
    <div
      style={{ backgroundImage: "url('../../../public/images (1).jpeg')" }}
      className="bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <Link
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-tr-3xl btn btn-sm"
        to="/"
      >
        Home
      </Link>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl p-2 bg-white shadow-md rounded-md flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={login}
              alt="Login"
              className="pt-14 rounded-full md:mx-0"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-12 pb-12">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full p-2 border rounded-md"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <label className="mt-2 flex items-center text-sm">
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                    className="mr-1"
                  />
                  Show Password
                </label>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  btn btn-sm text-white"
              >
                Login
              </button>
            </form>
            <p className="text-center">
              <small>
                New Here?{" "}
                <Link className="font-bold text-orange-500" to="/signUp">
                  Create A New Account
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
