document.getElementById('registrationForm').addEventListener("submit", (event) => {


    let usernameField = document.getElementById('username');
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let confirmPassField = document.getElementById('confirmpass');
    let genderField = document.querySelectorAll('input[name="gender"]');
    let dobField = document.getElementById('dob');
    let tncChecked = document.getElementById('agree');
    
    let username = usernameField.value
    let email = emailField.value
    let pass = passwordField.value
    let confirmPass = confirmPassField.value
    let dob = dobField.value
    let termsandCond = tncChecked.checked
    
    // username
    if (username === "") {
        alert("username must not be empty!")
        event.preventDefault()
        return;
    }

    if(username.length < 8 || username.length > 15) {
        alert("username length must be between 8 until 15 character")
        event.preventDefault()
        return;
    }

    //email address
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {        
        alert("email must be valid!")        
        event.preventDefault()
        return;    
    }
    
    //password minimum 6 character
    if (pass.length < 6) {        
        alert("password must consist minimum 6 character")     
        event.preventDefault()   
        return;    
    }            
    
    //password contain alphanumeric
    let hasLetter = false;
    let hasNumber = false;
    for (let i = 0; i < pass.length; i++) {
        let code = pass.charCodeAt(i);
        if ((code >= 48 && code <= 57)) {                
            hasNumber = true;
        } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {                                   
            hasLetter = true;
        }
    }
    
    if (!hasLetter || !hasNumber) {
        alert("Password must contain both letters and numbers.");       
        event.preventDefault()         
        return false;
        }    
    
    // password and retype password both values should be the same
    if (confirmPass != pass) {
        alert("Confirm password must be the same as password!")
        event.preventDefault()
        return;
    }

    // gender
    let genderSelected = false;
    genderField.forEach((gender) => {
        if (gender.checked) {
            genderSelected = true;
        }
    });

    if (!genderSelected) {
        alert("Gender must be chosen!");
        event.preventDefault()
        return;
    }

    // dob
    if (!dob) {
        alert("Date of Birth must be filled!")
        event.preventDefault()
        return
    }

    let dobDate = new Date(dob)
    let currDate = new Date()

    let age = currDate.getFullYear() - dobDate.getFullYear()

    let monthDiff = currDate.getMonth() - dobDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && currDate.getDate() < dobDate.getDate())) {
        age --;
    }

    if (age < 20) {
        alert("Age must be equal or above 20")
        event.preventDefault()
        return
    }

    //termsChecked
    if (!termsandCond) {
        alert ("Agree box must be checked!")
        event.preventDefault()
        return
    }

        alert("Data is Valid!")
        window.location.href = "../page/home.html";
    
    });
    