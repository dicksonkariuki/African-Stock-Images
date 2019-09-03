function validateform() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || email === null) {
    alert("Email is required");
    returnfalse;
  } else if (password.length < 6) {
    alert("password length must be atleast six characters long");
  } else {
    alert("Proceed to download an image");
  }
}
