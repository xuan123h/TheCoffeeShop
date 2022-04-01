import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        className="w-[600px] h-[500px] bg-[white] mx-auto mt-[200px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[70px] outline-none border border-purple-400 ml-24"
          {...register("username")}
        />{" "}
        <p className="absolute left-[760px] text-orange-500 font-bold">
          {errors.username?.message}
        </p>
        <br />
        <input
          type="text"
          placeholder="Email"
          className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[25px] outline-none border border-purple-400 ml-24"
          {...register("email")}
        />{" "}
        <p className="absolute left-[760px] text-orange-500 font-bold">
          {errors.email?.message}
        </p>
        <br />
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Nhập mật khẩu"
            className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[25px] outline-none border border-purple-400 ml-24"
            {...register("password")}
          />
          <span className="absolute right-[780px] mt-[30px]">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              ></path>
            </svg>
          </span>
          <p className="absolute left-[760px] text-orange-500 font-bold top-[452px]">
            {errors.password?.message}
          </p>
        </div>
        <br />
        <div className="top-[390px] left-[120px]">
          <button
            className="w-[300px] h-[50px] bg-[#1890FF] p-2 text-[#FFFFFF] text-[20px] mt-10 ml-[150px]"
            type="submit"
          >
            {" "}
            Đăng ký{" "}
          </button>
        </div>
        <p className="text-center mt-3">
          {" "}
          Nếu bạn đã có tài khoản,{" "}
          <b className="text-purple-500">
            {" "}
            <Link to="/login">Đăng nhập</Link>{" "}
          </b>{" "}
          tại đây{" "}
        </p>
      </form>
    </>
  );
};

export default Register;
