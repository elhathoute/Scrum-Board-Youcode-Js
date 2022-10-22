//localStorage.clear()
var todo = document.getElementById("TodoTask");
var inProgress = document.getElementById("in-Progress ");
var done = document.getElementById("done-task");
var spanToDo = document.getElementById("to-do-tasks-count");
var spanInProgress = document.getElementById("in-progress-tasks-count");
var spanDone = document.getElementById("done-tasks-count");
let addTask = document.getElementById("SaveTask");
var form = document.getElementById("form");
var form1 = document.getElementById("form1");
//check if table exist in localstorage if trur return it if false return array vide
var tableOfTaskS = localStorage.getItem('tableOfTaskS') ? JSON.parse(localStorage.getItem('tableOfTaskS')) : [];
affichage();
form.addEventListener("submit", () => {
    var TabTask = {
        titre: form.titre.value,
        description: form.description.value,
        date: form.date.value,
        priority: form.priority.value,
        status: form.status.value,
        type: document.querySelector('input[name="radio"]:checked').value
    }
    tableOfTaskS.push(TabTask);
    localStorage.setItem('tableOfTaskS', JSON.stringify(tableOfTaskS));
    affichage();
})

function affichage() {
    //initialiser les div a la valeur vide au debut 
    todo.innerHTML = '',inProgress.innerHTML = '',todo.innerHTML = '';
    let countTodo = 1,countProg = 1,countDone = 1;
    for (let i = 0; i < tableOfTaskS.length; i++) {
        //condition of priority
        (tableOfTaskS[i].priority == 1) ? priority = "Urgent" : (tableOfTaskS[i].priority == 2) ? priority = "Hight" : (tableOfTaskS[i].priority == 3) ? priority = "Medium" : priority = "Low";
        //condition of type
        (tableOfTaskS[i].type == 1) ? type = "Feature" : type = "Bug";
        //condition of description
        let descrLenght = tableOfTaskS[i].description.length;
        (descrLenght > 30) ? description = tableOfTaskS[i].description.substr(0, 40) :description = tableOfTaskS[i].description;
        if (tableOfTaskS[i].status == 1) {
            todo.innerHTML += `
                     <div >
                                <button onclick="updateTask(this)" data-bs-toggle="modal" data-bs-target="#UpdateTask" class="d-flex button w-100 border p-1 " id="btn-1">
                                    <div class="col-md-1">
                                        <i class="bi bi-question-circle text-success"></i>
                                    </div>
                                    <div class="col-md-11 text-start">
                                        <div class=" fw-bold">${tableOfTaskS[i].titre}</div>
                                        <div class=" ">
                                            <div class="text-black-50  "># <span>${i + 1} </span> created in ${tableOfTaskS[i].date} </div>
                                            <div class=" " title=${tableOfTaskS[i].description}>${description}...</div>    
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center ">
                                            <div>
                                                <span class="col-md-auto btn btn-primary rounded-bottom rounded-top ">${priority} </span>
                                                <span class=" col-md-auto btn btn-gray  ">${type} </span>
                                            </div>
                                        </div>
                                    </div>
                                </button>               
                     </div>   `;
            spanToDo.innerHTML = countTodo++;

        } else if (tableOfTaskS[i].status == 2) {
            inProgress.innerHTML += `
                    <div >
                        <button onclick="updateTask(this)" data-bs-toggle="modal" data-bs-target="#UpdateTask"  class="d-flex button w-100 border p-1 " id="btn-1">
                            <div class="col-md-1">
                                <i class="bi bi-question-circle text-success"></i>
                            </div>
                            <div class="col-md-11 text-start">
                                <div class=" fw-bold">${tableOfTaskS[i].titre}</div>
                                <div class=" ">
                                    <div class="text-black-50 "># <span>${i + 1} </span> created in ${tableOfTaskS[i].date} </div>
                                    <div class=" " title=${tableOfTaskS[i].description}> ${description}...</div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center ">
                                    <div>
                                        <span class="col-md-auto btn btn-primary rounded-bottom rounded-top ">${priority} </span>
                                        <span class=" col-md-auto btn btn-gray  ">${type} </span>
                                    </div> 
                                </div>
                            </div>
                        </button>                  
                    </div> `;
            spanInProgress.innerHTML = countProg++;

        } else if (tableOfTaskS[i].status == 3) {
            done.innerHTML += `
                    <div >
                        <button onclick="updateTask(this)" data-bs-toggle="modal" data-bs-target="#UpdateTask"  class="d-flex button w-100 border p-1 " id="btn-1">
                            <div class="col-md-1">
                                <i class="bi bi-question-circle text-success"></i>
                            </div>
                            <div class="col-md-11 text-start">
                                <div class=" fw-bold">${tableOfTaskS[i].titre}</div>
                                <div class=" ">
                                    <div class="text-black-50  "># <span>${i + 1} </span> created in ${tableOfTaskS[i].date} </div>
                                    <div class=" " title=${tableOfTaskS[i].description}>${description}...</div>
                        
                                </div>
                                <div class="d-flex justify-content-between align-items-center ">
                                    <div>
                                        <span class="col-md-auto btn btn-primary rounded-bottom rounded-top ">${priority} </span>
                                        <span class=" col-md-auto btn btn-gray  ">${type} </span>
                                    </div> 
                                </div>
                
                
                            </div>
                        </button>
                                    
                    </div>
            
                    `;
            spanDone.innerHTML = countDone++;

        }
    }
}
//hide modal after clicked in btn save of task
addTask.addEventListener("click", () => {
    addTask.setAttribute("data-bs-dismiss", "modal");
})

