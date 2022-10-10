const stored_name = "Ramesh";
const stored_password = "hash and salt added";

let user_name = "Ramesh";
let user_password = "hash and salt added";

if (stored_name == user_name) {

  if (stored_password == user_password) {
    console.log("Login succesfully !");
  }
  else {
    console.log("Enter valid password");
  }
}
else {
  console.log("Enter valid username");
}

