const getCurrentYear = () => {
  const d = new Date();
  return d.getFullYear(); // 2022
};

// Función que agrega el año actual en el Footer
const setYearIdentifierSpan = () => {
  const printYearInDOM = document.getElementById("yearIdentifier");
  printYearInDOM.innerText = getCurrentYear();
};

// Arreglo de Redes sociales
const SocialNetworks = [
  { name: "Twitter", url: "/twitter", icon: "" },
  { name: "Facebook", url: "https://www.facebook.com/", icon: "" },
  { name: "Linkedin", url: "/linkedin", icon: "" },
  { name: "Gmail", url: "/gmail", icon: "" },
];

// Que se necita par imprimir estas redes sociales en el Front?
// Necesitamos inyectar nodos HTML en el DOM desde alguna funcionalidad
// 1- Iterar o recorrer los elementos
// 2- Insertar cada iteracion como un elemento HTML
// 3- Renderizar esos elementos en el Front     ->     InnerHTML, appendChild

// Función que ejecuta todo el proceso de creación de red social y
// lo inyecta en el HTML
function setSocialNetworksInHTML() {
  const tagSocialNetworks = document.getElementById("socialNetworks");
  var innerHtmlSocialNetworks = "";
  SocialNetworks.forEach((social) => {
    let socialTemp;
    if (social.name === "Twitter") {
      socialTemp = `<span class="social--burbble" style="background-color: #0EAADC;">${social.name}</span>`;
    } else if (social.name === "Facebook") {
      socialTemp = `<span class="social--burbble" style="background-color: #0E59DC;">${social.name}</span>`;
    } else if (social.name === "Linkedin") {
      socialTemp = `<span class="social--burbble" style="background-color: #2956CF;">${social.name}</span>`;
    } else if (social.name === "Gmail") {
      socialTemp = `<span class="social--burbble" style="background-color: #CF2956;">${social.name}</span>`;
    }

    innerHtmlSocialNetworks = innerHtmlSocialNetworks + socialTemp;
  });
  tagSocialNetworks.innerHTML = innerHtmlSocialNetworks;
}

const ProyectosDesarrollados = [
  {
    name: "Portafolio",
    descripcion: `Aquí encontrarás los proyectos que demuestran mi actual conocimiento en HTML 5, CSS y JavaScript.`,
    imagen: "https://maprecoin.webnode.es/_files/200000287-6ef186febb/Imagen3.jpg",
    url: "https://www.linkedin.com/in/jazmin-guadalupe-reyes-mar%C3%ADn-6313044a/",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "5 días",
  },
  {
    name: "Clon de página de inicio Netflix",
    descripcion: `Login de página de Netflix,, utilizando HTML 5 y CSS.`,
    imagen: "https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "1 días",
  },
  {
    name: "Clon página de Google",
    descripcion: `Clon de página principal de búsqueda de Google.`,
    imagen: "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "3 días",
  },
  {
    name: "Currículum Vitae",
    descripcion: `Bienvenidos al resumen de mi vida.`,
    imagen: "https://www.occ.com.mx/blog/wp-content/uploads/2016/09/hacer-CV-ganador-ejemplo-curriculum-pnatilla-occmundial.png",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "3 días",
  },
];

function setProyectosDesarrollados() {
  let card = "";
  ProyectosDesarrollados.forEach((project) => {
    card = card +
      `<div class="col">
        <div class="card shadow-sm">
          <img src="${project.imagen}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.descripcion}</p>
            <div class="row">
              ${setIcons(project.tecnologias)}
            </div>
          </div>
        </div>
      </div>`
  });
  document.getElementById("projects").innerHTML = card;
}

function setIcons(tecnologias) {
  let iconos = "";
  tecnologias.forEach((tecno) => {
    switch (tecno) {
      case "Html":
        iconos = iconos + `<div class="col-3 text-danger">
                            Html 5 <i class="fa-brands fa-html5"></i>
                          </div>`
        break;
      case "CSS":
        iconos = iconos + `<div class="col-3 text-primary">
                              CSS <i class="fa-brands fa-css3"></i>
                            </div>`
        break;
      case "JS":
        iconos = iconos + `<div class="col-3 text-warning">
                              JS <i class="fa-brands fa-js"></i>
                            </div>`
        break;
      case "Bootstrap":
        iconos = iconos + `<div class="col-3 purple">
                              Bootstrap <i class="fa-brands fa-bootstrap"></i>
                            </div>`
        break;
    }
  });
  return iconos;
}

// Pila de ejecución hasta que el DOM esta completamente cargado
document.addEventListener("DOMContentLoaded", function (e) {
  setYearIdentifierSpan();
  setSocialNetworksInHTML();
  setProyectosDesarrollados();
});
