import React from "react";
import Cart from './Cart';
import axios from 'axios';

function Product(){
    const [products,setProducts]=React.useState([]);
    const [cart,setCart] = React.useState([])

    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts([...res.data])
            console.log(res)
        })
    },[])

    function addProduct(product){
        setCart([...cart,{...product,count:1}])
    }

    function isProductInCart(product){
        var a=cart.find(function(cp){
            if(cp.title===product.title){
                return true
            }
            else{
                return false
            }
        })
        return a
    }

    function getProductCount(product){
        var a=cart.find(function(cp){
            if(cp.title===product.title){
                return true
            }
            else{
                return false
            }
        })
        return a? a.count:0;
    }

    function incCount(product){
        var temp = cart.map((cp)=>{
            if(cp.title===product.title){
                cp.count=cp.count+1
            }
            return cp;
        })
        setCart([...temp])
    }

    function decCount(product,i){
        var temp = cart.map((cp)=>{
            if(cp.title===product.title && cp.count>0){
                    cp.count--                
            }
            return cp;
        })
        setCart([...temp])
        
    }

    return(
        <div className='d-flex flex-wrap border border-4 border-info p-2 w-100'>
            <div  className="w-50">
                {
                   products.map((product,i)=>{
                        return(
                            <div className="d-flex mb-4">
                                    <img src={product.image} width="100px" alt=""/>
                                    <div className='p-4'>
                                        <h5>{product.title}</h5>
                                        <h2>{product.price}<span><i style={{fontSize:'20px'}} class="fa fa-gbp"></i></span></h2>
                                        {
                                            isProductInCart(product) && (
                                            <>
                                                <button onClick={()=>{incCount(product)}} style={{borderRadius:'75%',padding:'0px 8px',borderColor:'green'}}><b>+</b></button>&nbsp;
                                                <b>{getProductCount(product)}</b>&nbsp;
                                                <button onClick={()=>{decCount(product,i)}} style={{borderRadius:'75%',padding:'0px 10px',borderColor:'red'}}><b>-</b></button>
                                            </>
                                            )
                                        }
                                        {
                                            !isProductInCart(product) && (<button onClick={()=>{addProduct(product)}}>Add to Cart</button>)
                                        }
                                        
                                    </div>
                            </div> 
                        )
                   })
                }
            </div>
            <div className="w-50">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Product