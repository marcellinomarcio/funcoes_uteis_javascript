"use strict";

/**
 * @example
 * addEventListenerAll("click,mouseover,mouseleave,dblclick", document.getElementById("teste"), funcao)
 * @param {Events} Obrigatório Os eventos devem ser passados em uma única string separado por vírgulas
 * @param {Element} Obrigatório Selecione o elemento que sofrerá os eventos, pode ser o Id do elemento
 * @param {function} Obrigatório Pode passar uma ArrowFunction ou uma outra função externa
 * @returns {void} Não retorna nada
 */
function addEventListenerAll(eventos, elemento, funcao){
    eventos.split(",").forEach(evento => {
        elemento.addEventListener(evento, funcao);
    });
}

// Exemplo
// addEventListenerAll("click,mouseover,mouseleave,dblclick", document.querySelector("body"), (e)=>{
//     console.log(e.type);
// });

/**
 * @example
 * @param {String} Obrigatório Uma string pode conter espaços
 * @returns {String} Retorna uma string reformata com a primeira letra maiúscula de cada palavra
 */

function maiusculaCadaPalavra(texto){
    texto = texto.trim().split(" ").filter((elemento)=>{return elemento.length > 0}).join(" ");
    let textoModificado = "";
    for(let c = 0; c<texto.length; c++){
        if(c == 0 || texto[c] == " "){
            if(c == 0){
                textoModificado += texto[c].toUpperCase();
            }else{
                c += 1;
                textoModificado += ` ${texto[c].toUpperCase()}`;
            }
        }else{
            textoModificado += texto[c].toLowerCase();
        }
    }
return textoModificado;
}

console.log(maiusculaCadaPalavra("marcElino     marcio de      oliveira"))
