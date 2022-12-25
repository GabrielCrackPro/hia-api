const shopsRouter = require("express").Router();
const shopModel = require("../db/models/Shop");
const { checkFunctions } = require("../db/utils");

shopsRouter
  .get("/", async (_req, res) => {
    const shops = await shopModel.find({});
    res.status(200).json(shops);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const shop = await shopModel.findOne({ id });
    res.status(200).json(shop);
  })
  .post("/", async (req, res) => {
    const { id, name, description, address, type, schedule } = req.body;
    // const validData = checkFunctions.applyRegexp([
    // name,
    // description,
    // address,
    // type,
    // schedule,
    // ]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const shop = new shopModel({
      id,
      name,
      description,
      address,
      type,
      schedule,
    });
    if (await shopModel.findOne({ name, description, address, type })) {
      res.status(400).json({ status: res.status ,message: "Shop already exists" });
    } else {
      await shop.save((err) => {
        if (err) res.status(500).json(err);
        res.status(201).json({ status: res.status, message: "Shop created successfully", shop });
      });
    }
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    // const validData = checkFunctions.applyRegexp([name, description]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const shop = await shopModel.findOneAndUpdate(id, { name, description });
    // eslint-disable-next-line
    shop.updated_at = new Date();
    res.status(200).json({ message: "Shop updated successfully", shop });
  })
  .delete("/", async (_req, res) => {
    await shopModel.deleteMany({});
    res.status(200).json({ message: "All shops deleted successfully" });
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    await shopModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Shop deleted successfully" });
  });

module.exports = shopsRouter;
