import React from 'react'
import { assets } from '../../assets/assets'
import logo from "../../assets/food-takka-logo.svg"

const Footer = () => {
  return (
    <footer
      className="bg-[#323232] text-white"
      id="contact"
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-8
          md:py-10
        "
      >

        {/* Footer Content */}
        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:justify-between
            md:gap-10
          "
        >

          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-[45%]">

            <img
              src={logo}
              alt="Food Taka Logo"
              className="w-32 sm:w-36 mb-4"
            />

            <p className="text-gray-300 text-sm leading-6 max-w-md">
              Delicious food delivered to your doorstep.
              Order your favorite meals quickly and easily
              with Food Taka.
            </p>

            <div className="flex gap-4 mt-5">

              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition"
              />

              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition"
              />

              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition"
              />

            </div>

          </div>


          {/* CENTER */}
          <div className="w-full md:w-1/4">

            <h2 className="text-lg font-semibold mb-4">
              COMPANY
            </h2>

            <ul className="space-y-2 text-sm text-gray-300">

              <li className="cursor-pointer hover:text-white transition">
                Home
              </li>

              <li className="cursor-pointer hover:text-white transition">
                About Us
              </li>

              <li className="cursor-pointer hover:text-white transition">
                Delivery
              </li>

              <li className="cursor-pointer hover:text-white transition">
                Privacy Policy
              </li>

            </ul>

          </div>


          {/* RIGHT */}
          <div className="w-full md:w-1/4">

            <h2 className="text-lg font-semibold mb-4">
              GET IN TOUCH
            </h2>

            <div className="space-y-2 text-sm text-gray-300">

              <p>+91 98765 43210</p>

              <p>foodtaka@gmail.com</p>

            </div>

          </div>

        </div>


        {/* Divider */}
        <hr className="border-gray-600 my-6" />


        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm text-gray-400">
          Copyright © 2026 Food Taka. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer