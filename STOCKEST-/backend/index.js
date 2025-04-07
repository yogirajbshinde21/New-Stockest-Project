require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const OpenAI = require('openai');


const { HoldingsModel } = require("./model/HoldingsModel");
const { StocksModel } = require("./model/StocksModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });
const options = {
  connectTimeoutMS: 30000,  // 30 seconds for initial connection timeout
  socketTimeoutMS: 30000,   // 30 seconds for socket inactivity timeout
};

const users = [];

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  
  users.push({ username, password });
  res.status(201).json({ message: 'User created successfully' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});



// Handle Buy Request
// Handle Buy Request
app.post("/buy", async (req, res) => {
  const { name, qty, price } = req.body;

  try {
    let holding = await HoldingsModel.findOne({ name });
    
    if (holding) {
      // Recalculate average cost if the stock exists
      const newQty = holding.qty + qty;
      holding.avg = (holding.avg * holding.qty + price * qty) / newQty;
      holding.qty = newQty;
      await holding.save(); // Save updated holding to the database
    } else {
      // Add new holding
      let newHolding = new HoldingsModel({
        name,
        qty,
        avg: price,
        price,
        net: "0%", // Calculate actual net and day values based on your logic
        day: "0%",
      });
      await newHolding.save(); // Save new holding
    }

    res.json({ message: "Holding updated", holdings: await HoldingsModel.find({}) });
  } catch (error) {
    console.error("Error processing buy:", error);
    res.status(500).json({ error: "Failed to buy stock." });
  }
});


// Handle Sell Request
// Handle Sell Request
app.post("/sell", async (req, res) => {
  const { name, qty } = req.body;

  try {
    let holding = await HoldingsModel.findOne({ name });

    if (!holding) {
      return res.status(404).json({ error: "Stock not found" });
    }

    if (holding.qty < qty) {
      return res.status(400).json({ error: "Insufficient quantity" });
    }

    holding.qty -= qty; // Decrease the quantity

    // Remove the holding if the quantity is 0
    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ name });
    } else {
      await holding.save(); // Save the updated holding
    }

    res.json({ message: "Holding updated", holdings: await HoldingsModel.find({}) });
  } catch (error) {
    console.error("Error processing sell:", error);
    res.status(500).json({ error: "Failed to sell stock." });
  }
});


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});




// Buy Order Endpoint

app.post("/newOrder", async (req, res) => {
  try {
    // Create a new order instance with the request body data
    const { name, qty, price, mode } = req.body; // Assuming mode is "buy"

    // Create a new order
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      type: "buy", // Adding type to distinguish buy/sell orders
    });

    // Save the order to the database
    await newOrder.save();

    // Update the stock quantity
    let stock = await StocksModel.findOne({ name });
    if (stock) {
      stock.quantity += qty; // Update holdings
      await stock.save();
    } else {
      // If stock does not exist, create it
      await StocksModel.create({ name, quantity: qty, price });
    }

    res.status(201).send("Buy order saved successfully!");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("An error occurred while saving the order.");
  }
});


// Sell Order Endpoint

app.post("/newSellOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    // Check if the stock exists in holdings
    let stock = await StocksModel.findOne({ name });

    if (!stock) {
      return res.status(404).json({ error: "Stock not found in holdings." });
    }

    // Check if the user has enough quantity to sell
    if (stock.quantity < qty) {
      return res.status(400).json({ 
        error: `Insufficient quantity. Available: ${stock.quantity}` 
      });
    }

    // Create a new sell order
    const newSellOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      type: "sell", // Indicating this is a sell order
    });

    await newSellOrder.save(); // Save the sell order

    // Update the stock quantity after the sale
    stock.quantity -= qty;

    // Calculate the profit/loss
    const averageCost = stock.price; // Assuming price in StocksModel is average cost
    const sellAmount = price * qty;
    const buyAmount = averageCost * qty;
    const profitLoss = sellAmount - buyAmount;

    // Log profit/loss information
    console.log(`Profit/Loss for ${name}: ₹${profitLoss.toFixed(2)}`);

    // Update stock details if necessary
    // Update the stock price if selling below the average cost
    if (qty > 0) {
  
      const totalValueAfterSell = (stock.price * stock.quantity) + sellAmount;
      stock.price = (totalValueAfterSell) / (stock.quantity + qty);
    }

    if (stock.quantity === 0) {
      await StocksModel.deleteOne({ name });
    } else {
      await stock.save(); 
    }
    res.status(201).send("Sell order saved and holdings updated successfully!");
  } catch (error) {
    console.error("Error saving sell order:", error);
    res.status(500).send("An error occurred while saving the sell order.");
  }
});


// openAI Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for Stockest, a stock trading platform focused on making trading accessible to rural areas. Only answer questions related to stock trading, investments, and the Stockest platform. Keep your responses focused on helping users understand trading concepts and using the Stockest platform safely."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    res.json({ 
      message: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ 
      error: 'Failed to get response from AI' 
    });
  }
});


// Fetch Orders Endpoint
app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("An error occurred while fetching orders.");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({}); // Fetch all orders from the database
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("An error occurred while fetching orders.");
  }
});
// Fetch Holdings Endpoint
app.get("/holdings", async (req, res) => {
  try {
    const holdings = await StocksModel.find({});
    res.status(200).json(holdings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).send("An error occurred while fetching holdings.");
  }
});

app.get("/buyHoldings", async (req, res) => {
  try {
    // Get all buy orders
    const buyOrders = await OrdersModel.find({ type: "buy" });
    
    // Get unique stock names from buy orders
    const stockNames = buyOrders.map(order => order.name);

    // Fetch holdings that match the buy order stock names
    const holdings = await HoldingsModel.find({ name: { $in: stockNames } });
    
    res.status(200).json(holdings);
  } catch (error) {
    console.error("Error fetching buy holdings:", error);
    res.status(500).send("An error occurred while fetching buy holdings.");
  }
});



  
app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});