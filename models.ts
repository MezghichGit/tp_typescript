export class Produit{
    //public libelle : string;
    //public prix : number;


    constructor(private libelle?:string, private prix?:number){
        console.log("Création d'un nouveau produit");
        //this.libelle = libelle;
        //this.prix = prix;
    }

    public info(){
        console.log(this.libelle + " "+this.prix)
    }
}

export interface Fournisseur{
    "nom":string,
    "email":string,
    "tel":number
}