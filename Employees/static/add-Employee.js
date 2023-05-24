let nameInput = document.querySelector("[name = 'name']");
let emailInput = document.querySelector("[name = 'email']");
let BirthInput = document.querySelector("[name = 'date']");
let VacationInput = document.querySelector("[name = 'Available_Vacation']");
let AddressInput = document.querySelector("[name = 'address']");
let PhoneInput = document.querySelector("[name = 'Phone']");
let MartialStatusInput = document.querySelector("[name = 'martial_status']");
let SalaryInput = document.querySelector("[name = 'Salary']");
let GenderInput = document.querySelector("[name = 'gender']");

let ErrorName = document.getElementById("ErrorName");
let ErrorEmail = document.getElementById("ErrorEmail");
let ErrorDate = document.getElementById("ErrorDate");
let ErrorVacation = document.getElementById("ErrorVacation");
let ErrorAddress = document.getElementById("ErrorAddress");
let ErrorPhone = document.getElementById("ErrorPhone");
let ErrorMartialStatus = document.getElementById("ErrorMartialStatus");
let ErrorSalary = document.getElementById("ErrorSalary");
let ErrorGender = document.getElementById("ErrorGender");

function check() {
    validateName();
    validateEmail();
    validateDate();
    validateVacation();
    validateAddress();
    validateMartialStatus();
    validatePhone();
    validateSalary();
}

function validateName() {
    if (nameInput.value.trim() === "") {
        ErrorName.removeAttribute('hidden');
        ErrorName.innerHTML = "*Please enter your Name!*";
        nameInput.classList.add("not_valid"); // add not_valid class
    } else if (nameInput.value.trim().length < 3) {
        ErrorName.removeAttribute('hidden');
        ErrorName.innerHTML = "*Please enter a valid Name!*";
        nameInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorName.setAttribute('hidden', '');
        nameInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "") {
        ErrorEmail.removeAttribute('hidden');
        ErrorEmail.innerHTML = "*Please enter your Email!*";
        emailInput.classList.add("not_valid"); // add not_valid class
    } else if (!/@\w{3,}/.test(email)) { //Email should contain @ and words after it, with at least 2 characters
        ErrorEmail.removeAttribute('hidden');
        ErrorEmail.innerHTML = "*Please enter an email address that includes '@example' !*";
        emailInput.classList.add("not_valid"); // add not_valid class
    } else if (!/\.\w{2,}/.test(email)) { // Email should contain .com or similar, with at least 2 characters after the dot
        ErrorEmail.removeAttribute('hidden');
        ErrorEmail.innerHTML = "*Please enter a valid email address that includes '.com' or similar !*";
        emailInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorEmail.setAttribute('hidden', '');
        emailInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validateDate() {
    if (BirthInput.value.trim() === "") {
        ErrorDate.removeAttribute('hidden');
        ErrorDate.innerHTML = "*Please choose your Birthday!*";
        BirthInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorDate.setAttribute('hidden', '');
        BirthInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validateVacation() {
    if (VacationInput.value.trim() < 1) {
        ErrorVacation.removeAttribute('hidden');
        ErrorVacation.innerHTML = "*Please enter your Available Vacation!*";
        VacationInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorVacation.setAttribute('hidden', '');
        VacationInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validateAddress() {
    if (AddressInput.value.trim() === "") {
        ErrorAddress.removeAttribute('hidden');
        ErrorAddress.innerHTML = "*Please enter your Address!*";
        AddressInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorAddress.setAttribute('hidden', '');
        AddressInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validatePhone() {
    if (PhoneInput.value.trim() === "") {
        ErrorPhone.removeAttribute('hidden');
        ErrorPhone.innerHTML = "*Please enter your Phone Number!*";
        PhoneInput.classList.add("not_valid"); // add not_valid class
    } else if (PhoneInput.value.trim().length < 11) {
        ErrorPhone.removeAttribute('hidden');
        ErrorPhone.innerHTML = "*Please enter a valid Phone Number!*";
        PhoneInput.classList.add("not_valid"); // add not_valid class
    } else if (PhoneInput.value.trim().length > 11) {
        ErrorPhone.removeAttribute('hidden');
        ErrorPhone.innerHTML = "*Don't exceed the max number of Phone Number!*";
        PhoneInput.classList.add("not_valid"); // add not_valid class
    } else if (!/^01[0125]\d{8}$/.test(PhoneInput.value.trim())) {
        ErrorPhone.removeAttribute('hidden');
        ErrorPhone.innerHTML = "*Please enter a valid Phone Number starting with 010, 011, 012 or 015!*";
        PhoneInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorPhone.setAttribute('hidden', '');
        PhoneInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validateMartialStatus() {
    if (MartialStatusInput.value.trim() === "Select" || MartialStatusInput.value.trim() === "") {
        ErrorMartialStatus.removeAttribute('hidden');
        ErrorMartialStatus.innerHTML = "*Please choose your Martial Status!*";
        MartialStatusInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorMartialStatus.setAttribute('hidden', '');
        MartialStatusInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function validateSalary() {
    if (SalaryInput.value.trim() < 1) {
        ErrorSalary.removeAttribute('hidden');
        ErrorSalary.innerHTML = "*Please enter your Salary!*";
        SalaryInput.classList.add("not_valid"); // add not_valid class
    } else if (SalaryInput.value.trim() < 2000) {
        ErrorSalary.removeAttribute('hidden');
        ErrorSalary.innerHTML = "*Please enter a valid Salary!*";
        SalaryInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorSalary.setAttribute('hidden', '');
        SalaryInput.classList.remove("not_valid"); // remove not_valid class
    }
}

function checkForErrors(event) {
    const errorElements = document.querySelectorAll('.not_valid');
    if (errorElements.length > 0) {
        // There are elements with the not_valid class
        event.preventDefault();
    } else {
        // There are no elements with the not_valid class
        // Add the object to an array
        const obj = {
            id: JSON.parse(localStorage.getItem('Employee')).length+1,
            name: nameInput.value, 
            email: emailInput.value, 
            birthday: BirthInput.value, 
            Avaliable_vacation: VacationInput.value,
            address: AddressInput.value, 
            phone: PhoneInput.value,
            martial_status: MartialStatusInput.value, 
            salary: SalaryInput.value, 
            gender: GenderInput.value
        };
        const dataArray = JSON.parse(localStorage.getItem('Employee'));
        dataArray.push(obj);

        // Save the array to local storage
        localStorage.setItem('Employee', JSON.stringify(dataArray));
    }
}

// To retrieve the object:
/*const objStr = localStorage.getItem('employee');
const obj1 = JSON.parse(objStr);
console.log(obj); // outputs { name: 'John', age: 30 }*/