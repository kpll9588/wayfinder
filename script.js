function switchPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id + '-page').classList.add('active');
}

function login() {
  const name = document.getElementById("riderName").value;
  if (name.trim() === "") return alert("Please enter a name!");
  document.getElementById("userName").innerText = name;
  document.getElementById("profileName").innerText = name;
  document.getElementById("main-header").style.display = "block";
  switchPage("dashboard");
}

function logout() {
  document.getElementById("main-header").style.display = "none";
  switchPage("login");
}

function updateUnit() {
  const dest = document.getElementById("destination").value;
  document.getElementById("target-destination").innerText = "#" + dest;
}

function startNavigation() {
  updateUnit();
  switchPage('map');
}

function contributeRoute() {
  switchPage('contribute');
}

document.addEventListener("DOMContentLoaded", () => {
  switchPage("login");
});

function loadMapView() {
  const selected = document.getElementById("map-choice").value;
  if (selected) {
    document.getElementById("destination").value = selected;
    updateUnit();
    switchPage("map");
  }
}

function setMapDestination(unit) {
  document.getElementById("destination").value = unit;
  updateUnit();
  switchPage('map');
}