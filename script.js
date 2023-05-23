const inputBox = document.getElementById("input-box") ;
const listcontainer = document.getElementById("list-container") ;

function addTask(){
    if(inputBox.value== ''){
        alert("you must write something")
    }
    else{
        let li =document.createElement("li")
        li.innerHTML =inputBox.value; //li is the variable that stores the value
        listcontainer.appendChild(li);// in this line text will be displayed in list-container

        let span=document.createElement("span"); // for the x mark button at the end of the textbox
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""; //for after the click it will erase the content in the  textbox
    savedData(); // it is data saving function and it is called here
}

listcontainer.addEventListener("click",function(e){  //listcontainer is store our all task details
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedData(); // it is data saving function and it is called here
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedData(); // it is data saving function and it is called here
    }   
},false);


//here function store our data ..whwn we refresh the page

function savedData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}


//for displaying the data

function showTask(){
    listcontainer.innerHTML= localStorage.getItem("data");

}
showTask();