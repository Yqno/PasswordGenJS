function generatePassword() {
  var length = 20,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

function displayPassword() {
  document.getElementById("password").value = generatePassword();
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCom
