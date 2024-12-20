import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  handleSignUp,
  handleSignIn, 
} from "./authHandlers.jsx"; // Adjust the import path as needed
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Mapping for user-friendly labels
  const authLabels = {
    signUp: "Sign Up",
    signIn: "Sign In",

  };
  const [auth, setAuth] = useState(authLabels.signUp);
  
  // Dynamic validation schema
  const getValidationSchema = () => {
    const baseSchema = {
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .required("Required"),
    };

    if (auth === authLabels.signUp) {
      baseSchema.confirmPassword = Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required");
    }

    return Yup.object(baseSchema);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: getValidationSchema(),
    onSubmit: async (values) => {
      try {
        switch (auth) {
          case authLabels.signUp:
            await handleSignUp(values, dispatch);
            break;
            case authLabels.signIn:
              await handleSignIn(values, dispatch);
              break;
              
              default:
                console.error("Invalid auth action");
              }
              navigate("/");
      
      } catch (error) {
        console.error("Authentication Error:", error);
      }
    },
  });

  // Helper component to render error messages
  const ErrorMessage = ({ name }) =>
    formik.touched[name] && formik.errors[name] ? (
      <div className="text-red-500 my-2">{formik.errors[name]}</div>
    ) : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[700px] h-screen w-[90%] mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center mb-6">{auth}</h2>
        <form onSubmit={formik.handleSubmit}>
          {auth === authLabels.signUp && (
            <div className="mb-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMessage name="name" />
            </div>
          )}

            
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage name="email" />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage name="password" />
          </div>
          {auth === authLabels.signUp && (
            <div className="mb-5">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMessage name="confirmPassword" />
            </div>
          )}

          <button
            type="submit"
            className="btn bg-accent/80  hover:bg-accent text-white font-bold text-lg  w-full mb-6 mt-3"
          >
            {auth}
          </button>
        </form>

        {/* =============== */}

        {auth === authLabels.signUp && (
          <>
            <div className="flex justify-center">
              <p>Already have an account?</p>
              <button
                onClick={() => setAuth(authLabels.signIn)}
                className="ml-2 text-accent font-bold underline "
              >
                Sign In
              </button>
            </div>
          </>
        )}

        {auth === authLabels.signIn && (
          <>
            <div className="flex justify-center">
              <p>Don't have an account?</p>
              <button
                onClick={() => setAuth(authLabels.signUp)}
                className="ml-2 text-accent font-bold underline "
              >
                Sign Up
              </button>
            </div>
            <hr  className="my-4"/>
            <div className="flex justify-center">
              <p>Forgot Password?</p>
              <button
                // onClick={() => setAuth(authLabels.forgetPassword)}
                className="ml-2 text-accent font-bold underline "
              >
                Forget Password
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
