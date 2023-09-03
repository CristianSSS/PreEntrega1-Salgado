import Item from "../Item/Item";
import { getAllProducts } from "../../mock";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
export default function ItemList(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        getAllProducts()
        .then(data=>{
            setProducts(data)
            console.log(data)
        })

        

    },[]);

    return(
        <div
        style={{
            display:"flex",
            justifyContent:"space-between",
            gap:"20px",
            flexWrap:"wrap"
        }}
        >

        {
            products[0] ? "": (
                <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                </>
                
            )
        }
        
        {
            products.map(product =>{
                return(
                    <Item key={product.id} data={product} />
                )
            })
        }
       
        </div>
    )

}