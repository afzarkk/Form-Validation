function validateForm(){
    var name = document.getElementById("txtName").value;
    var phone = document.getElementById("txtPhoneNumberValid").value;
    // var age = document.getElementById("age").value

    if(!/^[a-zA-Z ]+$/.test(name))
    {
        alert("Please enter your Name. It should only contain alphabets and spaces.");
        return false;
    }

    if(!/^\d{10}$/.test(phone))
    {
        alert("Please enter your Phone Number. It should only contain 10 digits");
        return false;
    }
    // if(!/^\d{1,3}$/.test(age) || age < 1 || age > 120) {
    //     alert("Please enter a valid Age. It should be a number between 1 and 120.");
    //     return false;
    // }

    return true;
}

function calculateAge(dob) {
    var dobDate = new Date(dob);
    var diffMs = Date.now() - dobDate.getTime();
    var ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}


document.addEventListener('DOMContentLoaded', function() {
    var dobInput = document.getElementById('dob');  
    var ageInput = document.getElementById('age'); 

    dobInput.addEventListener('change', function() {
        var dob = dobInput.value;  
        if (dob) {
            var age = calculateAge(dob);  
            ageInput.value = age; 
        }
    });
});