import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      const data = res.data;
      console.log("👤 API /api/user response:", data);

      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities);
      } else {
        // Retry fetching user details after 5 mins
        setTimeout(() => {
          fetchUser();
        }, 5000);
      }
    } catch (error) {
      console.error("❌ fetchUser error:", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const value = {
    currency,
    navigate,
    user,
    getToken,
    isOwner,
    setIsOwner,
    axios,
    showHotelReg,
    setShowHotelReg,
    searchedCities,
    setSearchedCities,
    fetchUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
