
import { useSelector, useDispatch } from 'react-redux';
import { addtoCard,addtoCardDone,performCartOperation } from "../redux/action";
import { useState } from "react";
const Products=({name,url,price,id})=>{
    const dispatch = useDispatch();
    const [showSpin, setshowSpin] = useState(1);
    const AddedtoCart=(id,name,price)=>{
       // alert(id)
        var spin = document.getElementById("ps"+id);
        var btn = document.getElementById("addcard"+id);
        spin.style.display = "block";
        btn.style.display = "none";
       var cartProductArray=[];
       var saveProductArray=localStorage.getItem('products');
       var qty=1;
   
       if(saveProductArray){
        cartProductArray=JSON.parse(saveProductArray);
        cartProductArray.map((itme)=>{
            if(itme.id===id){
              itme.qty=itme.qty+1;
              qty=2;
            }
        })
       }
       if(qty===1)
       cartProductArray.push({name:name,id:id,price:price,qty:qty,url:url});
       
       localStorage.setItem('products',JSON.stringify(cartProductArray));

        setshowSpin(1);
         dispatch(addtoCard());
        
         dispatch(performCartOperation(cartProductArray));
         setTimeout(()=>{
            dispatch(addtoCardDone());
            spin.style.display = "none";
        btn.style.display = "inline";
        //btn.style.visibility = "visible";
         }, 2000);

    }
    return (

      
            
          <div className="col-lg-4 col-xl-3 col-md-6 col-12 mt-2"  >
            <div className="border">
                <div className="text-center p-3">
                <img src={url}/>
                <div className="font-weight-bold">₹- {price}</div>
                <div>{name}</div>
                <input  id={'addcard'+id} type="button" className="btn btn-primary mt-3 " onClick={()=>AddedtoCart(id,name,price)} value="Add to cart"   />
                <div className='centerSpin'>
                <div id={'ps'+id}  className="spinner-border" role="status" >
  <span className="sr-only">Loading...</span>
</div>
                </div></div>
           </div>
           
          </div>
          
        

          
      
    );
}

export default Products;