import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again
import axios from "axios";
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const resp = await axios(url);
      const data = resp.data;
      console.log(data);
    } catch (error) {
      console.log(error.resp);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
