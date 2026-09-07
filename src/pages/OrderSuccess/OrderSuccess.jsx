import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <span className="text-3xl text-green-600">
            ✓
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Thank you for your order. Your food is being prepared
          and will be delivered soon.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-8 w-full rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Continue Shopping
        </button>

      </div>
    </section>
  );
};

export default OrderSuccess;