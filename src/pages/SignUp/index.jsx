import React from "react";
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

export default function SignUp() {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
}