//delete task
document.getElementById("deleteTask").addEventListener("click", () => {
    //get the id of task
    let id = document.getElementById("id1").value;
    //remove the task
    tableOfTaskS.splice(id, 1);
    //set tableOfTaskS in localstorage
    tableOfTaskS = localStorage.setItem('tableOfTaskS', JSON.stringify(tableOfTaskS));
})

function updateTask(update) {
    //input of id hidden
    document.getElementById('id1').style.visibility = 'hidden';
    //get id of update
    var getId = update.children[1].children[1].children[0].children[0].innerHTML;
    //remplir l'input de id
    document.getElementById("id1").value = getId - 1;
    //get the values of tables 
    form1.titre1.value = tableOfTaskS[getId - 1].titre;
    form1.date1.value = tableOfTaskS[getId - 1].date;
    form1.description1.value = tableOfTaskS[getId - 1].description;
    (tableOfTaskS[getId - 1].type == 2) ? document.getElementById('radio2-1').checked = true : document.getElementById('radio1-1').checked = true;
    //condition of priority
    (tableOfTaskS[getId - 1].priority == 1) ? document.getElementById('p1-1').selected = true :
        (tableOfTaskS[getId - 1].priority == 2) ? document.getElementById('p2-1').selected = true :
            (tableOfTaskS[getId - 1].priority == 3) ? document.getElementById('p3-1').selected = true : document.getElementById('p4-1').selected = true;
    //condition of status
    (tableOfTaskS[getId - 1].status == 1) ? document.getElementById('s1-1').selected = true :
        (tableOfTaskS[getId - 1].status == 2) ? document.getElementById('s2-1').selected = true : document.getElementById('s3-1').selected = true;
    document.getElementById("updateTask").addEventListener("click", (e) => {
        //set the values in table =>tabUpdate
        var tabUpdate = {
            titre: form1.titre1.value,
            description: form1.description1.value,
            date: form1.date1.value,
            priority: form1.priority1.value,
            status: form1.status1.value,
            type: document.querySelector('input[name="radio1"]:checked').value
        }
        //update table
        tableOfTaskS.splice(getId - 1, 1, tabUpdate);
        //set tableOfTaskS in localstorage 
        localStorage.setItem('tableOfTaskS', JSON.stringify(tableOfTaskS));
        //close modal of update after click in btn update
        document.getElementById("close").click();
    })
}
//afficher les tasks
affichage();