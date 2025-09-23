import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authValidation } from "./auth.validationChain";

const router = Router();

router.post("/register", authValidation, AuthController.register);
router.post("/login", authValidation, AuthController.login);

export default router;
