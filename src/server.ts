import { AppDataSource } from "./data-source";
import app from "./app"


AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.")

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Api iniciada na porta https://localhost:${PORT}`)
    })
   })
.catch((err) => console.error(err));