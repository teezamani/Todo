
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

