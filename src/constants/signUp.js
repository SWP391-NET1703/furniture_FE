import axios from "axios";
export const signUp = async (registerData) => {
  const res = await axios.post(
    `https://home-vintage-backend.onrender.com/users/register`,
    registerData
  );
  return res.data;
};
