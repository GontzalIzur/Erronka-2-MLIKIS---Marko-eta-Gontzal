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

function ASCII63() {
  document.getElementById("hihi").style.display = "inline";
  var audio = new Audio("MULTIMEDIA/augh.mp3");
  audio.play();
}

let datuak = [];

function gordeF1() {

  let balorazioa = "";
  let sexo = "";
  let data = document.getElementById("date").value;
  let izena = document.getElementById("name").value;
  let izena2 = document.getElementById("name2").value;
  let emaila = document.getElementById("email").value;
  let telefono = document.getElementById("phone").value;
  if (document.getElementById('radio_1').checked) {
    sexo = document.getElementById('radio_1').value;
  } else if(document.getElementById('radio_2').checked) {
    sexo = document.getElementById('radio_2').value;
  } else if(document.getElementById('radio_3').checked) {
    sexo = document.getElementById('radio_3').value;
  } else{
sexo= "EZ"
  }

  let helbidea = document.getElementById("helbidea").value;
  let helbidea2 = document.getElementById("helbidea2").value;
  let helbidea3 = document.getElementById("helbidea3").value;
  let paisuwu = document.getElementById("aa").options[document.getElementById("aa").selectedIndex].text;
  let gaixotasun = document.getElementById("gaixo").value;
  let textarea = document.getElementById("komentarioa").value;
  let cv = "EZ";
  if (document.getElementById('stars1').checked) {
    balorazioa = document.getElementById('stars1').value;
  } else if(document.getElementById('stars2').checked) {
    balorazioa = document.getElementById('stars2').value;
  } else if(document.getElementById('stars3').checked) {
    balorazioa = document.getElementById('stars3').value;
  }   else if(document.getElementById('stars4').checked) {
    balorazioa = document.getElementById('stars4').value;
  }  else if(document.getElementById('stars5').checked) {
    balorazioa = document.getElementById('stars5').value;
  } else{
    balorazioa= "EZ"
  }

  if (document.getElementById("CV").value != "") {
    cv = "BAI";
  }

  if (document.getElementById("date").value == "") {
    data = "EZ";
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

  document.getElementById("tiketa").value = "Data:" + "\t"+ob1.data + "\nIzena:" + "\t"+ob1.izena + "\nAbizena:" + "\t"+ob1.izena2 + "\nEmaila:" + "\t"+ob1.emaila + "\nTelefonoa:" + "\t"+ob1.telefono + "\nSexua:" + "\t"+ob1.sexo + "\nHelbidea:" + "\t"+ob1.izena + "\t"+ob1.helbidea2+ "\t"+ob1.helbidea3+ "\nHerrialdea:" + "\t"+ob1.paisuwu + "\nGaixotasunik:" + "\t"+ob1.gaixotasun + "\nKomentariorik:" + "\t"+ob1.textarea + "\nCV:" + "\t"+ob1.cv + "\nBalorazioa:" + "\t"+ob1.balorazioa;

 

}

function gordeF2() {

  let balorazioa = "";
  let sexo = "";
  let data = document.getElementById("date").value;
  let izena = document.getElementById("name").value;
  let izena2 = document.getElementById("name2").value;
  let emaila = document.getElementById("email").value;
  let telefono = document.getElementById("phone").value;
  if (document.getElementById('radio_1').checked) {
    sexo = document.getElementById('radio_1').value;
  } else if(document.getElementById('radio_2').checked) {
    sexo = document.getElementById('radio_2').value;
  } else if(document.getElementById('radio_3').checked) {
    sexo = document.getElementById('radio_3').value;
  } else{
sexo= "EZ"
  }

  let helbidea = document.getElementById("helbidea").value;
  let helbidea2 = document.getElementById("helbidea2").value;
  let helbidea3 = document.getElementById("helbidea3").value;
  let paisuwu = document.getElementById("aa").options[document.getElementById("aa").selectedIndex].text;
  let gaixotasun = document.getElementById("gaixo").value;
  let makina1 = document.getElementById("bb").options[document.getElementById("bb").selectedIndex].text;
  let makina2 = document.getElementById("cc").options[document.getElementById("cc").selectedIndex].text;
  let makina3 = document.getElementById("dd").options[document.getElementById("dd").selectedIndex].text;
  let makina4 = document.getElementById("ff").options[document.getElementById("ff").selectedIndex].text;
  let textarea = document.getElementById("komentarioa").value;
  let kantitatea = document.getElementById("kantitatea").value;
 
  if (document.getElementById('stars1').checked) {
    balorazioa = document.getElementById('stars1').value;
  } else if(document.getElementById('stars2').checked) {
    balorazioa = document.getElementById('stars2').value;
  } else if(document.getElementById('stars3').checked) {
    balorazioa = document.getElementById('stars3').value;
  }   else if(document.getElementById('stars4').checked) {
    balorazioa = document.getElementById('stars4').value;
  }  else if(document.getElementById('stars5').checked) {
    balorazioa = document.getElementById('stars5').value;
  } else{
    balorazioa= "EZ"
  }

  if (document.getElementById("date").value == "") {
    data = "EZ";
  }

  if (document.getElementById("kantitatea").value == "") {
    kantitatea = "EZ";
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

  if (document.getElementById("komentarioa").value == "") {
    textarea = "EZ";
  }

  if (document.getElementById("gaixo").value == "") {
    gaixotasun = "EZ";
  }
  if (document.getElementById("date").value == "") {
    data = "EZ";
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
    makina1: makina1,
    makina2: makina2,
    makina3: makina3,
    makina4: makina4,
    textarea: textarea,
    kantitatea: kantitatea,
    balorazioa: balorazioa,
  }

  datuak.push(ob1);

  // Textareako datuen goiburua idatzi
  document.getElementById("tiketa2").value = "Data:" + "\t"+ob1.data + "\nIzena:" + "\t"+ob1.izena + "\nAbizena:" + "\t"+ob1.izena2 + "\nEmaila:" + "\t"+ob1.emaila + "\nTelefonoa:" + "\t"+ob1.telefono + "\nSexua:" + "\t"+ob1.sexo + "\nHelbidea:" + "\t"+ob1.izena + "\t"+ob1.helbidea2+ "\t"+ob1.helbidea3+ "\nHerrialdea:" + "\t"+ob1.paisuwu + "\nHerrialdea:" + "\t"+ob1.paisuwu + "\nGaixotasunik:" + "\t"+ob1.gaixotasun+ "\nManika 1:" + "\t"+ob1.makina1 + "\nMakina 2:" + "\t"+ob1.makina2 + "\nMakina 3:" + "\t"+ob1.makina3 + "\nMakina4:" + "\t"+ob1.makina4 + "\nKomentariorik:" + "\t"+ob1.textarea + "\nKantitatea:" + "\t"+ob1.kantitatea + "\nBalorazioa:" + "\t"+ob1.balorazioa;

}

function gordeF3() {

  let balorazioa = "";
  let sexo = "";
  let data = document.getElementById("date").value;
  let izena = document.getElementById("name").value;
  let izena2 = document.getElementById("name2").value;
  let emaila = document.getElementById("email").value;
  let telefono = document.getElementById("phone").value;
  if (document.getElementById('radio_1').checked) {
    sexo = document.getElementById('radio_1').value;
  } else if(document.getElementById('radio_2').checked) {
    sexo = document.getElementById('radio_2').value;
  } else if(document.getElementById('radio_3').checked) {
    sexo = document.getElementById('radio_3').value;
  } else{
sexo= "EZ"
  }

  let helbidea = document.getElementById("helbidea").value;
  let helbidea2 = document.getElementById("helbidea2").value;
  let helbidea3 = document.getElementById("helbidea3").value;
  let paisuwu = document.getElementById("aa").options[document.getElementById("aa").selectedIndex].text;
  let gaixotasun = document.getElementById("gaixo").value;
  let textarea = document.getElementById("komentarioa").value;
  let arazoa = document.getElementById("arazo").options[document.getElementById("arazo").selectedIndex].text;
  let textarea2 = document.getElementById("komentarioa2").value;
  if (document.getElementById('stars1').checked) {
    balorazioa = document.getElementById('stars1').value;
  } else if(document.getElementById('stars2').checked) {
    balorazioa = document.getElementById('stars2').value;
  } else if(document.getElementById('stars3').checked) {
    balorazioa = document.getElementById('stars3').value;
  }   else if(document.getElementById('stars4').checked) {
    balorazioa = document.getElementById('stars4').value;
  }  else if(document.getElementById('stars5').checked) {
    balorazioa = document.getElementById('stars5').value;
  } else{
    balorazioa= "EZ"
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
    kantitatea = "0";
  }

  if (document.getElementById("komentarioa").value == "") {
    textarea = "EZ";
  }

  if (document.getElementById("komentarioa2").value == "") {
    textarea2 = "EZ";
  }
  if (document.getElementById("date").value == "") {
    data = "EZ";
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
    arazoa: arazoa,
    textarea2: textarea2,
    balorazioa: balorazioa,
  }

  datuak.push(ob1);

  // Textareako datuen goiburua idatzi
  document.getElementById("tiketa3").value = "Data" + "\t"+ob1.data + "\nIzena:" + "\t"+ob1.izena + "\nAbizena:" + "\t"+ob1.izena2 + "\nEmaila:" + "\t"+ob1.emaila + "\nTelefonoa:" + "\t"+ob1.telefono + "\nSexua:" + "\t"+ob1.sexo + "\nHelbidea:" + "\t"+ob1.izena + "\t"+ob1.helbidea2+ "\t"+ob1.helbidea3+ "\nHerrialdea:" + "\t"+ob1.paisuwu + "\nHerrialdea:" + "\t"+ob1.paisuwu + "\nGaixotasunik:" + "\t"+ob1.gaixotasun+  "\nKomentariorik:" + "\t"+ob1.textarea + "\nArazoa:" + "\t"+ob1.arazoa + "\nAzalpena:" + "\t"+ob1.textarea2 + "\nBalorazioa:" + "\t"+ob1.balorazioa;

}




function gordeF4() {

  let textarea = document.getElementById("komentarioa5").value;
  let balorazioa = "";
  let helmuga =   document.getElementById("Jatorria").value; 
  let jatorria = document.getElementById("Helmuga").value; 
  let data = document.getElementById("date2").value;

  if (document.getElementById('stars1').checked) {
    balorazioa = document.getElementById('stars1').value;
  } else if(document.getElementById('stars2').checked) {
    balorazioa = document.getElementById('stars2').value;
  } else if(document.getElementById('stars3').checked) {
    balorazioa = document.getElementById('stars3').value;
  }   else if(document.getElementById('stars4').checked) {
    balorazioa = document.getElementById('stars4').value;
  }  else if(document.getElementById('stars5').checked) {
    balorazioa = document.getElementById('stars5').value;
  } else{
    balorazioa= "EZ"
  }

 
  if (document.getElementById("date2").value == "") {
    data = "EZ";
  }

  if (document.getElementById("Jatorria").value == "") {
    jatorria = "EZ";
  }

   if (document.getElementById("Helmuga").value == "") {
    helmuga = "EZ";
  }

  if (document.getElementById("komentarioa5").value == "") {
    textarea = "EZ";
  }

  let ob1 = {
    jatorria: jatorria,
    helmuga: helmuga,
    data: data,
    textarea: textarea,
    balorazioa: balorazioa,
  }

  datuak.push(ob1);

  // Textareako datuen goiburua idatzi
  document.getElementById("tiketa4").value = "Jatorria:" + "\t"+ob1.jatorria + "\nHelmuga:" + "\t"+ ob1.helmuga +"\nData:" +  "\t"+ob1.data + "\nKomentariorik:" +"\t"+ob1.textarea+ "\nBalorazioa:" + "\t"+ob1.balorazioa;

}

