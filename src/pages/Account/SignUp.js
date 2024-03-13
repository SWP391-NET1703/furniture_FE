
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
// import { useForm } from "react-hook-form";



export const signUp = async (registerData) => {
  try {
    const res = await axios.post(
      `https://home-vintage-backend.onrender.com/users/register`,
      registerData
    );
    return res.data;
  } catch (error) {
    throw new Error("Error signing up:", error);
  }
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-.5">
      <p className="font-titleFont text-base font-semibold text-gray-600">
        {label}
      </p>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  // })
  // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formRegister) })
  // const navigate = useNavigate()

  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");

  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setErrorMsg("Confirm password does not match password");
      return;
    }

    try {
      const response = await signUp(formData);

      if (response.success) {
        setSuccessMsg(response.message);
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          password: "",
          confirm_password: "",
        });
        navigate("/signin");
      } else {
        setErrorMsg(response.message);
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-full max-w-[500px] mx-auto">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont text-center">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 

            tracking-wide hover:bg-black hover:text-white duration-300">


                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form
            className="w-full max-w-[500px] mx-auto h-auto flex flex-col justify-center"
            onSubmit={handleSignUp}>
            <div className="px-6 py-4 w-full flex flex-col justify-start overflow-y-auto scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 text-center">
                Create your account
              </h1>
              {errorMsg && (
                <p className="text-red-500 font-titleFont font-semibold mb-4 text-center">
                  {errorMsg}
                </p>
              )}
              <div className="flex flex-col gap-3">
                <InputField
                  label="Full Name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="eg. John Doe"
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@workemail.com"
                  type="email"
                />
                <InputField
                  label="Phone Number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="008801234567891"
                />
                <InputField
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  type="password"
                />
                <InputField
                  label="Confirm Password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  type="password"
                />
                <button

                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}> 

                  Create Account
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Sign in
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
