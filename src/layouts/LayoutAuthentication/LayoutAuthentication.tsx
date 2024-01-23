import React, { FC } from "react";

import logo from "../../assets/images/Logo.png";
import bgElm from "../../assets/images/bgElm.svg";

type LayoutAuth = {
  children: React.ReactNode;
  title: string;
};

const LayoutAuthentication: FC<LayoutAuth> = (props) => {
  const { children, title } = props;
  return (
    <div className="relative h-screen p-10 bg-lite">
      <div className="">
        <img srcSet={`${logo} 2x`} alt="" className="logo" />
      </div>
      <div className="absolute z-[10] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[556px] px-[50px] py-[60px] bg-white">
        <div className="mb-6 text-xl font-semibold text-center text-text1">
          {title}
        </div>
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[0]">
        <img src={bgElm} alt="" className="object-cover w-full " />
      </div>
    </div>
  );
};

export default LayoutAuthentication;
