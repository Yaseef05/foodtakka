import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ onClose }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form className="relative w-full max-w-md mx-4 rounded-xl bg-white p-8 shadow-2xl">

        {/* Title */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            {currState}
          </h2>

          <img
            onClick={onClose}
            src={assets.cross_icon}
            alt="Close"
            className="h-5 w-5 cursor-pointer"
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">

          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
            />
          )}

          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
          />

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms */}
        <div className="mt-4 flex items-start gap-2">
          <input
            type="checkbox"
            required
            className="mt-1 cursor-pointer"
          />

          <p className="text-xs leading-5 text-gray-500">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {/* Switch Login / Sign Up */}
        {currState === "Login" ? (
          <p className="mt-5 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="cursor-pointer font-medium text-orange-500 hover:underline"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="cursor-pointer font-medium text-orange-500 hover:underline"
            >
              Login
            </span>
          </p>
        )}

      </form>
    </div>
  );
};

export default LoginPopup;