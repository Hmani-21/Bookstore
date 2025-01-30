document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "Thank you! Your message has been sent.";
        document.getElementById("responseMessage").style.color = "green";

        
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Please fill out all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
