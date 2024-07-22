<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEFwNZ7ZwNJus8JqScxEcgj1kVUrpf3JY"></script>
    function showLocation() {
        // Initialize the map
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 15
        });

        // Try HTML5 geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);

                // Add a marker for the user's location
                var marker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location'
                });

                // Show the confirm button
                document.getElementById('confirm-btn').style.display = 'inline';
            }, function() {
                alert('Error: The Geolocation service failed.');
            });
        } else {
            alert('Error: Your browser doesn\'t support Geolocation.');
        }
    }

    function confirmLocation() {
        // Handle confirming location and placing the order
        alert('Your location has been confirmed. Order placed successfully!');
    }


//         function confirmLocation() {
//     // Get form data
//     var fuelType = document.getElementById('fuelType').value;
//     var amount = document.getElementById('amount').value;

//     // Construct URL with form data as parameters
//     var url = 'c.html?fuelType=' + encodeURIComponent(fuelType) + '&amount=' + encodeURIComponent(amount);

//     // Redirect to confirmation page
//     window.location.href = url;
// }

//     // Function to get URL parameters
//     function getUrlParameter(name) {
//             name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//             var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//             var results = regex.exec(location.search);
//             return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//         }

//         // Get form data from URL parameters
//         var fuelType = getUrlParameter('fuelType');
//         var amount = getUrlParameter('amount');

//         // Create HTML content with form data
//         var orderContent = `
//             <h3>Fuel Type:</h3>
//             <p>${fuelType}</p>
//             <h3>Amount (in liters):</h3>
//             <p>${amount}</p>
//         `;

//         // Display form data on the page
//         document.getElementById('orderDetails').innerHTML = orderContent;