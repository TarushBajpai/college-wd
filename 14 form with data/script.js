let nameInp = document.querySelector('#name');
let emailInp = document.querySelector('#email');
let checkboxInp = document.querySelector('#robotCheck');
let addBtn = document.querySelector('.submitBtn');
let tableBody = document.querySelector('#tableBody');


addBtn.addEventListener('click',()=>{

    let name = nameInp.value;
    let email = emailInp.value;
    let checkbox = checkboxInp.checked;

    if(fieldCheck(name, email, checkbox) === false) return; 

    let newRow = document.createElement('tr');
    let columnOne = document.createElement('td');
    let columnTwo = document.createElement('td');
    let columnThree = document.createElement('td');

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    columnOne.textContent = name;
    columnTwo.textContent = email;
    columnThree.appendChild(deleteBtn);

    newRow.appendChild(columnOne);
    newRow.appendChild(columnTwo);
    newRow.appendChild(columnThree);

    tableBody.appendChild(newRow);

     deleteBtn.addEventListener('click', () => {
        newRow.remove(); 
    });
})

let fieldCheck = (name,email,checkbox)=>{

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if ( name.trim() === "" || email.trim() == "") {
        alert("INVALID INPUT");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("INVALID EMAIL: Please enter a valid email structure (e.g., name@example.com).");
        return false; 
    }
    if(checkbox === false){
        alert("Verify you're not a robot");
        return false;
    }
    return true;
}