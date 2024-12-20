import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../../export";
import { toast } from "react-toastify";

const CartCheckout = ({
  cart,
  totalPrice,
  user_metadata: { email, name },
  userId,
}) => {
  const sendCartToDatabase = async (values) => {
    try {
      const { data, error } = await supabase.from("orders").insert([
        {
          customer_id: userId,
          products: cart,
          government: values.government,
          total_price: totalPrice,
          created_at: new Date(),
          name: values.name,
          address: values.address,
          city: values.city,
          zip: values.zip,
          country: values.country,
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }
       toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error inserting data into database:", error.message);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: name || "",
      government: "",
      city: "",
      zip: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      government: Yup.string().required("Government is required"),
      city: Yup.string().required("City is required"),
      zip: Yup.string()
        .matches(/^\d{5}$/, "ZIP code must be 5 digits")
        .required("ZIP code is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      if (!email) {
        return toast.error("Please sign in to place an order");
      }
      sendCartToDatabase(values);
    },
  });

  return (
    <section className="mt-5 mb-10">
      <div className="mx-auto container">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkout</h2>
        <form onSubmit={formik.handleSubmit} className="lg:w-4/6">
          {["name", "government", "city", "zip", "country"].map((field) => (
            <div className="mb-3" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                placeholder={`Enter your ${field}`}
              />
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-red-500 text-sm">{formik.errors[field]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-accent text-white rounded-md shadow-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CartCheckout;
