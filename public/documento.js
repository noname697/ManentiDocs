import { emitirTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.querySelector("#editor-texto");

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

export { atualizaTextoEditor };
