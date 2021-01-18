import Citation from './Citation.js'; //Importation de la class Citation

export default 
class Generateur{
    constructor(div, citation, css,){
        this._div = div,
        this._citation = citation,
        this._css = css
    }
    essentiel(conteneur){
        let btn = document.getElementById('btn');
        this.conteneur = document.getElementById('conteneur1');}

    createDiv(){
        let div = document.createElement('div');
        //$('div').addClass('space');
        let para = document.createElement('p');
        //if (btn.checked) {
    //        conteneur.appendChild(div)
        //}
       // else if(btn2.checked) {conteneur2.appendChild(div)}
        div.appendChild(para)//.style.color = 'blue';
        //test para.innerHTML = phrase;
        let phrase = "bonjour"
        para.innerHTML = phrase;

    }
    }