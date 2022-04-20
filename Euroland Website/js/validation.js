let fnameValid = false;
let lnameValid = false;
let dobValid = false;
let qualificationValid = false;
let emailValid = false;
let phoneValid = false;
let addressValid = false;
let genderValid = false;
let languageValid = false;
// getting the input fields values
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let dob = document.getElementById('dob');
let qualification = document.getElementById('qualify');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let gender = document.getElementsByName('gender');
let language = document.getElementsByName('language');
let namePattern = /^[a-zA-Z]*$/;
let emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let phonePattern = /^\d{10}$/;

// first name validation
handleFirstName = () => {
    if(!fname.value.match(namePattern) || fname.value == '') {
        document.getElementById('fnameError').innerHTML = 'Please enter a valid name';
    } else {
        fnameValid = true;
        document.getElementById('fnameError').innerHTML = '';
    }
}

// last name validation
handleLastName = () => {
     if(!lname.value.match(namePattern) || lname.value == '') {
        document.getElementById('lnameError').innerHTML = 'Please enter a valid name';
    } else {
        lnameValid = true;
        document.getElementById('lnameError').innerHTML = '';
    }
}

// dob validation
handleDob = () => {
    if(dob.value == '') {
        document.getElementById('dobError').innerHTML = 'date of birth is required';
    } else {
        dobValid = true;
        document.getElementById('dobError').innerHTML = '';
    }
}

// qualification validation
handleQualification = () => {
    if(qualification.value == '') {
        document.getElementById('qualifyError').innerHTML = 'Please select one';
    } else {
        qualificationValid = true;
        document.getElementById('qualifyError').innerHTML = '';
    }
}

// email validation
handleEmail = () => {
    if(!emailPattern.test(email.value) || email.value == '') {
        document.getElementById('emailError').innerHTML = 'Please enter a valid e-mail';
    } else {
        emailValid = true;
        document.getElementById('emailError').innerHTML = '';
    }
}

// phone number validation
handlePhone = () => {
    if(phone.value == '' || !phone.value.match(phonePattern)) {
        document.getElementById('phoneError').innerHTML = 'Please enter a valid phone number';
    } else {
        phoneValid = true;
        document.getElementById('phoneError').innerHTML = '';
    }
}

// address validation
handleAddress = () => {
    if(address.value == '') {
        document.getElementById('addressError').innerHTML = 'Please fill out this field';
    } else {
        addressValid = true;
        document.getElementById('addressError').innerHTML = '';
    }
}

// gender validation
handleGender = () => {
    if (gender[0].checked) {
        return gender[0].value;
      } else if (gender[1].checked) {
        return gender[1].value;
      } else if (gender[2].checked) {
        return gender[2].value;
      } else {
          return '';
      }
}
genderValidation = () => {
    let genderVal = handleGender();
    if (genderVal !== "") {
      genderValid = true;
      document.getElementById("genderError").innerHTML = "";
    } else {
      document.getElementById("genderError").innerHTML = 'Please choose your Gender';
    }
}

// language validation
handleLanguages = () => {
    let checkedValue = [];
    for (let i = 0; i < language.length; i++) {
      if (language[i].checked) {
        checkedValue.push(language[i].value);
      }
    }
    return checkedValue;
};
checkboxValidation = () => {
    let language = handleLanguages();
    if (language.length > 0) {
      languageValid = true;
      document.getElementById("languageError").innerHTML = "";
    } else {
      document.getElementById("languageError").innerHTML = "Please select at least one";
    }
};

// submit button logic
function validateForm() {
    handleFirstName();
    handleLastName();
    handleDob();
    handleQualification();
    handleEmail();
    handlePhone();
    handleAddress();
    genderValidation();
    checkboxValidation();

    let userData = {
        firstName: fname.value,
        lastName: lname.value,
        dob: dob.value,
        qualification: qualification.value,
        email: email.value,
        phoneNO: phone.value,
        address: address.value,
        gender: handleGender(),
        languages: handleLanguages()
    }
    
    if(fnameValid && lnameValid && dobValid && qualificationValid && emailValid && phoneValid && addressValid && genderValid && languageValid) {
        console.log(userData);
    }
}

// clear form 
function clearForm() {
    document.getElementById('registerForm').reset();
}
