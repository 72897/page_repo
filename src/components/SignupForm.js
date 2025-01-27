import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignupForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }
    setLoggedIn(true);
    toast.success("Accoutn Created");
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };

    console.log("printing account data");
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          }py-2 px-5 rounded-full transparent-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>

        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          }py-2 px-5 rounded-full transparent-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-4 mt-[20px]">
          <label className="w-full ">
            <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.5rem text-richblack-5 w-full p-[12px] border-b-2 border-blue-500 rounded-md"
            />
          </label>
          <label className="w-full ">
            <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem text-richblack-5 w-full p-[12px] border-b-2 border-blue-500 rounded-md"
            />
          </label>
        </div>

        <div className="mt-[20px]">
          <label className="w-full mt-[20px]">
            <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter email"
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem text-richblack-5 w-full p-[12px] border-b-2 border-blue-500 rounded-md"
            />
          </label>
        </div>

        <div className="flex  gap-x-3">
          <label className="w-full relative mt-[20px]">
            <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem text-richblack-5 w-full p-[12px] border-b-2 border-blue-500 rounded-md"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="w-full  relative mt-[20px]">
            <p className="text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.5rem text-richblack-5 w-full p-[12px] border-b-2 border-blue-500 rounded-md"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <FaEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
