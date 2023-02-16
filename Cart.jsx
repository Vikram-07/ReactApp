import React from "react";

function Cart(props){
    
    function getTotal(){
        return props.cart.reduce((a,p)=>{
                    return a+Math.floor((p.price*p.count))
                },0)
    }

    return(
       
        <div className='border border-4 border-info p-2'>
            <h2>Cart</h2>
            {
                props.cart.map((p)=>{
                    return(
                        <li className="d-flex justify-content-between">
                            <div className="w-50">{p.title}</div>
                            <div className="w-25 text-end">{p.count}*{p.price}<i style={{fontSize:'13px'}} class="fa fa-gbp"></i></div>
                            <div className="w-25 text-end">{p.price*p.count}<i style={{fontSize:'13px'}} class="fa fa-gbp"></i></div>
                        </li>
                    )
                })
            }
            <hr></hr>
            <h2 style={{textAlign:'right'}}>Total:{getTotal()}<i style={{fontSize:'30px'}} class="fa fa-gbp"></i></h2>
        </div>
    )
}



export default Cart