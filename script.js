// Información extra de cada tarjeta
const infoTextos = {
  git: "Git fue creado por Linus Torvalds en 2005. Permite trabajar de forma local y sincronizar cambios con un repositorio remoto usando comandos como git add, git commit y git push.",
  github: "GitHub fue fundado en 2008 y adquirido por Microsoft en 2018. Ofrece herramientas como Pull Requests, Issues y Actions para facilitar el trabajo en equipo.",
  ramas: "Con git branch podés crear una nueva rama, y con git checkout cambiarte a ella. Una vez terminado el trabajo, el líder hace git merge para integrar los cambios al main."
};

// Mostrar información al hacer clic en "Ver más"
function mostrarInfo(tema) {
  const seccionInfo = document.getElementById("info-extra");
  const textoInfo = document.getElementById("texto-info");

  textoInfo.textContent = infoTextos[tema];
  seccionInfo.style.display = "block";
}

// Lista de commits iniciales de ejemplo
const commitsIniciales = [
  "Inicio del proyecto",
  "Agrego HTML y CSS del frontend",
  "Agrego lógica en JavaScript",
  "Agrego documentación en README"
];

// Renderizar commits en la lista
function renderizarCommits() {
  const lista = document.getElementById("lista-commits");
  lista.innerHTML = "";
  commitsIniciales.forEach(function(commit) {
    const li = document.createElement("li");
    li.textContent = commit;
    lista.appendChild(li);
  });
}

// Agregar un nuevo commit a la lista
function agregarCommit() {
  const input = document.getElementById("input-commit");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribí una descripción para el commit.");
    return;
  }

  commitsIniciales.push(texto);
  renderizarCommits();
  input.value = "";
}

// Inicializar
renderizarCommits();