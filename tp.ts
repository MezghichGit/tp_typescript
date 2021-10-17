
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
import { Produit, Fournisseur } from "./models";

function getFournisseur(provider: Fournisseur) {
    console.log(provider.nom + " " + provider.email + " " + provider.tel);
}
let myProduit: Produit = new Produit();
myProduit.info();
let myProduit2: Produit = new Produit("PC", 2400);
myProduit2.info();
let myProduit3: Produit = new Produit("PC Portable");
myProduit3.info();
getFournisseur({"nom":"HP","email":"hp@hotmail.com","tel":333333});