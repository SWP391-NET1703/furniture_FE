import { FC } from "react";

type InputProps = {
  hidden: boolean;
  placeholder: string;
  type: string;
  name: string;
  id: string;
};

const Input: FC<InputProps> = (props) => {
  return (
    <>
      <input
        {...props}
        className="w-full h-[52px] rounded-[10px] border-1 border-strock border-solid border px-[25px] py-[15px] text-text1"
      />
    </>
  );
};

export default Input;
