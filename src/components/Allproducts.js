import  Products  from "./Products"
const Allproducts=()=>{
    const produts=[{id:1,name:"Realme Narzo 60x 5G " ,price:1022,url:"https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_UF226,226_FMjpg_.jpg"},
    {id:2,name:"Realme Narzo 60x 5G " ,price:1022,url:"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_UF226,226_FMjpg_.jpg"},
    {id:3,name:"Smartwatches " ,price:1022,url:"https://m.media-amazon.com/images/I/51x5Cq1anML._AC_UF226,226_FMjpg_.jpg"},
    {id:4,name:"Best of 32 inch TVs " ,price:1022,url:"https://m.media-amazon.com/images/I/51xz0+Y1oUL._AC_UF226,226_FMjpg_.jpg"},
    {id:5,name:"Realme Narzo 60x 5G" ,price:1022,url:"https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_UF226,226_FMjpg_.jpg"},
    {id:6,name:"Realme Narzo 60x 5G " ,price:1022,url:"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_UF226,226_FMjpg_.jpg"},
    {id:7,name:"Smartwatches " ,price:1022,url:"https://m.media-amazon.com/images/I/51x5Cq1anML._AC_UF226,226_FMjpg_.jpg"},
    {id:8,name:"Best of 32 inch TVs " ,price:1022,url:"https://m.media-amazon.com/images/I/51xz0+Y1oUL._AC_UF226,226_FMjpg_.jpg"},
  
  ];
    return (
        <div className="container p-4">
        <h1>All Products</h1>
       
    <div className="row">
         {produts.map((data) => (
          <Products key={data.id}  name={data.name} url={data.url} price={data.price} id={data.id}  />
        ))}
         </div>
      </div>
      );
     
     
    
 
}

 export default Allproducts;