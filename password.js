function generatePassword() {
  const length = 12;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!&*";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    password += randomChar;
  }

  document.getElementById("password").value = password;
}
