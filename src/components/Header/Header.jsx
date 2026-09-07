import React from "react";
import Button from "../button/Button";


const Header = () => {
  return (
    // <section className="w-full px-5 md:px-10">
    //   <div
    //     className="
    //       max-w-7xl
    //       mx-auto
    //       min-h-[400px]
    //       md:min-h-[500px]
    //       bg-cover
    //       bg-center
    //       bg-no-repeat
    //       rounded-2xl
    //       flex
    //       items-center
    //       overflow-hidden
    //     "
    //     style={{ backgroundImage: "url('/header_banner_food.png')" }}
    //   >
    //     <div className="w-full px-6 md:px-10 lg:px-16">
    //       <div className="max-w-xl">

    //         {/* Small heading */}
    //         <p className="text-orange-500 font-semibold text-sm md:text-base mb-3">
    //           Delicious food, delivered fast
    //         </p>

    //         {/* Main heading */}
    //         <h2
    //           className="
    //             text-4xl
    //             md:text-5xl
    //             lg:text-6xl
    //             font-bold
    //             text-gray-900
    //             leading-tight
    //           "
    //         >
    //           Order Your
    //           <span className="text-orange-500"> Favourite Food </span>
    //           Here
    //         </h2>

    //         {/* Description */}
    //         <p
    //           className="
    //             mt-5
    //             text-gray-600
    //             text-sm
    //             md:text-base
    //             leading-relaxed
    //             max-w-md
    //           "
    //         >
    //           Choose from a wide variety of delicious meals and get your
    //           favourite food delivered right to your doorstep.
    //         </p>

    //         {/* Button */}
    //         <div className="mt-7">
    //           <Button variant="primary">
    //             View Menu
    //           </Button>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>
   
    <section className="w-full">
        <div className="max-w-7xl mx-auto
         px-4 sm:px-6 lg:px-8
         min-h-[400px] md:min-h-[500px]
         bg-cover
         bg-center
         bg-no-repeat
         rounded-2xl
         overflow-hidden
         flex
         items-center
         "style={{
         backgroundImage: "url('/header_banner_food.png')"
}}
         
         >
            <div className="w-full px-6 md:px-10 lg:px-16">
                <div className="max-w-xl">
                    <p className="text-orange-500 font-semibold text-sm md:text-base mb-3">
  Delicious food, delivered fast
</p>
<h1  className="
  text-4xl
  md:text-5xl
  lg:text-6xl
  font-bold
  text-gray-900
  leading-tight"   >
  Order Your
  <span  className="text-orange-500"   >Favourite Food</span>
  Here
</h1>
  <p
              className="
                mt-5
                text-gray-600
                text-sm
                md:text-base
                leading-relaxed
                max-w-md
              "
            >
              Choose from a wide variety of delicious meals and get your
              favourite food delivered right to your doorstep.
            </p>
             <div className="mt-7">
              <Button variant="primary">
                View Menu
              </Button>
            </div>
                </div>

            </div>

        </div>

    </section>
  );
};

export default Header;