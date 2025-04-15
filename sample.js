function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("form-msg");
  
    if (!name || !email || !message) {
      msg.textContent = "Please fill out all fields.";
      msg.style.color = "red";
      return false;
    }
  
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    return false; 
  }