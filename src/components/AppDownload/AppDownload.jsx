import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <section className="py-8 md:py-12" id="mobile-app"   >
      <div className="text-center">

        <h2 className="text-2xl md:text-3xl font-semibold">
          For Better Experience Download
          <br />
          Food Taka App
        </h2>

        <div className="flex justify-center items-center gap-4 mt-6">

          {/* Google Play Store */}
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.play_store}
              alt="Download on Google Play"
              className="w-36 sm:w-40 cursor-pointer"
            />
          </a>

          {/* Apple App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.app_store}
              alt="Download on App Store"
              className="w-36 sm:w-40 cursor-pointer"
            />
          </a>

        </div>
      </div>
    </section>
  )
}

export default AppDownload