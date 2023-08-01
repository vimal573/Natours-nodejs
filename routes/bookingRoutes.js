const express = require('express');
const bookingController = require('../controller/bookingControllers');
const authController = require('../controller/authController');

const router = express.Router();

router
  .route('/checkout-session/:tourId')
  .get(authController.protect, bookingController.getCheckoutSession);

module.exports = router;
