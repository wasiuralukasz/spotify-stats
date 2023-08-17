import { useContext, useEffect, useState } from "react";
import axios from "axios";
import LoginContext from "../contexts/LoginContext";

const useUserData = (url) => {

    const {token, setToken} = useContext(LoginContext);
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
          const { data } = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setData(data);
          console.log(data);
        };
    
        fetchUserData();
      }, []);

      return data;
}

export default useUserData;