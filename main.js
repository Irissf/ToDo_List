let idCounter = 0;
const input = document.querySelector('input[type="text"]');

//detectar cuando usuario a completado el formulario
userInput.addEventListener('submit', (event)=>{
    event.preventDefault(); // que no recarge la pagina
    addTask();
});

let addTask = ()=>{

    idCounter++;

    let newValue = input.value;

    list.innerHTML += `
        <div class="task-container" id="${idCounter}">
            <label for="">
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="./images/papelera.png" class="closeBtn">
        </div>
    `;

    input.value = ''; //limpiamos el input, para que el usuario añada tareas facilmente
    updateStats();
};

list.addEventListener('click',(event)=>{

    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        //obtener id elemento y borrar
        deleteTask(event.srcElement.parentNode.id);
    }

});

let updateStats = ()=>{
    
    //todos los hijos de list, cada tarea
    let elementsList = list.querySelectorAll('div'); 
    //todos los input tipo checkbox y que tengan la pseudoclase checked
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    
    stats.innerHTML = `
        <p>Tareas pendientes: ${elementsList.length} Completadas: ${checkbox.length}</p>
    `
};

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};

