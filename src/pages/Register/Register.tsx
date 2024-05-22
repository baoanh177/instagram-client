import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
const Register = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")

      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const handleSubmit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    console.log("Form values:", values);
    actions.setSubmitting(false);
  };

  return (
    <div className="max-w-screen-lg m-auto">
      <div className="w-[350px] h-auto md:w-[350px] py-8 m-auto rounded border border-solid border-[#ddd] flex flex-col items-center mt-5">
        <img
          className="w-[175px] h-[71px] mt-[37px]"
          src="../../../public/assest/images/logo.png"
          alt="logo"
        />
        <div className="w-[348] h-auto">
          <div className="w-[268px] ">
            <span className="text-base text-center leading-5 font-sans text-[#737373] block">
              Sign up to see photos and videos from your friends.
            </span>
            <button className="w-[268px] h-8 bg-[#0095f6] border-none text-sm font-extrabold text-white rounded mt-4 flex items-center justify-center gap-2">
              <img
                src="../../../public/assest/icons/icon-fb.png"
                className="w-[13px]"
                alt=""
              />
              Login with facebook
            </button>
            <div className="w-full flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="w-full md:w-[268px] flex flex-col space-y-2 mt-7">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-[12px] text-red-500 relative top-[-5px]"
                />

                <Field
                  type="text"
                  placeholder="User Name"
                  name="username"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-[12px] text-red-500 relative top-[-5px]"
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-[12px] text-red-500 relative top-[-5px]"
                />

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-[12px] text-red-500 relative top-[-5px]"
                />

                <div className="w-[268px]  flex flex-col text-[#737373]">
                  <p className="text-xs text-center font-serif font-system-ui">
                    People who use our service may have uploaded your contact
                    information to Instagram.
                    <a href="#" className="text-[#385898] no-underline">
                      Learn More
                    </a>
                  </p>
                  <p className="text-xs text-center font-serif mt-3 text-[#737373]">
                    By signing up, you agree to our
                    <a href="#" className="text-[#385898] no-underline mx-1">
                      Terms, Privacy Policy
                    </a>
                    and
                    <a href="#" className="text-[#385898] no-underline mx-1">
                      Cookies Policy
                    </a>
                  </p>
                </div>

                <button
                  type="submit"
                  className="p-2 bg-[#0095f6] border-none text-white rounded block mt-5"
                >
                  Sign Up
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border border-solid border-[#ddd] py-5  rounded text-center w-[350px] m-auto mt-4">
        Have an account?
        <Link
          className="px-1 text-[#0095f6] text-lg no-underline"
          to={"/login"}
        >
          Login
        </Link>
      </div>
      <div className="w-[350px] m-auto  flex flex-col items-center justify-center space-y-2 mt-4">
        <div className="text-sm pb-5">Get the app.</div>
        <div className="flex space-x-2">
          <div className="w-32 h-10 bg-gray-300 flex items-center justify-center">
            <img
              src="../../../public/assest/images/img-appstore.png"
              alt="Google Play"
              className="h-full"
            />
          </div>
          <div className="w-32  bg-gray-300 flex items-center justify-center">
            <img
              src="../../../public/assest/images/img-ggplay.png"
              alt="Microsoft Store"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
