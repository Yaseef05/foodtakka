import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const {
    quantities,
    appliedPromo,
    clearCart,
  } = useContext(StoreContext);

  // Delivery form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Get cart items
  const cartItems = food_list.filter(
    (item) => quantities[item.id] > 0
  );

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * quantities[item.id],
    0
  );

  // Delivery fee
  const deliveryFee = subtotal > 0 ? 40 : 0;

  // Discount
  const discount = appliedPromo?.discount || 0;

  // Total
  const total = subtotal + deliveryFee - discount;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Place order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Prevent empty cart order
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Create complete order
    const orderData = {
      customer: formData,

      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantities[item.id],
        total: item.price * quantities[item.id],
      })),

      subtotal,
      deliveryFee,
      discount,
      total,

      paymentMethod,

      orderDate: new Date().toISOString(),
    };

    // For now, check the order in console
    console.log("ORDER CREATED:", orderData);

    // Clear cart
    clearCart();

    // Go to success page
    navigate("/order-success");
  };

  return (
    <section className="w-full px-5 py-10 md:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Place Order
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your delivery details and complete your order.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              {/* DELIVERY INFORMATION */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">

                <h2 className="text-xl font-semibold text-gray-900">
                  Delivery Information
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">

                  {/* First Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>

                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>

                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Street */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Street Address
                    </label>

                    <input
                      name="street"
                      type="text"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Enter street address"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      City
                    </label>

                    <input
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      State
                    </label>

                    <input
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* ZIP */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>

                    <input
                      name="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Enter ZIP code"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                </div>
              </div>

              {/* PAYMENT METHOD */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">

                <h2 className="text-xl font-semibold text-gray-900">
                  Payment Method
                </h2>

                <div className="mt-6 space-y-4">

                  {/* COD */}
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 hover:border-orange-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="h-4 w-4 accent-orange-500"
                    />

                    <div>
                      <p className="font-medium text-gray-900">
                        Cash on Delivery
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Pay when your food is delivered.
                      </p>
                    </div>
                  </label>

                  {/* Online Payment */}
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 hover:border-orange-400">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={paymentMethod === "online"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="h-4 w-4 accent-orange-500"
                    />

                    <div>
                      <p className="font-medium text-gray-900">
                        Online Payment
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Pay securely online.
                      </p>
                    </div>
                  </label>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE - ORDER SUMMARY */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6">

              <h2 className="text-xl font-semibold text-gray-900">
                Order Summary
              </h2>

              {/* ITEMS */}
              <div className="mt-6 space-y-4">

                {cartItems.map((item) => {
                  const quantity = quantities[item.id];

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4"
                    >

                      <div className="flex items-center gap-3">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-14 w-14 rounded-lg object-cover"
                        />

                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            Qty: {quantity}
                          </p>
                        </div>

                      </div>

                      <span className="text-sm font-medium text-gray-900">
                        ₹{(item.price * quantity).toFixed(2)}
                      </span>

                    </div>
                  );
                })}

              </div>

              {/* PRICE */}
              <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Delivery Fee
                  </span>

                  <span className="font-medium">
                    ₹{deliveryFee.toFixed(2)}
                  </span>
                </div>

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

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Total
                    </span>

                    <span className="text-lg font-semibold">
                      ₹{total.toFixed(2)}
                    </span>

                  </div>
                </div>

              </div>

              {/* PLACE ORDER */}
              <button
                type="submit"
                
                className="mt-6 w-full rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Place Order
              </button>

            </div>

          </div>
        </form>

      </div>
    </section>
  );
};

export default PlaceOrder;