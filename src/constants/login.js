import axios from "axios";
export const login = async (loginData) => {
  const res = await axios.post(
    `https://home-vintage-backend.onrender.com/users/login`,
    loginData
  );
  return res.data;
};
