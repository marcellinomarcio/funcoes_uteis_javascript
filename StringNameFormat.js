class StringNameFormat{

    constructor(text){
        this.text = text;
        this.arrayText = StringNameFormat.formatterText(this.text);
        this.text = StringNameFormat.capitalCase(this.arrayText)
    }

    getText(){
        return this.text;
    }

    setText(value){
        value = StringNameFormat.formatterText(value);
        value = StringNameFormat.capitalCase(value);
        this.text = value;
    }

    static capitalCase(arrayText){
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
        return StringNameFormat.capitalCase(text);
    }
}




const texto = new StringNameFormat("    antonio carvalho        de Morais       silva   ");

console.log(texto.getText());
//output: Antonio Carvalho De Morais Silva

console.log(texto.nameAbbreviation());
//output: Antonio C. M. Silva

texto.setText("jose      maria   da silva de      oliveira");
console.log(texto.getText());
//output: Jose Maria Da Silva De Oliveira

console.log(texto.nameAbbreviation());
//output: Jose M. S. Oliveira