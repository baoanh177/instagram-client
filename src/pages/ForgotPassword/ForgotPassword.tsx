import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import * as Yup from "yup";
import { images } from "../../assets/images";
const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const handleSubmit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    console.log("Form values:", values);
    actions.setSubmitting(false);
  };
  //     initialValues: {
  //       email: "",
  //     },
  //     validationSchema: Yup.object({
  //       email: Yup.string()
  //         .email("Invalid email address")
  //         .required("Email is required"),
  //     }),
  //     onSubmit: (values) => {
  //       console.log(":", values);
  //     },
  //   });
  //  const handleSubmit = (
  //    values: typeof initialValues,
  //    actions: FormikHelpers<typeof initialValues>
  //  ) => {
  //    console.log("Form values:", values);
  //    actions.setSubmitting(false);

  return (
    <>
      <div className="w-full h-[60px] border border-s-[#DBDBDB]">
        <div className="w-[975px] h-full m-auto bg-[#fff] px-5 flex items-center">
          <Link to={"/login"}>
            <img className="w-[105px] h-[40px] " src={images.logo} alt="logo" />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="w-[388px] h-[552px] m-auto mt-[108px] border rounded-sm border-1 border-s-[#DBDBDB]">
        <img
          className=" w-24 h-24 bg-red-100 m-auto mt-6"
          src={images.imgLock}
          alt="img-lock"
        />
        <div className="w-[300px] m-auto mt-3 ">
          <p className="block text-center text-base font-semibold">
            Trouble logging in?
          </p>
          <p className="block m-auto mt-3 text-[#737373] text-center  indent-px text-sm">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form action="" className="w-[300px]  m-auto mt-3">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className=" w-full p-2.5 bg-[#FAFAFA] text-[14px] border border-solid border-[#ddd] rounded "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-[12px] text-red-500 relative "
              />

              <button
                type="submit"
                className="w-full p-2 bg-[#0095f6] border-none text-white rounded block mt-5"
              >
                Send login link
              </button>
              <Link
                to={""}
                className="block text-[12px] text-[#00376B] text-center mt-2"
              >
                Can't reset your password?
              </Link>
            </Form>
          </Formik>

          <div className="w-full flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Link
            to={"/register"}
            className="block text-[14px] font-semibold text-center"
          >
            Create new accout
          </Link>
        </div>
        <Link
          to={"/login"}
          className=" block w-full h-[44px] bg-[#FAFAFA] text-center text-[14px] font-semibold leading-10 border border-s-[#DBDBDB] mt-[60px] "
        >
          Back to login
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
