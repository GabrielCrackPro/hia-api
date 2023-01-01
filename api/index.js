const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const swaggerDoc = require("swagger-ui-express");

const { connect } = require("./db/config");
const { docs } = require("./swagger.js");

const itemsRouter = require("./routers/ItemsRouter");
const shopsRouter = require("./routers/shopsRouter");
const locationsRouter = require("./routers/locationsRouter");
const usersRouter = require("./routers/usersRouter");
const actionsRouter = require("./routers/actionsRouter.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/v1/docs", swaggerDoc.serve);
app.use("/api/v1/docs", swaggerDoc.setup(docs));

app.use("/api/v1/items", itemsRouter);
app.use("/api/v1/shops", shopsRouter);
app.use("/api/v1/locations", locationsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/actions", actionsRouter);

app.get("/", (_req, res) => {
  res.json({
    message: "This is the homepage of the home inventory app",
  });
});

app.listen(port, async () => {
  console.log(`🚀 Listening on port ${port}...`);
  console.log(`📕 API documentation available at http://localhost:${port}/api/v1/docs `);
  await connect();
});
