import { useParams } from 'react-router-dom';


const ProductListingPage = () => {
    const { subcategoryName } = useParams();
    console.log("subcategoryName", subcategoryName);

  return (
    <div>
       <h1>Products in {subcategoryName}</h1> 
    </div>
  )
}

export default ProductListingPage
