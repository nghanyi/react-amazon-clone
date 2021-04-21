const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_aMUxUESgX1gRMOunnz0oV9W1");

// TODO API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  // console.log("Payment request received! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "sgd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);
