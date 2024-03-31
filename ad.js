function submitVote() {
    var daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    var selectedOptions = {};
    var allOptionsSelected = true;

    // Iterate over each day of the week
    daysOfWeek.forEach(function(day) {
        var selectedOption = document.querySelector('input[name="breakfast-' + day + '"]:checked');
        if (selectedOption) {
            selectedOptions[day] = selectedOption.value;
        } else {
            allOptionsSelected = false;
        }
    });

    if (allOptionsSelected) {
        var resultString = "Thank you for voting! Your choices:<br>";
        daysOfWeek.forEach(function(day) {
            resultString += day.charAt(0).toUpperCase() + day.slice(1) + ": " + selectedOptions[day] + "<br>";
        });
        document.getElementById('result').innerHTML = resultString;
        // Here you can send the vote data to your server for processing.
    } else {
        document.getElementById('result').innerHTML = "Please select an option for each day before submitting.";
    }
}