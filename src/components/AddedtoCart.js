import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addtoCard } from "../redux/action";
import { performCartOperation, hidePopup } from "../redux/action";
const AddedtoCart = () => {
     const dispatch = useDispatch();


     const initialAddtoCart = useSelector((state) => state.addtocart);
     const cartitems = useSelector((state) => state.cartitems);
     var showPopupobj = { display: 'none' };
     if (cartitems.showcartpopup === 1) {
          showPopupobj = { display: 'block' };
     }
     const removeCartItem = (itemid) => {



          var saveProductArray = localStorage.getItem('products');
          var qty = 1;
          var cartProductArray = [];
          var cartProductArrayNew = [];
          var tempQty = 0;

          if (saveProductArray) {
               cartProductArray = JSON.parse(saveProductArray);
               var cartProductArrayNew = cartProductArray.filter((item) => {

                    if (item.id !== itemid) {
                         tempQty = tempQty + item.qty;
                         return true;
                    }
               });
               localStorage.setItem('products', JSON.stringify(cartProductArrayNew));
               dispatch(performCartOperation(cartProductArrayNew, tempQty));
          }

     }
     return (
          <div className="container">

               <div className="productmsg" style={initialAddtoCart}>
                    Product added to cart
               </div>
               <div className="productshow" style={showPopupobj} >

                    <div className="card" >

                         <div className="card-body">
                              <div className="cardheader">

                                   <h5 className="card-title">SHOPPING CART</h5>

                                   <button type="button" className="close closehover" aria-label="Close">
                                        <span aria-hidden="true" onClick={() => dispatch(hidePopup())} >&times;</span>
                                   </button>

                              </div>
                         </div>
                         <hr className="hr" />

                         <div className="card-body cartdiv">

                              {cartitems.cartitems.map((item) => (
                                   <p key={item.id} className="card-text d-flex"><button onClick={() => removeCartItem(item.id)} type="button" className="close closehover" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                   </button>&nbsp;<img className="cartimg img-fluid img-thumbnail" src={item.url} /><label className="px-5">{item.name}<br />{item.qty}x₹{item.price}
                                        </label>
                                   </p>
                              ))}
                             {(cartitems.cartitems.length===0)?(
                             <p style={{textAlign:"center"}}><strong>There is no item in cart.</strong></p>):''}
                         </div>

                    </div>
                    <div className="card" >

                         <div className="card-body">
                              <div className="d-flex justify-content-between" ><label><strong>Sub Total</strong></label> <label><strong>₹{cartitems.totalamt}</strong></label></div>
                         </div></div>
                    <div className="card" >

                         <div className="card-body text-center">
                              <input type="button" className="btn  btn-primary" value="Chekcout" />
                         </div></div>
               </div>
          </div>
     );
}

export default AddedtoCart;