let myPara = document.querySelector('.myPara');
let myHeading = document.querySelector('#headingOne')
let myDiv = document.querySelector('.box');

myPara.innerText="this is modified Para";
myHeading.innerHTML="inner html property is used";
myDiv.style.color = "green";

// creating elements through js
let myBtn = document.createElement('button');
myBtn.className = 'btn';
myBtn.textContent = "click me";
myBtn.style.backgroundColor = "aqua";
myBtn.style.display = 'block';
myBtn.style.margin = '10px';
myBtn.style.padding = '10px';
myBtn.style.borderRadius = '20px';
myDiv.appendChild(myBtn);

let i = 1;
myBtn.addEventListener('click', ()=> {
    let newPara = document.createElement('p');
    newPara.textContent = "Paragraph number: " + i;
    myDiv.appendChild(newPara);
    i++;
});

// let alertBase = document.querySelector('.alertBase');
let alertBtn = document.querySelector('.alertBtn');
let modifyBtn = document.querySelector('.modifyBtn');
let alertText = "alert btn pressed";
alertBtn.addEventListener('click', ()=> {
    alert(alertText);
});
modifyBtn.addEventListener('click', ()=> {
    alertText = "modified alert text";
    alert(alertText);
});

