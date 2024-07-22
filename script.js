document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var amount = document.getElementById('amount').value;
    var upiId = document.getElementById('upiId').value;

    // Simulate payment process (replace with actual payment gateway integration)
    simulatePayment(amount, upiId);
});

function simulatePayment(amount, upiId) {
    // Here you can implement actual payment gateway integration logic
    // For demonstration purposes, we'll simulate a successful payment after 2 seconds

    setTimeout(function() {
        document.getElementById('paymentStatus').innerText = 'Payment successful! Amount: ' + amount + ', UPI ID: ' + upiId;
    }, 2000);
}
