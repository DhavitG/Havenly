// GET /api/user
export const getUserData = async (req, res) => {
  try {
    const { role, recentSearchedCities } = req.user;
    res.json({ success: true, role, recentSearchedCities });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Store recently searched cities
export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCity } = req.body;
    const user = await req.user;

    if (user.recentSearchedCities.length < 3) {
      user.recentSearchedCities.push(recentSearchedCity);
    } else {
      user.recentSearchedCities.shift(recentSearchedCity);
    }

    await user.save();
    res.json({ success: false, message: "City Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
