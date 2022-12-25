const locationsRouter = require("express").Router();
const locationModel = require("../db/models/Location");

locationsRouter
  .get("/", async (_req, res) => {
    const locations = await locationModel.find({});
    res.status(200).json(locations);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const location = await locationModel.findOne({ id });
    res.status(200).json(location);
  })
  .post("/", async (req, res) => {
    const { id, name, room } = req.body;
    // const validData = checkFunctions.applyRegexp([name, room]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const location = new locationModel({ id, name, room });
    if (await locationModel.findOne({ name, room })) {
      res.status(400).json({ status: res.status, message: "Location already exists" });
    } else {
      await location.save((err) => {
        if (err) res.status(500).json(err);
        res.status(201).json({ status: res.status, message: "Location created successfully", location });
      });
    }
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, room } = req.body;
    // const validData = checkFunctions.applyRegexp([name, room]);
    // if (!validData) {
    // res.status(400).json({ message: "Data must be alphanumeric" });
    // }
    const location = await locationModel.findOneAndUpdate(id, {
      name,
      room,
    });
    // eslint-disable-next-line
    location.updated_at = new Date();
    res.status(200).json({ message: "Location updated successfully", location });
  })
  .delete("/", async (_req, res) => {
    await locationModel.deleteMany({});
    res.status(200).json({ message: "All locations deleted successfully" });
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    await locationModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Location deleted successfully" });
  });

module.exports = locationsRouter;
