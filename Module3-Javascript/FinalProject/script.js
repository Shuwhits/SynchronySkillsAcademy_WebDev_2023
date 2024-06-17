// functions

function changeText(button){
  if (button == 1){
  document.getElementById("buttonN").innerHTML = "Click on me if you want numbers! ✅"
  } else{
  document.getElementById("buttonL").innerHTML = "Click on me if you want letters! ✅"
  }
}

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;

  document.getElementById("pw").innerHTML = generatePassword(10)
}

function generatePasswordN(length) {
  var charset = "0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;

  document.getElementById("pw").innerHTML = generatePasswordN(10)
}

function generatePasswordL(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;

  document.getElementById("pw").innerHTML = generatePasswordL(10)
}
