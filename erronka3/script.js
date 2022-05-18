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

function TextAreaErakutsi() {

}

function ASCII63() {
  document.getElementById("hihi").style.display = "inline";
  var audio = new Audio("erronka1/MULTIMEDIA/augh.mp3");
  audio.play();
}

let datuak = [];

function gorde() {
  
  let balorazioa = "";
  let sexo = "";
    let data = document.getElementById("date").value;
    let izena = document.getElementById("name").value;
    let izena2 = document.getElementById("name2").value;
    let emaila = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    if (document.getElementsByName('galdera').checked) {
       sexo = document.querySelector('input[name="galdera"]:checked').value;
    }else{
       sexo = "EZ"
    }
   
    let helbidea = document.getElementById("helbidea").value;
    let helbidea2 = document.getElementById("helbidea2").value;
    let helbidea3 = document.getElementById("helbidea3").value;
    let paisuwu = document.getElementById("aa").options[document.getElementById("aa").selectedIndex].text;
    let gaixotasun = document.getElementById("gaixo").value;
    let textarea = document.getElementById("komentarioa").value;
    let cv = "EZ";
    if (document.getElementsByName('stars').checked) {
      balorazioa = document.querySelector('input[name="stars"]:checked').value;
    }else{
    balorazioa ="EZ"}
  
    if (document.getElementById("CV").value != "") {
      cv = "BAI";
    }

    if (document.getElementById("name").value == "") {
      izena = "EZ";
    }
  
    if (document.getElementById("name2").value == "") {
      izena2 = "EZ";
    }
  
    if (document.getElementById("email").value == "") {
      emaila = "EZ";
    }

    if (document.getElementById("phone").value == "") {
      telefono = "EZ";
    }

    if (document.getElementById("helbidea").value == "") {
      helbidea = "EZ";
    }

    if (document.getElementById("helbidea2").value == "") {
      helbidea2 = "EZ";
    }

    if (document.getElementById("helbidea3").value == "") {
      helbidea3 = "EZ";
    }  
  
    if (document.getElementById("gaixo").value == "") {
      gaixotasun = "EZ";
    }
  
    if (document.getElementById("komentarioa").value == "") {
      textarea = "EZ";
    }
  
    
  
  
  
    let ob1 = {
      data: data,
      izena: izena,
      izena2: izena2,
      emaila: emaila,
      telefono: telefono,
      sexo: sexo,
      helbidea: helbidea,
      helbidea2: helbidea2,
      helbidea3: helbidea3,
      paisuwu: paisuwu,
      gaixotasun: gaixotasun,
      textarea: textarea,
      cv: cv,
      balorazioa: balorazioa,
    }
  
    datuak.push(ob1);
  
    // Textareako datuen goiburua idatzi
  
    document.getElementById("tiketa").value = "Data\tIzena\tAbizena\tEmaila\tTelefonoa\tSexua\tHelbidea\tHerrialdea\tGaixotasunak\tKomentarioak\tCurriculum\tBalorazioa";
  
    document.getElementById("tiketa").value += ob1.data + "\t" + "\t" + ob1.izena + "\t" + "\t" + ob1.izena2 + "\t" + "\t" + ob1.emaila + "\t" + "\t" + ob1.telefono + "\t" + "\t" + ob1.sexo + "\t" + "\t" + ob1.helbidea2 + "\t" + "\t" + ob1.helbidea3 + "\t" + "\t" + ob1.paisuwu + "\t" + "\t" + ob1.gaixotasun + "\t" + "\t" + ob1.textarea + "\t" + "\t" + ob1.cv + "\t" + "\t" + ob1.balorazioa;
  
  }

 


