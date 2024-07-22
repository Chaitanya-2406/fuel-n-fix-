// Initialize the map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15
    });

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
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
        }, function () {
            alert('Error: The Geolocation service failed.');
        });
    } else {
        alert('Error: Your browser doesn\'t support Geolocation.');
    }
}

// Confirm location and redirect to confirmation page with form data
function confirmLocation() {
    // Get form data
    var fuelType = document.getElementById('fuelType').value;
    var amount = document.getElementById('amount').value;

    // Construct URL with form data as parameters
    var url = 'confirmation.html?fuelType=' + encodeURIComponent(fuelType) + '&amount=' + encodeURIComponent(amount);

    // Redirect to confirmation page
    window.location.href = url;
}

// Load Google Maps API asynchronously
function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDEFwNZ7ZwNJus8JqScxEcgj1kVUrpf3JY&callback=initMap';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}
