import React from "react";
import Card from "./Card"

export class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [],
      total: 0,
      totalTVA:0,
      totalEcoTax:0,
      totalTTC:0,
   };

  }
 
  handleSelect =(name,price)=>{
   
      const panier = {
        nom: name,
        prix: price,
        quantite:1
      }
      let isHere=0
      let indice=0
        const newPanier=this.state.basket
        for(let j=0;j<newPanier.length;j++){
          if(name===newPanier[j].nom)
          {
            console.log("nom existe"); 
            j=newPanier[j].length+1;
            let longueur=newPanier.length
            isHere=1
            indice=j-1
            j=longueur++
          }
         }
         if (isHere===0){
        panier.quantite=1
        newPanier.push(panier)
        this.setState({basket:newPanier})
        console.log( "nom pushé", newPanier[0].nom)
        console.log( "quantite dansbasket ", newPanier[0].quantite)
       // console.log("basket",this.state.basket)
         }else{
          panier.quantite++
          // let m=panier.quantite++
          // newPanier[{quantite:panier.quantite}]
          console.log("panier.quantite",panier.quantite)
          console.log("new pan.quantite",newPanier.quantite)
          this.setState({basket:newPanier})
          console.log( "nom cliqué", newPanier[0].nom)
         console.log( "quantite dans basket ", newPanier[0].quantite)
         }
let listItem=this.props.items


 




      // if(!newObj.length){
      //   newObj.map(article=>({
      //     if(article.nom===name) quantity++;
      //     else{
      //       newObj.push(obj)
      //       this.setState({basket:newObj})
      //       console.log("q===",this.state.basket)
      //     }
      //   }
      //   ))
      // }
      // if(this.state.basket.length!==0 && this.state.basket.name)
      //console.log("this.state.basket[0]=",this.state.basket[0])
      // console.log("obj=",obj)
      // obj.map(article => ({
      //     if(article.nom===name){

      //     }else{

      //     }
      //    } ))
      //  const newItems = this.state.basket;
    
       
      //  newItems.push(basket)
    //   this.setState({
    //     basket: newItems
    //   })
    // //   console.log(this.state.items)
    //    console.log("this.state.basket[name]",this.state.basket)

//  const nom=[name];
//     const newName=this.state.nom;
//     newName.push(name)
//     this.setState({nom:newName})
//     const prix =  [price]  
//     const newPrix = this.state.basket;
//      newPrix.push(prix)
//      this.setState({
//       basket: newPrix
//     })
     
    // let totalEco=0
    // let somme=0
  
    //  for(let i=0;i<this.state.basket.length;i++)          
    //  {
    //     somme=somme+parseInt(this.state.basket[i])
    //     totalEco=somme+(this.state.basket.length+1)*0.03
    //    }      

    //     let calculTVA=(this.state.total * 0.2).toFixed(2)
    //     let toto=this.state.total+this.state.totalEcoTax+this.state.totalTVA
    //     this.setState({total:somme})
    //     this.setState({totalEcoTax:totalEco})
    //     this.setState({totalTVA:calculTVA})
    //     this.setState({totalTTC:toto})

 }
  render() {
    return (
      <div>
<div class="row">
  <div class="col-sm-9">
  <h1>Pay</h1>
    <div class="row">
      <div class="col-8 col-sm-6">
      <ul className="list-group">
               {this.state.basket.length !=0 ? this.state.basket.map((element,i) => (
                    <li key={i} className="list-group-item">
                        nom dans basket {element.nom}
                        <span className="badge badge-primary badge-pill">
                       - quantité -  {element.quantite} 
                       
                          </span>
                       </li>
   ))      : <p>   </p>
                } </ul>
      </div>
      <div class="col-4 col-sm-6">
     <p><h5>SubTotal : {this.state.total}  €</h5></p>
     <p><h5> Vat : {this.state.totalTVA} € </h5></p>
     <p> <h5>Eco Tax : {this.state.totalEcoTax} €</h5></p>
     <p><h5>Total : {this.state.totalTTC} €</h5> </p>
    

      </div>
    </div>
  </div>
</div>


   


        <ul className="list-group">
                {this.props.items.map(element => (
                    <li className="list-group-item" key={element}>
                       <Card  onClick={this.handleSelect } 
                            itemName={element.name} price={element.price} 
                    
                        />  
                        <span className="badge badge-primary badge-pill">{element.price}€</span>
                    </li>
                ))}
                </ul>
      </div>

    )
  }
}
  export default Pay;


  {/* <span className="badge badge-primary badge-pill">
                       indice dans map=  {i} 
                          {console.log("zzz=", {i })}
                          </span>  
                        
                        
                        
                        
                             {this.props.items.map(article => (
                         <p> {article.name===element.nom?this.state.quantite++:this.state.quantite}</p>
                          ))}
                        */}