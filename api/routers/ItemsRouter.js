const itemsRouter = require("express").Router();
const itemModel = require("../db/models/Item");

itemsRouter
  .get("/", async (_req, res) => {
    const items = await itemModel.find({});
    res.status(200).json(items);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const item = await itemModel.findOne({ id });
    res.status(200).json(item);
  })
  .post("/", async (req, res) => {
    const { id, name, description, type, code } = req.body;
    // const validData = checkFunctions.applyRegexp([name, description]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const item = new itemModel({ id, name, description, type, code });
    if (await itemModel.findOne({ name, description, type, code })) {
      res.status(400).json({ staus: res.status, message: "Item already exists" });
    } else {
      await item.save((err) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(201).json({ status: res.status, message: "Item created successfully", item });
      });
    }
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, type } = req.body;
    // const validData = checkFunctions.applyRegexp([name, description]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const item = await itemModel.findOneAndUpdate(id, { name, description, type });
    // eslint-disable-next-line
    item.updated_at = new Date();
    res.status(200).json({ message: "Item updated successfully", item });
  })
  .delete("/", async (_req, res) => {
    await itemModel.deleteMany({});
    res.status(200).json({ message: "All items deleted successfully" });
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    await itemModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted successfully" });
  });

module.exports = itemsRouter;
