function generateEmailByName(fullName) {
  fullName = fullName.toLowerCase();
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  
  let email;
  if (nameParts.length == 1){
    email = firstName
    return email += "@bank.com";
  } else if ((nameParts.length > 2 && firstName.length <= 3)&& nameParts.length > 2) {
    const secondName = nameParts[1];
    email = secondName + "." + lastName;
   return email += "@bank.com";
  } else if (firstName.length <= 3 && nameParts.length <= 2) {
    email = lastName
    return email += "@bank.com";
  }else if (firstName.length > 9 || nameParts.length < 2){
    email = firstName
    return email += "@bank.com";
  }else if (firstName.length > 3) {
    email = firstName +"." +lastName;
    return email += "@bank.com";
  }

}
console.log(generateEmailByName('Davidsen Norman')); 

console.log(generateEmailByName('I Made Wirawan')); 

console.log(generateEmailByName('Abi Lukito')); 

console.log(generateEmailByName('Budi'));

console.log(generateEmailByName('Michaelangelo Bellagio'));

