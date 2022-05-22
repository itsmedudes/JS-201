let form = document.getElementById("first")
form.addEventListener("submit", hello)
let arr = JSON.parse(localStorage.getItem("cars")) ||[]
function hello(){
   event.preventDefault();
   let name = first.cname.value;
   let max  = first.cmax.value;
   let type = first.type.value;

   let p = new Constructorfun(name,max,type)
   arr.push(p)
   
  localStorage.setItem("cars",JSON.stringify(arr))
}



function Constructorfun(name,max,type){
   
  this.name = name;
  this.speed = max;
  this.type = type;
   
}

// inheritance

document.getElementById("two").addEventListener("submit",secondfun)
 


var arr1 = JSON.parse(localStorage.getItem("inhcar")) || []
function secondfun(){
   event.preventDefault();
  
  
   // let name = two.iname.value;
   // let speed =two.imax.value;
   // let type = two.itype.value;
   // let obj ={}

      


   var x = Object.create({})
   x.name = two.iname.value;
   x.speed = two.imax.value;
   x.type = two.itype.value;
   arr1.push(x)
   localStorage.setItem("inhcar",JSON.stringify(arr1))
  
}




