const Holding = require('../model/HoldingModel');

// Create or update holding
exports.createOrUpdateHolding = async (req, res) => {
  const { stockSymbol, quantity, averagePrice } = req.body;

  try {
    let holding = await Holding.findOne({ user: req.user.id, stockSymbol });
    
    if (holding) {
      holding.quantity += quantity;
      holding.averagePrice = (holding.averagePrice + averagePrice) / 2; // Simple average
      holding = await holding.save();
    } else {
      holding = new Holding({
        user: req.user.id,
        stockSymbol,
        quantity,
        averagePrice,
      });
      await holding.save();
    }
    res.json(holding);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get user's holdings
exports.getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({ user: req.user.id });
    res.json(holdings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete holding
exports.deleteHolding = async (req, res) => {
  try {
    let holding = await Holding.findById(req.params.id);
    if (!holding) {
      return res.status(404).json({ msg: 'Holding not found' });
    }
    if (holding.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await holding.remove();
    res.json({ msg: 'Holding removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
