let productos = [
 
    {
      id: 1,
      name: "Zapatillas",
      price: 49.99,
      description: "Zapatillas deportivas cómodas.",
      color: "Negro",
      stock: 23,
      pictureUrl:"https://pampero.com.ar/wp-content/uploads/2022/10/ZAPATILLA-CONVERSE-BLANCA_0765.jpg",
      category:"calzados"
    },
    {
        id: 2,
        name: "Pantalon",
        price: 59.99,
        description: "Unos pantalones de alta calidad y al mejor precio",
        color: "Azul marino",
        stock: 32,
        pictureUrl:"https://alcatraz.com.ar/wp-content/uploads/2021/09/Pantalon-Ultra-azul_0000s_0006_Pantalon-Ultra-3.jpg",
        category:"pantalones"
    },
    {
        id: 3,
        name: "Zapatillas",
        price: 100.99,
        description: "Zapatillas deportivas cómodas.",
        color: "Negro",
        stock: 2,
        pictureUrl:"https://pampero.com.ar/wp-content/uploads/2022/03/424116004_C4-3-copia.jpg",
        category:"calzados"
    },
    {
        id: 4,
        name:"Anteojos",
        price: 480,
        description: "Zapatillas deportivas cómodas.",
        color: "Negro",
        stock: 10,
        pictureUrl:"https://estar.com.ar/wp-content/uploads/2021/07/Nuevo-proyecto-53.jpg",
        category:"accesorios"
    },
    {
        id: 5,
        name: "Gorro",
        price: 1500,
        description: "Gorro de tela de alta calidad.",
        color: "Azul",
        stock: 13,
        pictureUrl:"https://drifters.com.ar/uploads/product_image/25119/650w_DriftersPDP_ACC_DJ6044-063_Shot22.jpg",
        category:"accesorios"
    },
     
   
];


export const getAllProducts=()=>{

    return new Promise((resolve, rejeated)=>{

        setTimeout(() => {
           
            resolve(productos);

        }, 2000);

    })
    

} 


export const getProductId=(prodId)=>{

    return new Promise((resolve)=>{

        setTimeout(() => {

            const productId = productos.find(prod => prod.id === prodId)
           
            resolve(productos);

        }, 2000);

    })
    

} 


