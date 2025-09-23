// server.ts
import app from "./modules/app";
import { sequelize } from "./db_config/db";

const PORT = process.env.PORT || 5000;

// Sync models and start server
sequelize
  .sync({ alter: true }) // updates tables without dropping
  .then(() => {
    console.log("All models synchronized successfully");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Database sync error:", err));
