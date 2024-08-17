const helpCenterModel = require("../models/helpCenterModel");

// POST a help center a card with async await function
const postHelpCard = async (req, res) => {
  try {
    // taking the data from request body
    const helpCard = helpCenterModel(req.body);
    // save the data
    await helpCard.save();
    // showing success message
    res.status(200).json({ message: "Post a card details..." });
  } catch (error) {
    // showing failure message
    res.status(500).json({ message: "Unable to posts!" });
  }
};

// GET a help center a card with async await function
const getAllCards = async (req, res) => {
  try {
    // finding all the help center cards
    const helpCards = await helpCenterModel.find();
    // showing success message
    res.status(200).json(helpCards);
  } catch (error) {
    // showing failure message
    res.status(500).json({ message: "Unable to fetch all the cards" });
  }
};

// GET a help center card by ID with async await functions
const getCardById = async (req, res) => {
  try {
    // extract the ID from the request parameters
    const { cardID } = req.params;
    // find the help card by ID
    const helpCard = await helpCenterModel.findById(cardID);

    // if didn't help center card by ID
    if (!helpCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    // showing success message
    res.status(200).json(helpCard);
  } catch (error) {
    // showing failure message
    res.status(500).json({ message: "Unable to fetch a card by id" });
  }
};

module.exports = { postHelpCard, getAllCards, getCardById };
