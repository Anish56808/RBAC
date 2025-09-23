import { User } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export class AuthService {
  // Register a new user
  static async register(data: { email: string; password: string; name?: string }) {
    const existingUser = await User.findOne({ where: { email: data.email } });
    if (existingUser) throw new Error("Email already registered");

    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    const user = await User.create( { ...data, password: hashedPassword } as any );
    return user;
  }

  // Login user and return JWT
  static async login(data: { email: string; password: string }) {
    const user = await User.findOne({ where: { email: data.email }, include: ["role", "customPermissions"] });
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const payload = { id: user.id, email: user.email, roleId: user.roleId };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return { user, token };
  }
}
