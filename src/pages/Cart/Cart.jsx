import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    quantities,
    increaseQuantity,
    decreaseQuantity,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
  } = useContext(StoreContext);
  

  // Local UI state
  // This only stores what the user is currently typing.
  const [promoInput, setPromoInput] = useState("");

  const [promoMessage, setPromoMessage] = useState("");
  const navigate = useNavigate();

  // --------------------------------
  // CART ITEMS
  // --------------------------------

  const cartItems = food_list.filter(
    (item) => quantities[item.id] > 0
  );

  // --------------------------------
  // SUBTOTAL
  // --------------------------------

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * quantities[item.id],
    0
  );

  // --------------------------------
  // DELIVERY FEE
  // --------------------------------

  const deliveryFee = subtotal > 0 ? 40 : 0;

  // --------------------------------
  // DISCOUNT
  // --------------------------------

  const discount = appliedPromo?.discount || 0;

  // --------------------------------
  // FINAL TOTAL
  // --------------------------------

  const total = subtotal + deliveryFee - discount;

  // --------------------------------
  // APPLY PROMO
  // --------------------------------

  const handlePromoCode = () => {
    const result = applyPromoCode(
      promoInput,
      subtotal
    );

    setPromoMessage(result.message);
  };

  // --------------------------------
  // REMOVE PROMO
  // --------------------------------

  const handleRemovePromo = () => {
    removePromoCode();
    setPromoInput("");
    setPromoMessage("");
  };

  return (
    <section className="w-full px-5 py-10 md:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* ================= PAGE HEADING ================= */}

        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Your Cart
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review your items before placing your order.
          </p>
        </div>


        {/* ================= EMPTY CART ================= */}

        {cartItems.length === 0 ? (

          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white">

            <div className="text-center">

              <h2 className="text-xl font-semibold text-gray-800">
                Your cart is empty
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Add some delicious food to your cart.
              </p>

              <button
                className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Browse Menu
              </button>

            </div>

          </div>

        ) : (

          /* ================= CART CONTENT ================= */

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">


            {/* ================= CART ITEMS ================= */}

            <div className="rounded-2xl border border-gray-200 bg-white">

              {/* Desktop Header */}

              <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-gray-200 px-6 py-4 text-sm font-medium text-gray-500 md:grid">

                <span>Food</span>

                <span>Price</span>

                <span>Quantity</span>

                <span className="text-right">
                  Total
                </span>

              </div>


              {/* Cart Items */}

              <div>

                {cartItems.map((item) => {

                  const quantity = quantities[item.id];

                  const itemTotal =
                    item.price * quantity;

                  return (

                    <div
                      key={item.id}
                      className="border-b border-gray-200 px-5 py-6 last:border-b-0 md:px-6"
                    >

                      <div className="grid gap-5 md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center md:gap-4">


                        {/* ================= FOOD ================= */}

                        <div className="flex items-center gap-4">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-xl object-cover"
                          />

                          <div className="min-w-0">

                            <h3 className="font-medium text-gray-900">
                              {item.name}
                            </h3>

                            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                              {item.description}
                            </p>

                          </div>

                        </div>


                        {/* ================= PRICE ================= */}

                        <div className="flex items-center justify-between md:block">

                          <span className="text-sm text-gray-500 md:hidden">
                            Price
                          </span>

                          <span className="font-medium text-gray-900">
                            ₹{item.price}
                          </span>

                        </div>


                        {/* ================= QUANTITY ================= */}

                        <div className="flex items-center justify-between md:block">

                          <span className="text-sm text-gray-500 md:hidden">
                            Quantity
                          </span>

                          <div className="flex w-fit items-center rounded-full border border-gray-300">

                            {/* Minus */}

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-9 w-9 items-center justify-center text-lg text-gray-600 transition hover:text-orange-500"
                            >
                              −
                            </button>


                            {/* Quantity */}

                            <span className="w-8 text-center text-sm font-medium">
                              {quantity}
                            </span>


                            {/* Plus */}

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-9 w-9 items-center justify-center text-lg text-gray-600 transition hover:text-orange-500"
                            >
                              +
                            </button>

                          </div>

                        </div>


                        {/* ================= ITEM TOTAL ================= */}

                        <div className="flex items-center justify-between md:justify-end">

                          <span className="text-sm text-gray-500 md:hidden">
                            Total
                          </span>

                          <span className="font-semibold text-gray-900">
                            ₹{itemTotal.toFixed(2)}
                          </span>

                        </div>

                      </div>

                    </div>

                  );
                })}

              </div>

            </div>


            {/* ================= CART SUMMARY ================= */}

            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6">

              <h2 className="text-xl font-semibold text-gray-900">
                Cart Summary
              </h2>


              {/* ================= PROMO CODE ================= */}

              <div className="mt-6">

                <label
                  htmlFor="promoCode"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Promo Code
                </label>


                {/* Promo Already Applied */}

                {appliedPromo ? (

                  <div className="rounded-lg border border-green-200 bg-green-50 p-3">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-sm font-semibold text-green-700">
                          {appliedPromo.code}
                        </p>

                        <p className="text-xs text-green-600">
                          Promo code applied
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="text-sm font-medium text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                ) : (

                  /* Promo Input */

                  <div>

                    <div className="flex gap-2">

                      <input
                        id="promoCode"
                        type="text"
                        value={promoInput}
                        onChange={(e) => {
                          setPromoInput(e.target.value);
                          setPromoMessage("");
                        }}
                        placeholder="Enter promo code"
                        className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />

                      <button
                        type="button"
                        onClick={handlePromoCode}
                        className="rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                      >
                        Apply
                      </button>

                    </div>


                    {/* Promo Message */}

                    {promoMessage && (

                      <p
                        className={`mt-2 text-sm ${
                          appliedPromo
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {promoMessage}
                      </p>

                    )}

                    <p className="mt-2 text-xs text-gray-400">
                      Try code: FOOD10
                    </p>

                  </div>

                )}

              </div>


              {/* ================= PRICE DETAILS ================= */}

              <div className="mt-6 space-y-4">


                {/* Subtotal */}

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-gray-900">
                    ₹{subtotal.toFixed(2)}
                  </span>

                </div>


                {/* Delivery Fee */}

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-medium text-gray-900">
                    ₹{deliveryFee.toFixed(2)}
                  </span>

                </div>


                {/* Discount */}

                {discount > 0 && (

                  <div className="flex justify-between text-sm">

                    <span className="text-green-600">
                      Discount
                    </span>

                    <span className="font-medium text-green-600">
                      -₹{discount.toFixed(2)}
                    </span>

                  </div>

                )}


                {/* Divider + Total */}

                <div className="border-t border-gray-200 pt-4">

                  <div className="flex justify-between">

                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-lg font-semibold text-gray-900">
                      ₹{total.toFixed(2)}
                    </span>

                  </div>

                </div>

              </div>


              {/* ================= CHECKOUT ================= */}

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
             onClick={() => navigate("/order")}
             
             >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </div>
    </section>
  );
};

export default Cart;