let icon = document.getElementById("icon");
let logo1 = document.getElementById("logo-header");
let logo2 = document.getElementById("logo-footer");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", 'light');
}

let localData = localStorage.getItem("theme");

if(localData == "light"){
  icon.src = "./Images/moon.png";
  logo1.src = "./Images/TechNews-light-mode.png";
  logo2.src = "./Images/TechNews-light-mode.png";
  document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
  icon.src = "./Images/sun.png";
  logo1.src = "./Images/TechNews-dark-mode.png";
  logo2.src = "./Images/TechNews-dark-mode.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./Images/sun.png";
    logo1.src = "./Images/TechNews-dark-mode.png";
    logo2.src = "./Images/TechNews-dark-mode.png";
    localStorage.setItem("theme", 'dark');
  } else {
    icon.src = "./Images/moon.png";
    logo1.src = "./Images/TechNews-light-mode.png";
    logo2.src = "./Images/TechNews-light-mode.png";
    localStorage.setItem("theme", 'light');
  }
};

function mettreAJourHeure() {
  let maintenant = new Date();
  let heures = maintenant.getHours();
  let minutes = maintenant.getMinutes();
  let secondes = maintenant.getSeconds();

  // Formatage de l'heure pour avoir toujours deux chiffres
  heures = (heures < 10) ? "0" + heures : heures;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  secondes = (secondes < 10) ? "0" + secondes : secondes;

  let heureActuelle = heures + ":" + minutes + ":" + secondes;

  document.getElementById("heure").innerText = heureActuelle;
}

  // Mettre à jour l'heure chaque seconde
  setInterval(mettreAJourHeure, 1000);

  // Appeler la fonction une fois au chargement de la page pour afficher l'heure initiale
  mettreAJourHeure();

let header = document.querySelector(".myHeader");
 
let toggleBtn = document.querySelector(".toggle-btn");
 
toggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
})
