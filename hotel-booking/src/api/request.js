import axios from "axios";

const BASE_URL = "https://hotels-api-4ltr.onrender.com/api/";

const getHotels = () => axios.get(`${BASE_URL}/hotels`);

export { getHotels };
