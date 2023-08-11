function submitForm() {
    // Assuming you have an email service configured
    // Replace "agent@example.com" with the actual agent's email address
    const agentEmail = "majayi4@myseneca.ca";
    
    // Collect form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const propertyType = document.getElementById("propertyType").value;
    const bedrooms = document.getElementById("bedrooms").value;
    const bathrooms = document.getElementById("bathrooms").value;
    const priceRange = document.getElementById("priceRange").value;
    const comments = document.getElementById("comments").value;
    
    // Construct email body
    const emailBody = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Phone: ${phone}
      Email: ${email}
      Type of Property: ${propertyType}
      Number of Bedrooms: ${bedrooms}
      Number of Bathrooms: ${bathrooms}
      Price Range: ${priceRange}
      Additional Comments: ${comments}
    `;
    
    // Send email (this is a simplified example)
    // In a real-world scenario, you would use a server-side script to send the email
    // This is just for demonstration purposes
    window.open(`mailto:${agentEmail}?subject=Property Inquiry&body=${encodeURIComponent(emailBody)}`);
    
    // Display alert to confirm submission
    alert("Registered Successfully");
    
    // Prevent form submission
    return false;
  }
  