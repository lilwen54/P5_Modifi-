let tableau1 = {
    salutation:["Bonjour","Hello","Salut","Hey","Coucou"],
    adjectif:[", petit chenapant",", grand dadet",", cher ami",", bel individu",", incroyable personne"],
    verbe:[", tu remarqueras que",", tu noteras que",", tu devineras que",", tu verras que",", tu t\n'appercevras que"],
    temps:[", la vie est belle",", la nuit est somptieuse",", l'aube est clairvoyante",", le soleil est éclatant",", la lune brille"],
    plus:[", vu d'ici",", tel quel",", comme toujours",", comme d'habitude","bien souvent"]
}

let tableau2 = {
    animal:["Le chat","Le chien","L'Ours","Le lion","Le tigre"],
    info:[", est un animal",", est un mamiphère",", à des crocs",", possede un pelage",", a un odorat"],
    interet:[", vraiment intéréssant",", remarquable",", incroyable",", somptieux",", innoubliable"]
}

let generatorOne = new Generateur(tableau1.salutation, tableau1.adjectif, tableau1.temps);
let generatorTwo = new Generateur(tableau2.animal, tableau2.info, tableau2.interet)
let choice = new Choice(generatorOne, generatorTwo)