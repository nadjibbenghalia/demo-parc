function testerAPI() {
  fetch("/api/ping")
    .then(res => res.json())
    .then(data => {
      document.getElementById("resultat").textContent =
        JSON.stringify(data, null, 2);
    })
    .catch(err => alert("Erreur API"));
}
