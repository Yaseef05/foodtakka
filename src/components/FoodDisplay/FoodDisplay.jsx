import React, { useContext} from 'react';
import { StoreContext } from '../../context/StoreContext';
import { food_list,} from '../../assets/assets';
import { assets } from '../../assets/assets';


const FoodDisplay = () => {
     const {
  category,
  quantities,
  increaseQuantity,
  decreaseQuantity,
} = useContext(StoreContext);


     const filterFood = category === "All" ? food_list : food_list.filter((item)=>{
        return  item.category === category;
     })


  return (
    <section className='w-full px-4 sm:px-6 lg:px-10 py-8'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 '>Top Dishes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {
                filterFood.map((item)=>{
                    return <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
                        <div className='w-full h-48 sm:h-52 overflow-hidden'>
                             <img src={item.image} alt=""
                             className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                              />

                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between gap-2">
  <h3 className="text-lg font-semibold text-gray-900">
    {item.name}
  </h3>

  <img
    src={assets.rating_starts}
    alt="Rating"
    className="w-16 h-auto shrink-0"
  />
</div>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                {item.description}

                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-lg font-bold text-gray-900">
                                                       ${item.price}

                                </p>
                  <div className="flex items-center gap-2">
  {(quantities[item.id] || 0) === 0 ? (
    // Show Add button initially
    <button
      onClick={() => increaseQuantity(item.id)}
      className="
        px-4 py-2
        rounded-full
        bg-orange-500
        text-white
        font-medium
        hover:bg-orange-600
        transition
      "
    >
      Add
    </button>
  ) : (
    // Show - quantity + after clicking Add
    <>
      <button
        onClick={() => decreaseQuantity(item.id)}
        className="
          w-8 h-8
          rounded-full
          border border-gray-300
          flex items-center justify-center
          text-lg
          text-gray-700
          hover:bg-gray-100
          transition
        "
      >
        −
      </button>

      <span className="w-5 text-center font-medium">
        {quantities[item.id]}
      </span>

      <button
        onClick={() => increaseQuantity(item.id)}
        className="
          w-8 h-8
          rounded-full
          bg-orange-500
          text-white
          flex items-center justify-center
          text-lg
          hover:bg-orange-600
          transition
        "
      >
        +
      </button>
    </>
  )}
</div>
                               
                            </div>
                            

                        </div>
                       
                        </div>

                })
            }
            </div>
        </div>
    </section>
  )
}

export default FoodDisplay
