import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      mobileOrEmail: "",
      fullName: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      mobileOrEmail: Yup.string().required(
        "Số di động hoặc email không được để trống"
      ),
      fullName: Yup.string().required("Tên đầy đủ không được để trống"),
      username: Yup.string().required("Tên người dùng không được để trống"),
      password: Yup.string().required("Mật khẩu không được để trống"),
    }),
    onSubmit: (values) => {
      console.log("Form đã được submit:", values);
    },
  });
  return (
    <div className="max-w-screen-lg m-auto">
      <div>
        {/*  */}
        <div className="w-[350px] h-[676px] md:w-[350px] py-8 m-auto rounded border-1 border-solid border-[#ddd] flex flex-col items-center">
          <img
            className="w-[175px] h-[71px] mt-[37px] "
            src="../../../public/assest/images/logo.png"
            alt="logo"
          />
          <div className="w-[348] h-[493px]">
            <div className="w-[268px] h-[40px]">
              <span className="text-base text-center leading-5 font-sans font-serif text-[#737373] block">
                Đăng ký để xem ảnh và video từ bạn bè.
              </span>
              <button className="w-full py-2 bg-[#0095f6] border-none text-sm font-extrabold text-white rounded mt-4">
                <img
                  src="../../../public/assest/icons/icon-fb.png"
                  className="w-[13px] mr-1"
                  alt=""
                />
                Đăng nhập bằng Facebook
              </button>
              <div className="text-with-line relative mt-5">
                <hr className="centered-line border border-solid border-[#DBDBDB]" />

                <span className="absolute top-[-65%] left-[35%] block px-4 text-sm font-medium text-[#737373] bg-[#fff]">
                  HOẶC
                </span>
              </div>

              <form
                method="post"
                onSubmit={formik.handleSubmit}
                className="w-full h-[300px] md:w-[268px] flex flex-col space-y-2 mt-7 "
              >
                <input
                  type="text"
                  name="mobileOrEmail"
                  placeholder="Số di động hoặc email"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />

                {formik.touched.mobileOrEmail && formik.errors.mobileOrEmail ? (
                  <div className="text-[12px] text-red-500">
                    {formik.errors.mobileOrEmail}
                  </div>
                ) : null}

                <input
                  type="text"
                  name="fullName"
                  placeholder="Tên đầy đủ"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />

                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-[12px] text-red-500">
                    {formik.errors.fullName}
                  </div>
                ) : null}

                <input
                  type="text"
                  placeholder="Tên người dùng"
                  name="username"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded"
                />

                {formik.touched.username && formik.errors.username ? (
                  <div className="text-[12px] text-red-500">
                    {formik.errors.username}
                  </div>
                ) : null}

                <input
                  type="text"
                  name="password"
                  placeholder="Mật khẩu"
                  className="p-2.5 bg-[#FAFAFA] text-[12px] border border-solid border-[#ddd] rounded "
                />

                {formik.touched.password && formik.errors.password ? (
                  <div className="text-[12px] text-red-500">
                    {formik.errors.password}
                  </div>
                ) : null}

                <div className="w-[268px]  flex flex-col text-[#737373]">
                  <p className="text-xs text-center font-serif font-system-ui ">
                    Những người dùng dịch vụ của chúng tôi có thể đã tải thông
                    tin liên hệ của bạn lên Instagram.
                    <a href="#" className="text-[#385898] no-underline">
                      Tìm hiểu thêm
                    </a>
                  </p>
                  <p className="text-xs text-center font-serif mt-3 text-[#737373] ">
                    Bằng cách đăng ký, bạn đồng ý với
                    <a href="#" className="text-[#385898] no-underline ml-1">
                      Điều khoản, Chính sách quyền riêng tư
                    </a>
                    và
                    <a href="#" className="text-[#385898] no-underline ml-1">
                      Chính sách cookie
                    </a>
                    của chúng tôi.
                  </p>
                </div>

                <button
                  type="submit"
                  className="p-2 bg-[#0095f6] border-none text-white rounded block mt-5"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="border-1 border-solid border-[#ddd] py-5  rounded text-center w-[350px] m-auto mt-4">
          Bạn đã có tài khoản?
          <Link
            className="px-1 text-[#0095f6] text-lg no-underline"
            to={"/login"}
          >
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className="w-[350px] m-auto  flex flex-col items-center justify-center space-y-2 mt-4">
        <div className="text-sm pb-5">Tải ứng dụng</div>
        <div className="flex space-x-2">
          <div className="w-32 h-10 bg-gray-300 flex items-center justify-center">
            <img
              src="../../../public/assest/images/img-appstore.png"
              alt="Google Play"
              className="h-full"
            />
          </div>
          <div className="w-32 h-10 bg-gray-300 flex items-center justify-center">
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
