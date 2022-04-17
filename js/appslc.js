const test = (document.querySelector("body").onload = function () { const pmdd = mostrarficha() });
const estudiantes = [
  {
    nombre: "Fulanito de tal",
    github: "https://github.com/mirepositorio",
    neocites: "miportafolio.neocities.org",
    email: "estudiante@dominio.com",
    telefono: "3125678900",
    foto: "https://blush.design/api/download?shareUri=cK1sApjjMV6Db33n&c=Bottom_0%7E393f82-0.1%7E393f82-0.2%7E393f82_Hair_0%7Ee8e1e1-0.1%7Ee8e1e1-0.2%7E4a312c_Skin_0%7Eb28b67-0.1%7Eb28b67-0.2%7E57331f_Top_0%7Effa434-0.1%7E43d26c-0.2%7E43d26c&w=800&h=800&fm=png",
    actividades: [
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      },
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      },
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      }
    ],
    valoraciones: {
      valhtml: "3%",
      valcss: "4%",
      valjs: "6%",
      valui: "4%",
      valux: "9%"
    },
    calificacion: "54%"
  },
  {
    nombre: "Fulanito de tal",
    github: "https://github.com/mirepositorio",
    neocites: "miportafolio.neocities.org",
    email: "estudiante@dominio.com",
    telefono: "3125678900",
    foto: "https://blush.design/api/download?shareUri=Uz2obBVypgQgWsyE&c=Bottom_0%7E89c5cc_Hair_0%7E2c1b18_Skin_0%7E57331f_Top_0%7Eff4133&w=800&h=800&fm=png",
    actividades: [
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      },
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      },
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      }
    ],
    valoraciones: {
      valhtml: "3%",
      valcss: "4%",
      valjs: "6%",
      valui: "4%",
      valux: "9%"
    },
    calificacion: "54%"
  },
  {
    nombre: "Fulanito de tal",
    github: "https://github.com/mirepositorio",
    neocites: "miportafolio.neocities.org",
    email: "estudiante@dominio.com",
    telefono: "3125678900",
    foto: "https://blush.design/api/download?shareUri=W2IJE_4jDrb2MlQa&c=Bottom_0%7E2b44ff_Hair_0%7Ee8e1e1_Skin_0%7E915b3c_Top_0%7Ef2f2f2&w=800&h=800&fm=png",
    actividades: [
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      },
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      },
      {
        actividad: "actividad",
        estadouiux: "5%",
        estadotecnico: "2%"
      }
    ],
    valoraciones: {
      valhtml: "3%",
      valcss: "4%",
      valjs: "6%",
      valui: "4%",
      valux: "9%"
    },
    calificacion: "54%"
  }
];





function Datos(estudiantes) {
  return `<div class="main">
<div class="Names">
  <div class="Names_name_order">
    <div class="Names_name">
      <h2>${estudiantes.nombre}</h2>
    </div>

    <div class="Names_Enlaces">
      <a class="Names_Enlaces_data" href="#"><i class="fab fa-github"></i> ${estudiantes.github}</a>
      <a class="Names_Enlaces_data" href="#"><i class="fas fa-network-wired"></i> ${estudiantes.neocites}</a>
      <a class="Names_Enlaces_data" href="#"><i class="fas fa-envelope-open-text"></i> ${estudiantes.email}</a>
      <a class="Names_Enlaces_data" href="#"><i class="fab fa-whatsapp"></i> ${estudiantes.telefono}</a>
    </div>
  </div>
  <img class="Names_Imagen_Img" src="${estudiantes.foto}" alt="">

  </div>
  <div class="Activity">
  <table class="tabla">
      <tr>
        <th>Actividades</th>
        <th>% U/UI</th>
        <th>%Dev</th>
      </tr>

  ${estudiantes.actividades.map((actividad, index) => {
    return (
      `<tr>
      <td>`
      +actividad.actividad+' '+(index+1)+ 
      `</td>
      <td>`
      +actividad.estadouiux+
      `</td>
      <td>`
      +actividad.estadotecnico+
      `</td>
      </tr>`
    )
  })
  .join("")}
  </table>
</div>


<div class="Totals">
  <div class="button">
    <span>${estudiantes.valoraciones.valhtml}</span>
    <a href="#">HTML</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valcss}</span>
    <a href="#">CSS</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valjs}</span>
    <a href="#">JS</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valui}</span>
    <a href="#">UI</a>
  </div>
  <div class="button">
    <span>${estudiantes.valoraciones.valux}</span>
    <a href="#">UX</a>
  </div>
  <div class="button">
    <span>${estudiantes.calificacion}</span>
    <a href="#">Total</a>
  </div>
</div>
</div>
<br>`;
}

function mostrarficha() {
  console.log(Datos)
  const p2 = document.getElementById("apps").innerHTML = `${estudiantes.map(Datos).join("")}`;
  return p2
}
const p8 = document.getElementById("apps").innerHTML = `${estudiantes.map(Datos).join("")}`;