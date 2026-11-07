
var regform = document.getElementById("regform");

var sname = document.getElementById("sname");
var emailid = document.getElementById("emailid");
var pword = document.getElementById("pword");
var biotext = document.getElementById("biotext");

var nameerror = document.getElementById("nameerror");
var emailerror = document.getElementById("emailerror");
var passworderror = document.getElementById("passworderror");
var bioerror = document.getElementById("bioerror");

var charcount = document.getElementById("charcount");
var regbtn = document.getElementById("regbtn");
var success = document.getElementById("success");

// Name validation
function validateName() {
    if (sname.value.trim() == "") {
        nameerror.textContent = "Name is required";
        return false;
    }
    else {
        nameerror.textContent = "";
        return true;
    }
}

// Email validation
function validateEmail() {
   

    if (emailid.value.trim() == "") {
        emailerror.textContent = "Email is required";
        return false;
    }
    else if (!emailid.value.include("@") || !emailid.value.include(".")) {
        emailerror.textContent = "Enter a valid email address";
        return false;
    }
    else {
        emailerror.textContent = "";
        return true;
    }
}

// Password validation
function validatePassword() {
    if (pword.value.trim() == "") {
        passworderror.textContent = "Password is required";
        return false;
    }
    else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#*&$]).{6,}$/.test(pword.value)){
         passworderror.textContent = "Password must contain uppercase, lowercase, number, special character and minimum 6 characters";
        return false;
    }
    else {
        passworderror.textContent = "";
        return true;
    }
}

// Bio validation
function validateBio() {
    charcount.textContent = biotext.value.length + " / 200 characters";

    if (biotext.value.trim() == "") {
        bioerror.textContent = "Bio is required";
        return false;
    }
    else {
        bioerror.textContent = "";
        return true;
    }
}

// Check all fields
function validateForm() {
    var namevalid = validateName();
    var emailvalid = validateEmail();
    var passwordvalid = validatePassword();
    var biovalid = validateBio();

    regbtn.disabled = !(namevalid && emailvalid && passwordvalid && biovalid);
}

// Real-time validation using input events
sname.addEventListener("input", function() {
    validateName();
    validateForm();
});

emailid.addEventListener("input", function() {
    validateEmail();
    validateForm();
});

pword.addEventListener("input", function() {
    validatePassword();
    validateForm();
});

biotext.addEventListener("input", function() {
    validateBio();
    validateForm();
});

// Form submission
regform.addEventListener("submit", function(event) {
    event.preventDefault();

    validateForm();

    if (!regbtn.disabled) {
        success.textContent = "Registration Successful!";
        regform.reset();

        charcount.textContent = "0 / 200 characters";

        nameerror.textContent = "";
        emailerror.textContent = "";
        passworderror.textContent = "";
        bioerror.textContent = "";

        regbtn.disabled = true;
    }
});
