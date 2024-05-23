import { useEffect, useState } from "react";
import { images } from "../../assets/images";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/stores";
import { login } from "../../stores/thunks/auth.thunk";
import { Link } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [imagePhone, setImagePhone] = useState(images.homePhoneImage01);
  const [fadeIn, setFadeIn] = useState(true);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setImagePhone((prevImage) =>
          prevImage === images.homePhoneImage01
            ? images.homePhoneImage02
            : images.homePhoneImage01
        );
        setFadeIn(true);
      }, 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter email"),
    password: Yup.string()
      .min(6, "Passwords must be at least 6 characters")
      .required("Please enter password"),
  });

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    console.log(values);
    dispatch(login({
      body: values,
    }))
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex max-w-screen-md mx-auto pt-14 gap-8">
        <div className="lg:w-full lg:flex lg:justify-center hidden">
          <div className="absolute">
            <img src={images.homePhone} alt="Home Phone" />
          </div>
          <div
            className={`relative top-6 left-[49px] ${fadeIn
              ? "opacity-100 transition-opacity duration-500"
              : "opacity-0"
              }`}
          >
            <img src={imagePhone} alt="Home Phone Image" />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-8 lg:w-full mx-auto w-[360px]">
          <div className="w-full flex flex-col items-center space-y-4 border p-6 rounded">
            <div>
              <img
                src={images.logo}
                alt="Instagram Logo"
                className="py-5 w-[125px]"
              />
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="w-full flex flex-col space-y-2">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Username or email"
                    className="p-3 border border-gray-300 rounded text-[14px] "
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 pl-2 text-xs"
                  />

                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="p-3 border border-gray-300 rounded text-[14px]"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 pl-2 text-xs"
                  />

                  <button
                    type="submit"
                    className="p-2 bg-blue-400 text-white rounded hover:bg-blue-300"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <div className="w-full flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex items-center space-x-2">
              <img className="w-5" src={images.logoGoogle} alt="" />
              <a href="#" className="text-blue-600">
                Sign in with google
              </a>
            </div>
            <Link to='/password/reset' className="text-sm">
              Forgot password?
            </Link>
          </div>
          <div className="border border-gray-300 text-[16px] p-4 rounded text-center w-full">
            Create new account?{" "}
            <Link to="/register" className="px-1 text-blue-500 text-[16px]">
             Sign Up
            </Link>
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            <div className="text-sm pb-5">Get the app.</div>
            <div className="flex space-x-2">
              <div className="w-32 h-10 bg-gray-300 flex items-center justify-center">
                <img
                  src={images.googlePlayBanned}
                  alt="Google Play"
                  className="h-full"
                />
              </div>
              <div className="w-32 h-10 bg-gray-300 flex items-center justify-center">
                <img
                  src={images.appStoreBanned}
                  alt="Microsoft Store"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
