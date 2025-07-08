import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader || !authheader.startsWith("Bearer ")) {
  return res.status(401).json({ message: "auth failed" });
}
  const token = authheader.split(" ")[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user ={userId: payload.userId}
    next();
  } catch (error) {
    next("auth failed");
  }
};
export default userAuth;