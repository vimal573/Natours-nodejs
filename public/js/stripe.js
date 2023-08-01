/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = stripe(
  'pk_test_51L3WIZSAgQ7KKNLTwKDPEPp3eZA5euuHWSm654yMKin1fQPsnvyJu9E68C61tpbGA9xue4wYQ4idRbJiBsobvM0h00xmtTYpgE'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
