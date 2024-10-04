function isValidEmail(email) {
  const length = email.length;
  if (length === 0 || length > 256) {
    return false;
  }

  email = email.trim();

  let atCount = 0;
  let atIndex = -1;

  for (let i = 0; i < length; i++) {
    if (email[i] === "@") {
      atCount++;
      atIndex = i;

      //if there is more than one @ or the @ is at first or none existed it's an invalid email
      if (atCount > 1 || atIndex === 0 || atIndex === length - 1) {
        return false;
      }
    }
    //checks if @ is present and if the index is after the @ position
    if (atIndex != 1 && i > atIndex) {
      if (email[i] === ".") {
        //if . is after @ immediatly it's invalid email
        if (i == atIndex + 1) {
          return false;
        }
        return true;
      }
    }
  }

  //to inssure that we only one @.
  if (atCount !== 1) {
    return false;
  }

  return true;
}

//for testing
console.log(
  isValidEmail("jadsharafeldeen@gmail.com")
    ? "Valid email address"
    : "Invalid email address"
);
console.log(
  isValidEmail("jadsharafeldeengmail.com")
    ? "Valid email address"
    : "Invalid email address"
);
console.log(
  isValidEmail("jadsharafeldeen@gmailcom")
    ? "Valid email address"
    : "Invalid email address"
);
