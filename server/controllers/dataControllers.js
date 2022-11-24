import Model from "../model/model.js";

export const getData = async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  const data = {
    phone: req.body.phone,
    issue: req.body.issue,
    recording: req.body.recording,
  };
  const dataSaved = new Model(data);
  res.status(200).json(dataSaved);
  try {
    await dataSaved.save();
  } catch (error) {
    console.log(error);
  }
};
