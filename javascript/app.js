// JS CODE

// type in to add to list after clicking ADD should show up to the list
// cahnge store or date
// let BtnDateChange = document.getElementById("BtnChange");
// let ChangeInfo = document.getElementById("ChangeInfo");


//date saver to change when you want to get info done
// BtnDateChange.addEventListener("click",()=>{
//     ChangeInfo.value = "";
// })

// TITLE TO ADD ITEMS AND TIME TO LIST
let AddItem = document.getElementById("AddToList");
let AddTime = document.getElementById("TimeToList");
let AddBtn = document.getElementById("Add");
// Display list
let List= document.getElementById("MyList");
AddBtn.addEventListener("click",DisplayList);


//Display funiton to write list
function DisplayList(){
    //.trim() removes extra spaces in the bigging and end of item
    // makes sure that the item is not blank
    let ItemDisplay = AddItem.value.trim()
    let TimeDisplay = AddTime.value.trim()
    // add an input to ask the date
    // let dataChange = ChangeInfo.value.trim();

    if(ItemDisplay !== "" && TimeDisplay !== ""){
        //first add item to display list
        // DISPLAYS
        DisplayTask(ItemDisplay,TimeDisplay)
        //then clear from input so you can add a new item to list
        // CLEARS
        AddItem.value = "";
        AddTime.value = "";
    } else{
        confirm("Need to INPUT something");
    }//end if else tree
}//end funtion 


//Function to Display tasks
//Creating a task
function DisplayTask(text,time){
    //creates "LI" so the task will display to the user
    let LiListDisplay = document.createElement("li");
    LiListDisplay.innerHTML = `
        <button class="MarkDone"> </button>
        <span class="TimeDisplay">${time}</span>
        <span class="TextDisplay">${text}</span>
        <button class="DeleteBtn">X</button>
    `;
        //button to scrach out "circle"
        //displays text  "span"
        //button to remove task from list "deleteBtn"

        /*
    // adding date to the top of list
    let NewDisplay = document.createElement("li");
    NewDisplay.innerHTML = `
        <h5>${info}</h5>
    `;
   */

    //marking as done
    let checkBtn = LiListDisplay.querySelector(".MarkDone");
    checkBtn.addEventListener("click",()=>{
        //marks a line trough the task after clicking the circle
        //maybe a check mark next to it
        LiListDisplay.style.textDecoration = "line-through #A5402D 20%";
        //text align left???
    })
    
    
    /*
    thying to figure out how to get the data to display only once
    if(info !== ""){
        if(text !== "" && time !== ""){
            List.appendChild(LiListDisplay);
            } else{
                List.appendChild(NewDisplay);
        }
        } else {
            List.appendChild(LiListDisplay)
    }
    */
   
   //What actully make the item display
   //with out this nothing happends
    List.appendChild(LiListDisplay)


    
    
    //deleting tasks
    //deletes tesk from the list after clicking the "X"
    let deleteBtn = LiListDisplay.querySelector(".DeleteBtn");
    deleteBtn.addEventListener("click",()=>{
        //removes the element from the list
        //.remove() is a built in used to select and that will be removed from the list
        LiListDisplay.remove();
    });
    //style for the deleting task
    //text align right????
    
}//end function display tast



// make it when you refresh to save info


