import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file.
dotenv.config({ path: ".env" });

import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
  );

app.get("/", homeController.index);
app.post("/employee/search", homeController.search);
app.post("/employee/new", homeController.newEmployee);
app.post("/employee/update", homeController.updateEmployee);
app.post("/employee/delete", homeController.deleteEmployee);

// Handle 404 page
app.use(function(req, res, next) {
    res.status(404).render('error');
});

export default app;