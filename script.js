document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetch form values
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Here, you can implement code to handle form submission, like sending the data to a server or displaying a confirmation message.
    // For now, let's just log the values to the console.
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Optionally, you can clear the form fields after submission
    document.getElementById("contact-form").reset();
});
// Create an image element
var img = document.createElement("img");
img.src = "your-image-path.jpg"; // Replace "your-image-path.jpg" with the actual path to your image
img.alt = "Owner's Image"; // Provide alternative text for the image for accessibility

// Add the image before the owner's name
var ownerName = document.getElementById("owner-name");
ownerName.parentNode.insertBefore(img, ownerName);

// Create an image element
var img = document.createElement("img");
img.id = "owner-image";
img.src = "your-image-path.jpg"; // Replace "your-image-path.jpg" with the actual path to your image
img.alt = "Owner's Image"; // Provide alternative text for the image for accessibility

// Add the image before the owner's name
var ownerName = document.getElementById("owner-name");
ownerName.parentNode.insertBefore(img, ownerName);
