import User from "../models/User";

// middleware to check if user is authenticated

export const protect = async (req, res, next) => {
  const { userId } = req.auth;

  if (!userId) {
    res.json({ Success: false, message: "Not aunthenticated" });
  }

  const user = await User.findById(userId);
  req.user = user;
  next();
};
