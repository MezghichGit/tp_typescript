"use strict";
exports.__esModule = true;
/*console.log("Hello Wolrd!");

var x = "Formation Angular";
console.log(x);*/
/*
function info(){  // déclaration de la méthode
    for(let i = 0; i<5; i++)
    {
        console.log(i);
    }
    console.log("valeur finale:"+i);
}

info();  // appel de la méthode*/
/*let tab:any[] = [12,"formation",true];
let nom:string="amine";
let test :boolean = false;
let val:any;
val = "med";
val = 100;

for(let i:number=0;i<tab.length;i++)
{
    console.log(tab[i]);
}*/
var models_1 = require("./models");
function getFournisseur(provider) {
    console.log(provider.nom + " " + provider.email + " " + provider.tel);
}
var myProduit = new models_1.Produit();
myProduit.info();
var myProduit2 = new models_1.Produit("PC", 2400);
myProduit2.info();
var myProduit3 = new models_1.Produit("PC Portable");
myProduit3.info();
getFournisseur({ "nom": "HP", "email": "hp@hotmail.com", "tel": 333333 });
