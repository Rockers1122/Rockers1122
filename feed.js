document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    var formData = new FormData(this);
    
    // Convert FormData to JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
      jsonData[key] = value;
    });
    
    // Simulate sending data to server (replace with actual AJAX request)
    console.log(jsonData);
    
    // Clear form fields
    this.reset();
  });