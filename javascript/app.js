// JS CODE

// type in to add to list after clicking ADD should show up to the list
// TITLE TO ADD ITEMS TO LIST
let AddItem = document.getElementById("AddToList");
let AddBtn = document.getElementById("Add");
AddBtn.addEventListener("click",()=>{
    //first add item to display list
    // DISPLAYS
    DisplayTask();
    //then clear from input so you can add a new item to list
    // CLEARS
    AddItem.value = "";
})



// dispaly funtion ????
//DISPLAY ????????
let displayList = [
    {
        checkMark :"",
        // == AddItem.value = ItemOnList
        ItemOnList: "",
        Xmark: ""
    }
]


//funtions
// Display tasks
function DisplayTask(){
    //object displayList
    //figure out how to get it to work
    //.push to keep adding 

}//end function display tast


