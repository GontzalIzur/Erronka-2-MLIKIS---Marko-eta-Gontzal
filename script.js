function formularioaErakutsi() {
  let a = document.getElementById("formu").value;
  console.log(a);
  if (a == "Lan") {
    document.getElementById("divfirst").style.display = "flex";
    document.getElementById("divsecond").style.display = "none";
    document.getElementById("divthird").style.display = "none";
    document.getElementById("divfourth").style.display = "none";
  } else if (a == "Erosi") {
    document.getElementById("divsecond").style.display = "flex";
    document.getElementById("divfirst").style.display = "none";
    document.getElementById("divthird").style.display = "none";
    document.getElementById("divfourth").style.display = "none";
  } else if (a == "Matxura") {
    document.getElementById("divthird").style.display = "flex";
    document.getElementById("divsecond").style.display = "none";
    document.getElementById("divfirst").style.display = "none";
    document.getElementById("divfourth").style.display = "none";
  } else if (a == "Ordutegiak") {
    document.getElementById("divfourth").style.display = "flex";
    document.getElementById("divsecond").style.display = "none";
    document.getElementById("divfirst").style.display = "none";
    document.getElementById("divthird").style.display = "none";
  }
}

function TextAreaErakutsi(){
       
}

function ASCII63() {
  document.getElementById("hihi").style.display = "inline";
  var audio = new Audio("erronka1/MULTIMEDIA/augh.mp3");
  audio.play();
}
