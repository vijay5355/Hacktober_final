document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic authentication logic (replace this with your backend authentication logic)
    if (username === "user" && password === "password") {
        // Successful login, redirect to another page or perform other actions here
        alert("Login successful!");
    } else {
        // Failed login, display error message
        document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
    }
});


// function showPlace() {
//     var placeInput = document.getElementById("placeInput").value;
//     var placeDisplay = document.getElementById("placeDisplay");
  
//     // Assuming you have a function to fetch and display the place details based on the input
//     // For example:
//     // var placeDetails = fetchPlaceDetails(placeInput); 
  
//     // Here, you can use the fetched place details to display on the website
//     var placeDetails = "Details of " + placeInput; // Placeholder message
  
//     placeDisplay.textContent = placeDetails;
//   }
  