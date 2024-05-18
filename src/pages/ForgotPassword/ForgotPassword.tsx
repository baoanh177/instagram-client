import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      mobileOrEmail: "",
    },
    validationSchema: Yup.object({
      mobileOrEmail: Yup.string().required(
        "Số di động hoặc email không được để trống"
      ),
    }),
    onSubmit: (values) => {
      console.log(":", values);
    },
  });
  return (
    <>
      <div className="w-full h-[60px] border border-s-[#DBDBDB]">
        <div className="w-[975px] h-full m-auto bg-[#fff] px-5 flex items-center">
          <Link to={"/login"}>
            <img
              className="w-[105px] h-[40px] "
              src="../../../public/assest/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="w-[388px] h-[552px] m-auto mt-[108px] border rounded-sm border-1 border-s-[#DBDBDB]">
        <img
          className=" w-24 h-24 bg-red-100 m-auto mt-6"
          src="../../../public/assest/images/img-lock.png"
          alt="img-lock"
        />
        <div className="w-[300px] m-auto mt-3 ">
          <p className="block text-center text-base font-semibold">
            Bạn gặp sự cố khi đăng nhập?
          </p>
          <p className="block m-auto mt-3 text-[#737373] text-center  indent-px text-sm">
            Nhập email, số điện thoại hoặc tên người dùng của bạn và chúng tôi
            sẽ gửi cho bạn một liên kết để truy cập lại vào tài khoản.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="w-[300px]  m-auto mt-3"
          >
            <input
              type="text"
              name="mobieEmail"
              placeholder="Email hoặc điện thoại tên người dùng"
              className=" w-full p-2.5 bg-[#FAFAFA] text-[14px] border border-solid border-[#ddd] rounded "
            />
            {formik.touched.mobileOrEmail && formik.errors.mobileOrEmail ? (
              <div className="text-[12px] text-red-500">
                {formik.errors.mobileOrEmail}
              </div>
            ) : null}
            <button
              type="submit"
              className="w-full p-2 bg-[#0095f6] border-none text-white rounded block mt-5"
            >
              Gửi liên kết đăng nhập
            </button>
            <Link
              to={""}
              className="block text-[12px] text-[#00376B] text-center mt-2"
            >
              Bạn không thể đặt lại mật khẩu?
            </Link>
          </form>
          <div className="w-full flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">Hoặc</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Link
            to={"/register"}
            className="block text-[14px] font-semibold text-center"
          >
            Tạo tài khoản mới
          </Link>
        </div>
        <Link
          to={"/login"}
          className=" block w-full h-[44px] bg-[#FAFAFA] text-center text-[14px] font-semibold leading-10 border border-s-[#DBDBDB] mt-[60px] "
        >
          Quay lại đăng nhập
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
