import React, { FC } from "react";

type SubmitBtnProps = {
  text: string;
};

const SubmitBtn: FC<SubmitBtnProps> = (props) => {
  const { text } = props;
  return <button type="submit" className="w-full bg-primary rounded-[10px] p-[13px] text-white font-semibold">{text}</button>;
};

export default SubmitBtn;
