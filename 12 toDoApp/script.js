let list = document.querySelector('.list');
let myBtn = document.createElement('button');
let input = document.querySelector('input');


myBtn.style.margin = '20px';
myBtn.style.padding = '10px';
myBtn.style.backgroundColor = 'yellow';
myBtn.style.borderRadius = '25px';

myBtn.textContent = "Add Task";
input.after(myBtn); 

myBtn.addEventListener('click', () => {
    let task = input.value;
    if (task === "") {
        alert("Invalid Input");
        return; 
    }
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete"; 

    let newItem = document.createElement('li');
    
    newItem.textContent = task + " "; 
    
  
    newItem.appendChild(deleteBtn);
    // styling new newItem
    newItem.style.color = 'black';
    newItem.style.width = '600px';
    newItem.style.borderRadius = '25px';
    newItem.style.height = '40px';
    newItem.style.display = 'flex';
    newItem.style.alignItems= 'center';
    newItem.style.backgroundColor = 'aquamarine';
    newItem.style.justifyContent = 'space-between';
    
    deleteBtn.style.marginRight = '20px';
    deleteBtn.style.backgroundColor = 'red';
    deleteBtn.style.borderRadius = '25px';
    deleteBtn.style.height = '30px';
    deleteBtn.style.width = '100px'
    list.appendChild(newItem);

    input.value = "";
    deleteBtn.addEventListener('click', () => {
        newItem.remove();
    });
});
