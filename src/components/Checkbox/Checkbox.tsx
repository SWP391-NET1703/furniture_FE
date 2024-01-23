import { FC } from "react";
import "./Checkbox.scss";

type CheckBox = {
  label: string;
  name: string;
  id: string;
};

const Checkbox: FC<CheckBox> = (props) => {
  return (
    <div className=" w-full flex gap-[20px] items-center justify-center customCheckBox">
      <input type="checkbox" {...props} className="hidden" />
      <div className="w-[30px] h-[20px] bg-primary flex items-center justify-center rounded-[4px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-[16px] h-[16px] fill-white"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
      <label
        htmlFor={props.id}
        className="text-text1 py-[10px] pr-[10px] align-middle"
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
