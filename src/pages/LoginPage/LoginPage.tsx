import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import LayoutAuthentication from "../../layouts/LayoutAuthentication/LayoutAuthentication";

const LoginPage = () => {
  return (
    <LayoutAuthentication title="Sign Up">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="name" className="font-medium text-text2">Your name</label>
          <Input
            hidden={false}
            placeholder="example@gmail.com"
            type="name"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email" className="font-medium text-text2">Email</label>
          <Input
            hidden={false}
            placeholder="example@gmail.com"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="password" className="font-medium text-text2 ">Password</label>
          <Input
            hidden={false}
            placeholder="example@gmail.com"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Checkbox label="I agree to the Tearms of Use and have read and
understand the Privacy policy." name="remember" id="remember" />
        <SubmitBtn text="Create your account"/>
      </form>
    </LayoutAuthentication>
  );
};

export default LoginPage;
