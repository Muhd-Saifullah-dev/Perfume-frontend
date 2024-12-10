"use client";

import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Index = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        <h1 className="text-3xl font-bold mt-2">Sign In</h1>
        <p>Welcome back</p>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter Your Email.."
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
            <button className="w-full bg-black px-2 py-2 rounded-lg text-white hover:bg-gray-800 transition duration-200">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-2">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Index;
