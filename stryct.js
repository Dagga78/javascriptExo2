/*
letiable
 */
//1: Créer une constante avec la valeur 2
const num = 2;

//2: Peux-t-on modifier la valeur d’une constante après ?
/*
il est par définition impossible de les modifier ultérieurement apres les avoir déclaré.
 */

//3: Dans quel cas nous pouvons utiliser le mot clé let
/*
L'instruction let permet de déclarer une letiable dont la portée est celle du bloc courant.
 */

//4: Quelle différence avons-nous entre un let et const ?
/*
let permet de faire pareil que const mais sans la contrainte d'assignation unique.
 */

/*
Arrow
 */
//5: Créer une fonction arrow qui prend en paramètre un nombre et retourn ce nombre multiplié
const multiple = (value) => value * 2;
console.log("Exo 5 : " + multiple(2));

//6: Le mot clé return est obligatoire dans une fonction arrow ?
/*
non le mot clé return n'est pas obligatoire.
 */

//7: Créer une fonction arrow qui prend en paramètre un nombre avec une valeur par défaut à 10 et
// retourne ce nombre multiplié
const multiple2 = (a = 10) => a * 2;
console.log("Exo 7 : " + multiple2());

//8: Que veut dire les paramètres Rest et Spread Operator
/*
Le Rest sert à stocker une liste indéfinie de valeur sous forme de tableau.
Le Spread sert à éclater un tableau en une liste définie de valeurs.
 */

//9: Déclarer une fonction qui prends 3 paramètre, le troisième paramètre doit être un paramètre
// Rest.
let multipleParam = (a, b, ...x) => {
    let somme = a + b;
    for (let i in x) {
        somme += x[i];
    }
    return somme;
};
console.log("Exo 9 : " + multipleParam(1, 2, 3, 4, 5));

//10: Maintenant au lieu de passer 1,2, 3, 4 en paramètre de votre fonction, créer un tableau contenant
// les valeurs [1, 2, 3, 4] et passer ces paramètres en mode spread.
const tab = [1, 2, 3, 4];
let multipleParamWithTab = (...x) => {
    let somme = 0;
    for (let i in x) {
        somme += x[i];
    }
    return somme;
};
console.log("Exo 10 : " + multipleParamWithTab(...tab));

//11: Pourquoi il est intéressant d’utiliser les principes en Rest et Spread ?
/*
Il est interressant d'utiliser REST & SPREAD pour pouvoir stocker une liste indéfinie de
données ainsi qu'à décomposer rapidement des tableau cela allege le code
 */

//12: Créer deux letiables qui contiennent les valeurs “hello” et “world”, et maintenant concaténer
// ces valeurs avec le principe des templates String
const str1 = 'Hello';
const str2 = 'World';
console.log("Exo 12 : " + `${str1} ${str2}`);

//13: Créer deux letiables qui contiennent les valeurs “hello” et “world”, et maintenant concaténer
// ces valeurs avec le principe des templates String
const str3 = 'Jouët';
const str4 = 'Jérôme';
console.log("Exo 13 : " + `${str3} ${str4}`);

//14: Si vous ne devez pas utiliser les templates string comment allez-vous concaténer ces valeurs ?
const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}];

let message = "Equipe : " + teamName + "\n";
for (let i in people) {
    message += " Joueur " + i + " : " + people[i].name + "      role : " + people[i].role + " \n"
}
console.log("Exo 14 : " + message);

//15: Maintenant créer plusieurs des templates strings qui doivent retourner les valeurs suivantes
// There are 4 people on the tooling team
// Their name are Jennie, Ronald, Martin, Anneli
// 2 of them have a senior role
const numberOfPlayer = people.length;
let nameOfPlayer = "";
let numberOfSenior = 0;
for (let i in people) {
    nameOfPlayer += people[i].name + ', ';
    if (people[i].role === "senior") {
        numberOfSenior++;
    }
}
console.log("Exo 15 : \n" + `There are ${numberOfPlayer} people on the ${teamName} team \nTheir name are ${nameOfPlayer} \n${numberOfSenior} of them have a senior role \n`);

