import {Link, useParams} from 'react-router-dom';
import products from '../data';
const SingleProduct = ()=>{
    const {productId} = useParams();
    const product = products.find((product)=>product.id===productId);
    const {image, name} = product;
    return (
        <section className="section product">
            <div>Product : {name}</div>
            <img src={image} alt={name} />
            <Link to='/products'>Back to Products</Link>
        </section>
    )
}
export default SingleProduct;