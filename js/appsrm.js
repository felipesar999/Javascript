(async function () {
  fetch("../data/estudiantes.json")
    .then(res => res.json())
    .then(data => {
      const p8 = document.getElementById("apps").innerHTML = data.estudiantes.map(Datos).join("");
    })

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
      <th>% UX/UI</th>
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
    }).join("")}
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


  
})()

