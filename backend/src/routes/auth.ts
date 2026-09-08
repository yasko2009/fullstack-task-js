import { Router } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data/users";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Неверный email или пароль",
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return res.json({
    token,
  });
});

export default router;