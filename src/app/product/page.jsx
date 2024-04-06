import {getProduct} from "@/services/product";
import {Product} from "@/components/Product";

const productPage = async () => {
    const data = await getProduct();
    return (
        <>
            <div>
                <br/><br/><br/><br/><br/>
                <Product data={data}/>
            </div>
        </>
    );
}

export default productPage;