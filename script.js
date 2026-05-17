let btn=document.getElementById("ordbtn");
function placingOrder(callback){
    alert("Your order has been placed successfully!");
    document.getElementsByClassName("fa-check")[0].style.backgroundColor="green";
    setTimeout(()=>{
    console.log("Order placed successfully!");
    callback();
    },2000)
    
    
}
function preparing(callback){
 setTimeout(()=>{
     document.getElementsByClassName("fa-fire-burner")[0].style.backgroundColor="orange";

    console.log("Order is being prepared!");
    callback();
 },2000);
   

}
function serving(callback){
    setTimeout(()=>{
        document.getElementsByClassName("fa-bell-concierge")[0].style.backgroundColor="blue";
             
    console.log("Order is being served!");
    callback(); 
    },2000);
}
function billing(callback){
    setTimeout(()=>{
        document.getElementsByClassName("fa-receipt")[0].style.backgroundColor="purple";
        console.log("Processing billing...");
    callback();
    },2000);
    
}
function completed(){
    setTimeout(()=>{
     document.getElementsByClassName("fa-face-smile ")[0].style.backgroundColor="yellow";
     document.getElementById("statusp").innerText="Order Completed!";
    alert("Order completed! Thank you having your Tea with us!");
    },2000);
}
btn.addEventListener("click",()=>
    placingOrder(()=>{
        preparing(()=>{
            serving(()=>{
                billing(()=>{
                    completed();
                })
            })          
        })
}));
