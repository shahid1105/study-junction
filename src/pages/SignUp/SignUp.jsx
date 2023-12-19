import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire("Sign Up successfully");
      })
      .catch((error) => {
        console.error(error);
      });
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
        <div className="w-full max-w-2xl p-2 bg-white shadow-md rounded-md">
          <div>
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-2 pb-2">
              <div className="form-control">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-2 border rounded-md"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
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
                  placeholder="Enter Your Password"
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
              <div className="form-control">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirm", {
                    required: true,
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded-md"
                />
                {errors.confirm?.type === "required" && (
                  <span className="text-red-500">
                    Confirm Password is required
                  </span>
                )}
                {errors.confirm?.type === "validate" && (
                  <span className="text-red-500">{errors.confirm.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  btn btn-sm text-white mt-2"
              >
                Sign UP
              </button>
            </form>
            <p className="text-center">
              <small>
                All Ready Have An Account?{" "}
                <Link className="font-bold text-orange-500" to="/login">
                  Login Here
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
