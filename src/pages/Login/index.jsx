import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  InputLogin,
  ButtonLogin,
  Heading,
  ImgLogin,
  TextLogin,
} from "components";
import CartSectionfooter from "components/CartSectionfooter";
import CartNavbar from "components/CartNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const FormValue = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: FormValue,
    mode: "onSubmit",
  });
  let navigate = useNavigate();

  const onSubmit = (FormValue) => {
    // setError("password", { type: "required", message: "Ghi voo may" });
    setError("password", { type: "required", message: "Sai Mat Khau Roi" });
    localStorage.setItem("users", JSON.stringify(FormValue));
    navigate("/");
    console.log("Form  submiited", FormValue, errors);
  };
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <form action="POST" onSubmit={handleSubmit(onSubmit)}>
          <label for="email">email</label>
          <input
            {...register("email")}
            autoComplete="email"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label for="password">password</label>
          <input
            type="password"
            placeholder="input your password"
            id="password"
            name="password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button>
            <input type="submit" />
            Login
          </button>
        </form>
        <Link to="/signup">SignUp Page</Link>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
}
