function fff(event) {
  event.preventDefault()
  let alert1= document.getElementById("aler")
  let alert2= document.getElementById("aler1")
  let alert3= document.getElementById("aler2")
  let in1 = document.getElementById("inp1").value
  let in2 = document.getElementById("inp2").value
  let in3 = document.getElementById("inp3").value
  let in4 = document.getElementById("inp4").value
  if (in1==="" || in2==="" || in3==="" || in4==="") {
    alert1.classList.remove("d-none")
  }
  else if (in2.indexOf("@")==-1 || in2.indexOf(".")==-1 ) {
    alert2.classList.remove("d-none")
  }
  else{
    alert3.classList.remove("d-none")
  }
}