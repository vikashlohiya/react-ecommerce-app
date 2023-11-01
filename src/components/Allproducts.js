import  Products  from "./Products"
const Allproducts=()=>{
    const produts=[{id:1,name:"Realme Pro 60x 5G " ,price:11000,url:"https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_UF226,226_FMjpg_.jpg"},
    {id:2,name:"Realme Narzo 60x 6G " ,price:10000,url:"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_UF226,226_FMjpg_.jpg"},
    {id:3,name:"Smartwatches " ,price:1022,url:"https://m.media-amazon.com/images/I/51x5Cq1anML._AC_UF226,226_FMjpg_.jpg"},
    {id:4,name:"Best of 32 inch TVs " ,price:5000,url:"https://m.media-amazon.com/images/I/51xz0+Y1oUL._AC_UF226,226_FMjpg_.jpg"},
    {id:5,name:"Realme Narzo 80x 5G" ,price:12000,url:"https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_UF226,226_FMjpg_.jpg"},
    {id:6,name:"Realme Narzo 70x 5G " ,price:11100,url:"https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_UF226,226_FMjpg_.jpg"},
    {id:7,name:"Smartwatches 1 " ,price:6000,url:"https://m.media-amazon.com/images/I/51x5Cq1anML._AC_UF226,226_FMjpg_.jpg"},
    {id:8,name:"Best of 35 inch TVs " ,price:7000,url:"https://m.media-amazon.com/images/I/51xz0+Y1oUL._AC_UF226,226_FMjpg_.jpg"},
  
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