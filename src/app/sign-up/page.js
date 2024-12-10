"use client";

import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";

// Define Yup schema for validation
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("Form submitted successfully", formData);
    } catch (validationErrors) {
      const errorObj = {};
      validationErrors.inner.forEach((error) => {
        errorObj[error.path] = error.message;
      });
      setErrors(errorObj);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[550px] bg-white rounded-xl px-10 py-5 shadow-md">
        <h1 className="text-3xl font-bold mt-2">Sign Up</h1>
        <p>Create your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              className={`w-full px-2 py-2 border ${
                errors.username ? "border-red-500" : "border-black"
              } rounded-lg mt-1`}
              id="username"
              name="username"
              type="text"
              value={formData.username}
              placeholder="Enter Your Username"
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mt-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              className={`w-full px-2 py-2 border ${
                errors.email ? "border-red-500" : "border-black"
              } rounded-lg mt-1`}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mt-4 w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              className={`w-full px-2 py-2 border ${
                errors.password ? "border-red-500" : "border-black"
              } rounded-lg mt-1`}
              id="password"
              name="password"
              type="password"
              value={formData.password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mt-4 w-full">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              className={`w-full px-2 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-black"
              } rounded-lg mt-1`}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              placeholder="Confirm Your Password"
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="mt-4 w-full">
            <button className="w-full bg-black px-2 py-2 rounded-lg text-white hover:bg-gray-800 transition duration-200">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
