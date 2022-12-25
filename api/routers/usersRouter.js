const usersRouter = require("express").Router();
const userModel = require("../db/models/User");
const { hashPassword, comparePassword } = require("../db/utils");
usersRouter
  .get("/", async (_req, res) => {
    const users = await userModel.find({});
    res.status(200).json(users);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findOne({ id });
    res.status(200).json(user);
  })
  .post("/", async (req, res) => {
    const { username, displayname, password, profilePicture } = req.body;
    // const validData = checkFunctions.applyRegexp([
    // username,
    // displayname,
    // password,
    // ]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const user = new userModel({
      username,
      displayname,
      password: hashPassword(password, 10),
      profilePicture
    });
    if (await userModel.findOne({ username })) {
      res.status(400).json({ message: "User already exists" });
    } else {
      await user.save((err) => {
        if (err) res.status(500).json(err);
      });
      res.status(201).json({ message: "User created successfully", user });
    }
  })
  .post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (comparePassword(password, hashPassword(password, 10))) {
      const user = await userModel.findOne({ username });
      if (user && !user.logged) {
        user.logged = true;
        await userModel.findOneAndUpdate({ username }, user);
        res.status(200).json({ message: "User logged in successfully", user });
      } else if (user && user.logged) {
        res.status(400).json({ message: "User already logged in" });
      } else {
        res.status(404).json({ message: "User does not exists" });
      }
    } else {
      res.status(401).json({ message: "Incorrect username or password" });
    }
  })
  .post("/logout/:id", async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    const user = await userModel.findOne({ username });
    if (user && user.logged) {
      user.logged = false;
      await userModel.findOneAndUpdate({ username }, user);
      res.status(200).json({ message: "User logged out successfully" });
    } else if (user && !user.logged) {
      res.status(400).json({ message: "User is not logged in" });
    } else {
      res.status(404).json({ message: "User does not exists" });
    }
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const { username, displayname, items, shops, locations } = req.body;
    // const validData = checkFunctions.applyRegexp([username, displayname]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const user = await userModel.findOneAndUpdate(id, {
      username,
      displayname,
      items,
      shops,
      locations
    });
    // eslint-disable-next-line
    user.updated_at = new Date();
    res.status(200).json({ message: "User updated successfully", user });
  })
  .delete("/", async (_req, res) => {
    await userModel.deleteMany({});
    res.status(200).json({ message: "All users deleted successfully" });
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    await userModel.findByIdAndDelete({ id });
    res.status(200).json({ message: "User deleted successfully" });
  });

module.exports = usersRouter;
