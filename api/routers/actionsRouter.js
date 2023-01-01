const actionRouter = require("express").Router();
const actionModel = require("../db/models/Action.js");

actionRouter
  .get("/", async (_req, res) => {
    const actions = await actionModel.find({});
    res.status(200).json(actions);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const action = await actionModel.findOne({ id });
    res.status(200).json(action);
  })
  .post("/", async (req, res) => {
    const { id, action, user } = req.body;
    // const validData = checkFunctions.applyRegexp([
    // action,
    // user
    // ]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const actionObj = new actionModel({
      id,
      action,
      user
    });
    if (await actionModel.findOne({ id, action, user })) {
      res.status(400).json({ status: res.status, message: "Action already exists" });
    } else {
      await actionObj.save((err) => {
        if (err) res.status(500).json(err);
        res.status(201).json({ status: res.status, message: "Action created successfully", actionObj });
      });
    }
  })
  .delete("/", async (_req, res) => {
    await actionModel.deleteMany({});
    res.status(200).json({ message: "All actions deleted successfully" });
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    await actionModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Action deleted successfully" });
  });

module.exports = actionRouter;
