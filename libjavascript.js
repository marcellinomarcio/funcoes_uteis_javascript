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

class StringNameFormat{

    constructor(text){
        this.text = text;
        this.arrayText = StringNameFormat.formatterText(this.text);
        this.text = StringNameFormat.firstLetter(this.arrayText)
    }

    getText(){
        return this.text;
    }

    setText(value){
        value = StringNameFormat.formatterText(value);
        value = StringNameFormat.firstLetter(value);
        this.text = value;
    }

    static firstLetter(arrayText){
        arrayText = arrayText.map(txt => txt = txt.charAt(0).toUpperCase()+txt.slice(1));
        return arrayText.toString().replace(/,/g, " ");;
    }

    static formatterText(text){
        text = String(`${text}`)
        text = text.trim().toLowerCase();
        let arrayText = text.split(" ").filter(txt => txt !== "");
        return arrayText;
    }

    nameAbbreviation(){
        let text = this.getText().split(" ");
        text = text.filter(txt => txt.length > 2);

        text.forEach((element, index) => {
            if(index != 0 && index != (text.length - 1)){
                text[index] = element.charAt(0)+"."
            }
        });
        return StringNameFormat.firstLetter(text);
    }
}

