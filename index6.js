let btn=document.querySelector(".btn");
let status=document.querySelector("#status")
 let isfriend=0;
btn.addEventListener('click',()=>{
    if(isfriend==0){
     btn.innerHTML="REMOVE FRIEND";
     btn.style.background="black";
     btn.style.color="white";
     status.innerHTML="Friend";
     status.style.color="green"
     isfriend=1;
    }
    else {
        btn.innerHTML="ADD FRIEND";
     btn.style.background="rgb(90, 198, 225)";
     btn.style.color="black";
     status.innerHTML="Stranger";
     status.style.color="red"
     isfriend=0;

    }
   
})

