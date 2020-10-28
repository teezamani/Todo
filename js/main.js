
//Set the date in a particular format  (Oct 27th , Tuesday 2020 \n 3:00PM)
const date = new Date();
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = months[date.getMonth()];
const today = date.getDate() + "th,";
const day = days[date.getDay()];
const year = date.getFullYear();
const dateformat = `${month} ${today} ${day} ${year}`

document.getElementById("date").innerHTML = dateformat;

//Set time
const timeformat = date.toLocaleTimeString('en-US',  {hour: 'numeric', minute: 'numeric', hour12: true});
document.getElementById("time").innerHTML  = timeformat;


//Adding the input to our Task List
const addListbutton = document.querySelector(".addtolist");
const namelist = document.querySelector(".namelist");
const listInput = document.querySelector(".inputlist");

// Class names to a const 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

//Create  Li and the other values
const addtodo = (todo , id , done , trash)=>{
    if(trash){ return; };

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="todolist">
                    <span class="todocheck"><i class="far ${DONE} job="complete" id="${id}"></i></span>
                    <p class="todotask ${LINE}">${listInput.value}</p>
                    <button class="editbutton"><i class="far fa-edit"></i></button>
                    <button class="deletebutton"><i class="fas fa-trash job="delete" id="${id}"></i></button>
                    <!-- <spa class="createdon"></span> -->
                </li>              
                `;
    const position = "beforeend";
    namelist.insertAdjacentHTML(position, item);            
};

addListbutton.addEventListener("click" ,()=>{
    addtodo();
});

//When user clicks enter
listInput.addEventListener("keypress" , (event)=>{
    // event.preventDefault();
    if(event.keyCode == 13)
     addtodo();
});


