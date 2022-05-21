var product = JSON.parse(localStorage.getItem("Products")) || []
document.getElementById("counter").innerText = `Total Product : ${product.length}`
product.forEach(function(ele,index){
 
   let parent = document.createElement("div")
  parent.className = "product"

   let img = document.createElement("img")
   img.id = "image"
   img.setAttribute("src",ele.image)
   
   let btn = document.createElement("button")
   btn.id ="remove"
   btn.innerText ="Remove"
   btn.addEventListener("click", function(){
      remove(ele,index)
   })
   let btn1 = document.createElement("button")
   btn1.id = "sold"
   
   btn1.innerText = "Sold"
     
   if(ele.sold==="True"){
      btn1.style.backgroundColor = "green"
       btn1.style.color="white"
       btn.style
      
    }
    else{
      
       btn1.style.backgroundColor = "red"
       btn1.style.color="white"
    }
    btn1.addEventListener("click",function(){
      sold(btn1,ele)
   })
   
   parent.append(img,btn,btn1)
   document.getElementById("container").append(parent)
   
})


function remove(ele,index){
   product.splice(index,1)
   localStorage.setItem("Products",JSON.stringify(product))
   window.location.reload();
}



function sold(btn1,ele){
  if(btn1.value=="True"){
     btn1.style.backgroundColor = "green"
  }
  else{
     btn1.style.backgroundColor = "red"
  }
   
}