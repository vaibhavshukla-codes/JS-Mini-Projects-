let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
 let item = document.createElement("li");
 let delBtn = document.createElement("button");
 item.innerText = inp.value;
 delBtn.innerText = "delete";
 delBtn.classList.add("delete");
 item.appendChild(delBtn);
 ul.appendChild(item);
 inp.value = "";
});

// Concept: Event Bubbling
ul.addEventListener("click",function(event){
 if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
 }
}); 




// this code doesn't delete newly added tasks.
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//       let par = this.parentElement;// here, 'this' refers to the delBtn's parent element which is li and when li(parent) is deleted then button(li's child) will also be deleted,means both li and button will be deleted.
//       par.remove();
//     });
// }


