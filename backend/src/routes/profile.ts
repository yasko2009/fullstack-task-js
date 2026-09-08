import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middleware/authMiddleware";
import { users } from "../data/users";

const router = Router();

router.get("/", authMiddleware, (req: AuthRequest, res) => {
  const user = users.find((user) => user.id === req.user?.userId);

  if (!user) {
    return res.status(404).json({
      message: "Пользователь не найден",
    });
  }

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

export default router;