export default function Product(){
    const products = ["laptop", "Desktop", "Mobile"];
    const productList = products.map((product, index) =>(
         <h3 key={index}>{product}</h3> ));

    return (
        <div>
           {productList}
        </div>
    )
}

// export default function Product(){
//     const products = [
//         {id:1, name:"laptop", price: 300},
//         {id:2, name:"Desktop", price: 600},
//         {id:3, name:"Mobile", price: 900},
//     ];
//     const productList = products.map((product) =>(
//          <h3 key={product.id}>{product.name}</h3> ));

//     return (
//         <div>
//            {productList}
//         </div>
//     )
// }