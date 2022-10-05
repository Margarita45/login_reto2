
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const form1 = document.querySelector(".btnInicio");
const formAdivinanza = document.querySelector(".btnAdivina");



let usuarioBD = "10446";
let contraseñaBD = "64401";
let extraerU = usuarioBD.slice(0, 1);
let extraerC = contraseñaBD.slice(0, 1);


form1.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(usuario.value);
  //console.log(Contraseña.value);

  if (usuario.value !== usuarioBD || contraseña.value !== contraseñaBD) {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o contraseña incorrecta',
    })
    return
  }
  Swal.fire('Realice el capchat')
  mostrarCapchat(extraerU, extraerC);
  // mostrarCapchat();
  // if mostrarCapchat
})
const mostrarCapchat = (extraerU, extraerC) => {
  // Pintar el formulario

  const capchat = document.querySelector(".login2");

  capchat.innerHTML = `
                          <form class="contenedor2" id="contenedor2">
                              <h1 >Validacion del capchat</h1>

                              <div class="form-suma">
                              <div id="sumas"></div>
                              <input type="number" placeholder="Respuesta" id="suma">
                              </div>

                              <button class="btn2" >Guardar</button>
                          </form>
                        `
  // Fin

  sumas.textContent = (`${extraerU}+${extraerC}`);

  const form2 = document.querySelector(".btn2");

  form2.addEventListener("click", function (e) {
    e.preventDefault();

    const suma = document.getElementById("suma").value;
    const resultado = Number(extraerU) + Number(extraerC)
    if (suma != resultado) {
      Swal.fire({
        icon: 'error',
        title: 'Respuesta incorrecta',
      })
      return
    }
    Swal.fire({
      icon: 'success',
      title: 'Sesion iniciada',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      menu();
    }, 2000)


  })

  const menu = () => {

    document.body.innerHTML = "";
    document.body.innerHTML += `
                                    <div class="siguiente">
                                      <h1>Menu</h1>
                                      
                                      <form class="menu">
                                        <input class="btnAdivina opcion" type="submit" id="btnAdivina" value="Adivinanza">
                                        <input class="btnCerrar opcion" type="submit" id="btnCerrar" value="Cerrar sesion">
                                      </form>
                                    </div>

                                    <div class="login3">rr</div>
                                `
    const adivinanza = document.querySelector(".siguiente");
    //console.log(adivinanza);  
    //opcion();
    const jueguito = document.querySelector("#btnAdivina");
    jueguito.addEventListener('click', (e) => {
      e.preventDefault()
      const adivina = document.querySelector(".login3");
      adivinanza1(adivina);
    })

    const cerra = document.querySelector("#btnCerrar");
    cerra.addEventListener('click', (e) => {
      e.preventDefault()
      console.log("click en cerrar sesion");
      window.location.reload();
    })
  }

  // const opcion = (e) => {
  //   const Menu = document.querySelector(".menu")
  //   Menu.addEventListener('submit', function (e) {
  //     e.preventDefault();
  //     let opc = document.querySelectorAll(".opcion").value
  //     console.log(opc)
  //   })

  // }

  const adivinanza1 = (adivina) => {

    console.log(adivina)

    adivina.innerHTML = `
            <div class="contenedorA animate">
            <h1>Adivinanza</h1>
            <h4> El reto consiste en adivinar un numero entre 1 y 10</h4>
            <form class = "validar">
              <!-- USERNAME INPUT -->

              <label for="num">Numero:</label>
              <input type="text" name="numero" id="numero" placeholder="0-10" >
              <input class="btnValidar" type="submit" id= "btnValidar"value="Validar">
              <input class="btnCerrar opcion" type="submit" id="btnCerrar-adiv" value="Cerrar sesion">

            </form>
                          `

    var num = parseInt(Math.floor(Math.random() * 11));
    console.log(num)
    
    let formulario = document.querySelector(".validar");
    formulario.addEventListener("submit", function (e) {
      var intentos = 0;
      e.preventDefault();

      let numero = document.querySelector("#numero").value;
      console.log(numero);
      console.log("dentro")
      
      if (Number(numero) === num) {
        intentos = intentos + 1
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: 'Lo adivinaste en ' + (intentos) + ' intentos',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (Number(numero) < num && Number(numero) > 0) {
        intentos = intentos + 1
        Swal.fire({
          icon: 'error',
          title: 'Incorrecto...',
          text: 'Estas por debajo!',
        })
      } else if (Number(numero) > num && Number(numero) <= 10) {
        intentos = intentos + 1
        Swal.fire({
          icon: 'error',
          title: 'Incorrecto...',
          text: 'Te pasaste!',

        })
      }
    })    
    const cerra = document.querySelector("#btnCerrar-adiv");
    console.log(cerra)
    cerra.addEventListener('click', (e) => {
      e.preventDefault()
      window.location.reload();
    })
  }
}

