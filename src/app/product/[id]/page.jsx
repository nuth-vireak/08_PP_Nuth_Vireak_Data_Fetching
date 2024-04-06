import ProductDetail from "@/components/ProductDetail";


const ProductDetailPage = async ({params : {id}}) => {
    return (
        <>
            <div>
                <br/><br/><br/><br/><br/>
                <ProductDetail id={id}/>
            </div>
        </>
    )
}
export default ProductDetailPage;