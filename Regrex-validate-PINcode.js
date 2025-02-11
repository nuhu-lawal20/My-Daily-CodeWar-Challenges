// Description:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//My Solutions:
//1)
function validatePIN (pin) {
    //return true or false
    if((!/^\d+$/.test(pin)) || (pin.length != 4) && (pin.length != 6)){
      return false
    }else{
      return true
    }
}

//2)
function validatePIN2(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }