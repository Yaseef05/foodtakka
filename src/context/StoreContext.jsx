
import { useState } from "react";
import { createContext } from "react";


export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) =>{

    const [category, setCategory] = useState("All");
     const [quantities, setQuantities] = useState({});
     const [appliedPromo, setAppliedPromo] = useState(null);
      const increaseQuantity = (id)=>{
        setQuantities((prev)=>{
            return {...prev,[id]: (prev[id] ||0) + 1}
        })

     }
     const decreaseQuantity = (id) => {
  setQuantities((prev) => ({
    ...prev,
    [id]: Math.max((prev[id] || 0) - 1, 0),
  }));
};
 // Apply promo code
  const applyPromoCode = (code, subtotal) => {
    const normalizedCode = code.trim().toUpperCase();

    if (normalizedCode === "FOOD10") {
      const discount = subtotal * 0.1;

      setAppliedPromo({
        code: normalizedCode,
        discount,
      });

      return {
        success: true,
        message: "Promo code applied successfully!",
      };
    }

    return {
      success: false,
      message: "Invalid promo code",
    };
  };

  // Remove promo code
  const removePromoCode = () => {
    setAppliedPromo(null);
  };
const clearCart = () => {
  setQuantities({});
};

  const contextValue = {
    category,
    setCategory,
    quantities,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
     appliedPromo,
    applyPromoCode,
    removePromoCode,
  };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;