//16: Créer une letiable a contenant la valeur “hello world”; maintenant créer un objet avec pour nom
// “obj” et passer la letiable a en mode “property shorthand”
let u = "Hello World";
let obj = {a: u};
console.log(obj);

//17: Créer une letiable b contenant la valeur [1, 2, 3]; maintenant créer un objet avec pour nom
// “obj2” et passer la letiable b en mode “property shorthand” dans cette objet
let t = [1, 2, 3];
let obj2 = {b: t};
console.log(obj2);

//18: Maintenant créer un objet “obj3” et passer la deux objets de la question 15 et 16 en mode
// “property shorthand”
let obj3 = {a: u, b: t};
console.log(obj3);

//19: Créer une letiable a contenant la valeur “hello world”; maintenant créer un objet avec pour nom
// “objComputed” et par la suite le contenu de la letiable a doit servir de clé dans objet
// objComputed.
let helloWorld = "Hello World";
let objComputed = {[helloWorld]: "test"};
console.log(objComputed);

//20: Maintenant, ajouter la fonction “maFunction” dans l’objet objComputed, en utilisant le principe
// de Enhanced Object Properties, Method Properties.
let obj4 = {
    foo: "bar",
    ["baz"]: 42,
    objComputed: {
        maFunction() {
            console.log("Ma fonction");
        }
    }
};
obj4.objComputed.maFunction();

//21: Compléter le code ci-dessous afin d’avoir les résultats affichés en commentaire
let ids = {
    next: 0,
    get() {
        return this.next++;
    }
};
console.log(ids.get());
// 0
console.log(ids.get());
// 1

//22: Créer deux letiables a, b contenu dans un tableau en utilisant le principe d’assignement par
// destruction
let list = [1, 2, 3];
let [a, , b] = list;
[b, a] = [a, b];
console.log([a, b]);

//23: Créer deux letiables nom et annee, qui récupèrent les valeurs respectives du film ci-dessus
// utilisant le principe d’assignement par destruction
let film = {
    'nom': "Forrest Gump",
    'Année': 1994,
    'Durée': "2h20min",
    'Réalisateur': "Robert Zemeckis",
    'Like': 100806
};

let {nom, Année} = film;
console.log("nom : " + nom, "Année : " + Année);

//24: Créer une letiable like, qui récupère la valeur Like du film ci-dessus utilisant le principe
// d’assignement par destruction et afficher à l’écran.

let {Like} = film;
console.log("Like : " + Like);


function h({name, val}) {
    console.log(name, val);
}

//25: Pouvez-vous expliquer le code ci-dessus ?
/*
retourne les params de l'objet par le nom de la clé et sa valeurs
 */

//26: Créer une fonction qui prends 1 objet javascript, cette objet est détruit avec la variable a. Par la
// suite, exécuter cette fonction // Ex. maFunction({ a: 1, b: 1});
const maFunction = ({a}) => console.log('a : ', a);
maFunction({a: 1, b: 1});


//27: Créer une fonction qui prends 1 objet javascript, cette objet est détruit avec deux variables a et
// b. Par la suite exécuter cette fonction // Ex. maFunction2({ a: 1, b: 1});
const maFunction2 = ({a, b}) => console.log(a + b);
maFunction({a: 1, b: 1});


//28: Créer une classe vide et exécuter cette classe
class Rectangle {
}

console.log(new Rectangle());

//29: Créer une classe contenant un constructeur qui prend le paramètres a, b, avec une méthode
// affiche.
// a. Maintenant, créer une instance de classe avec deux paramètres
// b. Ensuite exécuter la méthode affiche qui doit retourner la valeur a et b multiplié
class Param {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    affiche() {
        return this.a * this.b;
    }
}

console.log(new Param(2, 2).affiche())


//30: Créer la classe et les méthodes qui doivent retourner cette valeur
class Point {
    constructor(hauteur, largeur) {
        this.hauteur = hauteur;
        this.largeur = largeur;
    }

    plus(Point) {
        return "Point{x: " + this.addition() + ", y: " + Point.addition();
        "}"
    }

    addition() {
        return this.hauteur + this.largeur;
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)));