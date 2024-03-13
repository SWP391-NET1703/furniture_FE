import axios from "axios";

export const getListProduct = async () => {
  const res = await axios.get(
    "https://home-vintage-backend.onrender.com/interiors/best-seller"
  );
  return res.data;
};
