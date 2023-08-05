


// we select the element image 
let item=document.querySelector(".item");

// console.log(item);

// add event to image when it is dragstart
item.addEventListener("dragstart", dragstart);

function dragstart(e){

    // console.log("drag started...........");

    // now transfer the data ,here  image through dataTransfer and get the id
    e.dataTransfer.setData("text/plain",e.target.id);

    // add settimeout event with 0s when image is dragging  then  hide the image at current place

    setTimeout( function (){

        // add class hide to image when image is dragging 

        e.target.classList.add("hide");


    },0)



}

// add event to image when it is dragEnd
item.addEventListener("dragend", dragEnd);

function dragEnd(e){

    e.target.classList.remove("hide")


}


// we selected the all box

let boxs=document.querySelectorAll(".box");

// console.log(boxs);

// to iterate the box with forEach added evenst to   boxs 

boxs.forEach((box) => {


    // dragEnter event
    box.addEventListener("dragenter", dragEnter);

    // dragover event
    box.addEventListener("dragover", dragOver);

    // dragleave event
    box.addEventListener("dragleave", dragLeave);

    // drop event
    box.addEventListener("drop", drop);




})


function dragEnter(e){

    // console.log("entered............");

    // when image enter into box highlet the border so add class to box
    e.target.classList.add("drag-over");

    // it will help's  user to drop image with indicate arrow with + sign
    e.preventDefault();
}

function dragOver(e){

    // console.log("overed........");

    // when image leave into box highlet the border so add class to box 
    e.target.classList.add("drag-over");

    
    // it will help's  user to drop image with indicate arrow with + sign
    e.preventDefault();
}

function dragLeave(e){

    // console.log("leaved............");

    // when image leave the box  so remove the class  to box 
    e.target.classList.remove("drag-over");
}

function drop(e){


    // console.log("droped..........");

    // when image leave the box  so remove the class  to box 
    e.target.classList.remove("drag-over");


    // take the const id then store in it through dataTransfer.setData();

    const id=e.dataTransfer.getData("text");

    // by default it in is string so selected the element with id

    const draggable=document.getElementById(id);

    e.target.appendChild(draggable);

    draggable.classList.remove("hide");


}

