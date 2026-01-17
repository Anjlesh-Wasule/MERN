// Abstraction - expose what an object does but hide how it does it.

// we are simulating an interface here using the payment class
class Payment {
  pay() {
    throw new Error("Payment method should be implemented, in the derived class");
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    console.log(`Paid amount: ${amount} using credit card`);
  }
}

class UPIPayment extends Payment {
  pay(amount, paymentApp) {
    console.log(`Paid amount: ${amount} using ${paymentApp}`);
  }
}

const creditPayment = new CreditCardPayment();
creditPayment.pay(200);

const upiPayment = new UPIPayment();
upiPayment.pay(500, "gpay");
upiPayment.pay(500, "paytm");

// const payment = new Payment(); // Error: Payment method should be implemented
// payment.pay(100); // Error: Payment method should be implemented
