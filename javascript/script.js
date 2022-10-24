/*Botão codifica decodifica*/
const radiobtn = document.querySelector(".radio-cod-decod")
const codificar = document.querySelector("#codificar")
const btn = document.querySelector("button")
const decodificar = document.querySelector("#decodificar")
const seleciona = document.querySelector(".seleciona")

radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerText = "Codificar Mensagem!"
  } else if (decodificar.checked) {
    btn.innerText = "Decodificar Mensagem!"
  }
})

/**/

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (seleciona.value === "base64") {
    resultado.innerText = base64()
  } else if (seleciona.value === "cifra") {
    resultado.innerText = cifraCesar()
  }
})


/*botão chave da Cifra de César */
const incremento = document.querySelector(".chave-de-cesar")

seleciona.addEventListener("click", function () {
  if (seleciona.value == "cifra") {
    incremento.style.display = "block"
  } else {
    incremento.style.display = "none"
  }
})




/*Base 64*/

function base64() {
  let mensagem = document.querySelector("#mensagem").value
  const codificar = document.querySelector("#codificar")

  if (codificar.checked) {
    let codificado = btoa(mensagem)
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = atob(mensagem)
    return decodificado
  }
}

/*Cifra de César*/

function cifraCesar() {
  const codificar = document.querySelector("#codificar")
  const decodificar = document.querySelector("#decodificar")
  
  let msg = document.querySelector("#mensagem").value
  let chave = parseInt(document.querySelector("#rangenumber").value)
  let saida = ''
  
  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65) 
      } else {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97)
      }
    }
    return saida;

  } else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97)
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65)
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida
  }
}

