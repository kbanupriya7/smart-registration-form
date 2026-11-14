const submitbtn = document.getElementById("submit-btn");
var username = document.getElementById("name");
var emailid = document.getElementById("emailid");
var contact = document.getElementById("contact");
var passwd = document.getElementById("passwd");
var gender = document.getElementsByName("gender");
var course = document.getElementsByName("course");
var bio_text = document.getElementById("bio-text");
var name_regexp = /^[a-zA-Z]+$/;
var email_regexp = /^[a-zA-Z0-9,_%+-]+@gmail\.com/;
var pword_regexp = /^[a-zA-Z0-9+@£$#&*]{8,}$/;
var contact_regexp = /^\d{10}$/;

var nameerror = document.getElementById("name-error");
var emailerror = document.getElementById("email-error");
var contacterror = document.getElementById("contact-error");
var pworderror = document.getElementById("pword-error");
var gendererror = document.getElementById("gender-error");
var courseerror = document.getElementById("course-error");
var bioerror = document.getElementById("bio-error");
var success_msg = document.getElementById("success-msg");
var text_count = document.getElementById("text-count");

submitbtn.addEventListener("click", function (event) {
  event.preventDefault();
  var gender_selected = false;
  var course_selected = false;
  var isValidation = true;
  if (!name_regexp.test(username.value)) {
    nameerror.style.display = "inline";
    isValidation = false;
  } else {
    nameerror.style.display = "none";
  }

  if (!email_regexp.test(emailid.value)) {
    emailerror.style.display = "inline";
    isValidation = false;
  } else {
    emailerror.style.display = "none";
  }
  if (!contact_regexp.test(contact.value)) {
    contacterror.style.display = "inline";
    isValidation = false;
  } else {
    contacterror.style.display = "none";
  }

  if (!pword_regexp.test(passwd.value)) {
    pworderror.style.display = "inline";
    isValidation = false;
  } else {
    pworderror.style.display = "none";
  }
  //gender validation
  for (var count = 0; count < gender.length; count++) {
    if (gender[count].checked) {
      gender_selected = true;
    }
  }
  if (!gender_selected) {
    gendererror.style.display = "inline";
    isValidation = false;
  } else {
    gendererror.style.display = "none";
  }
  //course validation
  for (var i = 0; i < course.length; i++) {
    if (course[i].checked) {
      course_selected = true;
    }
  }
  if (!course_selected) {
    courseerror.style.display = "inline";
    isValidation = false;
  } else {
    courseerror.style.display = "none";
  }
  //bio validation
  if (bio_text.value.trim() === "" || bio_text.value.trim().length <= 10) {
    bioerror.style.display = "inline";
    isValidation = false;
  } else {
    bioerror.style.display = "none";
    var counttotal = bio_text.value.length + " " + "/ 200";
    text_count.textContent = counttotal;
  }
  if (isValidation) {
    success_msg.style.display = "inline";
    document.getElementById("reg-form").reset();
    var counttotal = bio_text.value.length + " " + "/ 200";
    text_count.textContent = counttotal;
    setTimeout(function () {
      success_msg.style.display = "none";
    }, 3000);
  } else {
    success_msg.style.display = "none";
  }
});

username.addEventListener("input", function () {
  if (name_regexp.test(username.value)) {
    nameerror.style.display = "none";
  }
});

emailid.addEventListener("input", function () {
  if (email_regexp.test(emailid.value)) {
    emailerror.style.display = "none";
  }
});

contact.addEventListener("input", function () {
  if (contact_regexp.test(contact.value)) {
    contacterror.style.display = "none";
  }
});

passwd.addEventListener("input", function () {
  if (pword_regexp.test(passwd.value)) {
    pworderror.style.display = "none";
  }
});
gender.forEach(function (item) {
  item.addEventListener("change", function () {
    gendererror.style.display = "none";
  });
});

course.forEach(function (e) {
  e.addEventListener("change", function () {
    courseerror.style.display = "none";
  });
});
bio_text.addEventListener("input", function () {
  if (bio_text.value.trim() !== "" && bio_text.value.trim().length >= 10) {
    bioerror.style.display = "none";
  }
  var counttotal = bio_text.value.length + " " + "/ 200";
  text_count.textContent = counttotal;
});
