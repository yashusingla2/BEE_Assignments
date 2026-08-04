// Run this when page loads
showStoredData();
showSessionUser();

function submitForm() {

  // get values from input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var course = document.getElementById("course").value;
  var feedback = document.getElementById("feedback").value;

  var isValid = true;

  // check name
  if (name.trim() === "") {
    document.getElementById("nameError").innerHTML = "Please enter your name.";
    isValid = false;
  } else if (name.trim().length < 3) {
    document.getElementById("nameError").innerHTML = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  // check email
  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML = "Please enter your email.";
    isValid = false;
  } else if (email.includes("@") === false || email.includes(".") === false) {
    document.getElementById("emailError").innerHTML = "Please enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  // check course
  if (course === "") {
    document.getElementById("courseError").innerHTML = "Please select a course.";
    isValid = false;
  } else {
    document.getElementById("courseError").innerHTML = "";
  }

  // check feedback
  if (feedback.trim() === "") {
    document.getElementById("feedbackError").innerHTML = "Please enter your feedback.";
    isValid = false;
  } else {
    document.getElementById("feedbackError").innerHTML = "";
  }

  // if everything is fine, save the data
  if (isValid === true) {

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("course", course);
    localStorage.setItem("feedback", feedback);

    sessionStorage.setItem("sessionUser", name);

    showStoredData();
    showSessionUser();

    // clear the form
    document.getElementById("feedbackForm").reset();
  }
}

function showStoredData() {
  var name = localStorage.getItem("name");
  var email = localStorage.getItem("email");
  var course = localStorage.getItem("course");
  var feedback = localStorage.getItem("feedback");

  if (name === null) {
    document.getElementById("storedData").innerHTML = "No feedback stored.";
  } else {
    document.getElementById("storedData").innerHTML =
      "Name: " + name + "<br>" +
      "Email: " + email + "<br>" +
      "Course: " + course + "<br>" +
      "Feedback: " + feedback;
  }
}

function showSessionUser() {
  var user = sessionStorage.getItem("sessionUser");

  if (user === null) {
    document.getElementById("sessionUser").innerHTML = "";
  } else {
    document.getElementById("sessionUser").innerHTML = "Current Session User: " + user;
  }
}

function deleteData() {
  localStorage.clear();
  sessionStorage.clear();
  showStoredData();
  showSessionUser();
}
