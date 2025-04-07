const Position = require('../model/PositionModel');

// Create a new position
exports.createPosition = async (req, res) => {
  const { stockSymbol, quantity, averagePrice } = req.body;

  try {
    const position = new Position({
      user: req.user.id,
      stockSymbol,
      quantity,
      averagePrice,
    });
    await position.save();
    res.json(position);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get user's positions
exports.getPositions = async (req, res) => {
  try {
    const positions = await Position.find({ user: req.user.id });
    res.json(positions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update position
exports.updatePosition = async (req, res) => {
  const { stockSymbol, quantity, averagePrice } = req.body;
  
  try {
    let position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ msg: 'Position not found' });
    }
    if (position.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    position = await Position.findByIdAndUpdate(
      req.params.id,
      { stockSymbol, quantity, averagePrice },
      { new: true }
    );
    res.json(position);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete position
exports.deletePosition = async (req, res) => {
  try {
    let position = await Position.findById(req.params.id);
    if (!position) {
      return res.status(404).json({ msg: 'Position not found' });
    }
    if (position.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await position.remove();
    res.json({ msg: 'Position removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
