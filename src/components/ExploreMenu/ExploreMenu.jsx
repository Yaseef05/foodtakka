import React from "react";
import { useContext } from "react";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = () => {

    const { category, setCategory } = useContext(StoreContext);
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-6"  id="menu">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
          Explore our menu
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl">
      Discover a variety of delicious dishes made with fresh ingredients,
      perfect for every taste and craving.
    </p>

        <div className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {menu_list.map((item) => (
            <div
              key={item.menu_name}
              className="
                flex flex-col items-center justify-center
                shrink-0
                w-24 sm:w-28 md:w-32
                cursor-pointer
                group
              "
               onClick={() => setCategory(item.menu_name)}
            >
              <div
                className="
                  w-20 h-20
                  sm:w-24 sm:h-24
                  md:w-28 md:h-28
                  rounded-full
                  overflow-hidden
                  border-2 border-transparent
                  group-hover:border-orange-500
                  transition-all duration-200
                "
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="
                    w-full h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform duration-200
                  "
                />
              </div>

              <p className="mt-2 text-sm sm:text-base font-medium text-center whitespace-nowrap">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreMenu;