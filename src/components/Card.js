import { useState } from "react";

/* It receives the necessary properties (id, image, info, price, name) as props and uses them to render the content of the card.*/
function Card({id,image,info,price,name,removeTour}){

/* Alernate way 

function Card(props) {
  const { id, image, info, price, name } = props;



  Explaination :
  By using destructuring assignment, the code simplifies accessing individual props within the component. Instead of using props.id, props.image, etc., the extracted variables can be used directly as id, image, etc. within the Card component, making the code more concise and readable.
*/
  const[readmore,setReadmore] = useState(false);
  
  const description = readmore ? info : ` ${info.substring(0,200)}....`
  
  
  
  
  function readmoreHandler(){
    setReadmore(!readmore)

  }



return(
     <div className="card">
   
         <img src={image} className="image"></img>
         <div className="tour-info">



         <div className="tour-details">
              <h4 className="tour-price">₹ {price}</h4>
              <h4 className="tour-name">{name}</h4>
           </div>

         <div className="description">
            {description}
             <span className="read-more" onClick={readmoreHandler}>
                 {readmore ? `Show less`: `Read more`}
             </span>

         </div>
         </div>
         

         <button className="btn-red" onClick={() => removeTour(id)}>
              Not interested
         </button>


     </div>
     
);

}

export default Card;