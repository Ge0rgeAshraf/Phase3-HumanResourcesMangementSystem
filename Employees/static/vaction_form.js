let date_fromInput = document.querySelector("[name = 'date_from']");
let date_toInput = document.querySelector("[name = 'date_to']");
let reasoneInput = document.querySelector("[name = 'reason']");

let ErrorDate_from = document.getElementById("Errordate_from");
let ErrorDate_to = document.getElementById("Errordate_to");
let ErrorReason = document.getElementById("Errorreason");


// function check() {
//     validateDate_from();
//     validateDate_to();
//     validatereason();

// }
function validateDate_from() {
    if (date_fromInput.value.trim() === "") {
        ErrorDate_from.removeAttribute('hidden');
        ErrorDate_from.innerHTML = "*Please choose your date in you went start vaction !*";
        date_fromInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorDate_from.setAttribute('hidden', '');
        date_fromInput.classList.remove("not_valid"); // remove not_valid class
    }
}
function validateDate_to() {
    if (date_toInput.value.trim() === "") {
        ErrorDate_to.removeAttribute('hidden');
        ErrorDate_to.innerHTML = "*Please choose your date in you went end vaction!*";
        date_toInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorDate_to.setAttribute('hidden', '');
        date_toInput.classList.remove("not_valid"); // remove not_valid class
    }
}
function validatereason() {
    if (reasoneInput.value.trim() === "") {
        ErrorReason.removeAttribute('hidden');
        ErrorReason.innerHTML = "*Please enter your reason!*";
        reasoneInput.classList.add("not_valid"); // add not_valid class
    } else {
        ErrorReason.setAttribute('hidden', '');
        reasoneInput.classList.remove("not_valid"); // remove not_valid class
    }
}
function checkForErrors(event) {
    validateDate_from();
    validateDate_to();
    validatereason();
    let employeeId = window.location.href.split("?")[1].split("=")[1]
    console.log('frist')
    let vactionEmployee = JSON.parse(localStorage.getItem("Employee")).find((employee) => employee.id == employeeId)   
    const errorElements = document.querySelectorAll('.not_valid');
    if (errorElements.length > 0) {
        console.log('seconde')

        // There are elements with the not_valid class
        event.preventDefault();
    }
    else{
    const newObj = {
        id: JSON.parse(localStorage.getItem('Vacation')).length+1,
        from:date_fromInput.value,
        to:date_toInput.value,
        reason:reasoneInput.value,
        Employeeid:vactionEmployee.id,
        status:"submitted"

    }

    let newArray = JSON.parse(localStorage.getItem('Vacation')).concat( [newObj])


    localStorage.setItem('Vacation', JSON.stringify(newArray))

    document.getElementsByClassName('successMsg')[0].classList.add('show')

    setTimeout(() => {
        document.getElementsByClassName('successMsg')[0].classList.remove('show')
    }, 1500)

    //// ex. call python api with the data
    console.log('all form fields are valid')
}
    }

window.onload=function(){
    let employeeId = window.location.href.split("?")[1].split("=")[1]

    let vactionEmployee = JSON.parse(localStorage.getItem("Employee")).find((employee) => employee.id == employeeId)   
if(vactionEmployee){
let name_employee =document.getElementById("name_employee");
let id_employee =document.getElementById("ID_empolyee");
name_employee.innerHTML=`<p>${vactionEmployee.name}</p>`;
id_employee.innerHTML=`<p>${vactionEmployee.id}</p>`;



}
}