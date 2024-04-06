import {getProductByid} from "@/services/product";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Label} from "@/components/ui/label";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";

const StarRating = ({rating}) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex space-x-2 mt-4">
            {Array(fullStars).fill().map((_, i) => (
                <svg key={i} className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"/>
                </svg>
            ))}
            {halfStar && (
                <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"/>
                </svg>
            )}
            {Array(emptyStars).fill().map((_, i) => (
                <svg key={i} className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"/>
                </svg>
            ))}
        </div>
    );
}

const ProductDetail = async ({id}) => {
    console.log(id)
    const product = await getProductByid(id)

    let fullPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

    console.log("asdf: ", product);
    return (
        <div>
            <div className="font-[sans-serif]">
                <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                            <Image src={product.images[0]} alt="Product" width={500} height={500}
                                   className="w-4/5 rounded object-cover"/>
                            <hr className="border-white border-2 my-6"/>
                            <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                                {product.images.map((image, index) => (
                                    <Image key={index} src={image} alt="Product" width={100} height={100}
                                           className="w-[100px] h-[100px] object-cover cursor-pointer"/>
                                ))}
                            </div>

                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-extrabold text-gray-800">{product.title}</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <p className="text-gray-800 text-xl font-bold">${product.price}</p>
                                <p className="text-gray-400 text-xl"><strike>${fullPrice}</strike>
                                    <span className="text-red-500">  ({product.discountPercentage} % off)</span>
                                </p>
                            </div>
                            <StarRating rating={product.rating}/>
                            <Accordion defaultValue={["item-1", "item-2", "item-3"]} collapsible type={"multiple"}
                                       className={"mt-3"}>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Product Description</AccordionTrigger>
                                    <AccordionContent>
                                        <Label>{product.description}</Label>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Brand</AccordionTrigger>
                                    <AccordionContent>
                                        <Badge>{product.brand}</Badge>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Category</AccordionTrigger>
                                    <AccordionContent>
                                        <Badge>{product.category}</Badge>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;