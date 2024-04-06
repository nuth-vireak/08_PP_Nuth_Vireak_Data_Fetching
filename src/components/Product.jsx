import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {MdViewInAr} from "react-icons/md";
import Link from "next/link";

export function Product({data}) {

    const {products: product} = data;

    //console.log(product)

    const getStockStatus = (stock) => {
        if (stock !== 0) {
            return {
                status: 'In Stock',
                color: 'text-green-700'
            };
        } else {
            return {
                status: 'Out of Stock',
                color: 'text-red-700'
            };
        }
    }

    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center">

                {product.map((pro) => {
                    const {status, color} = getStockStatus(pro.stock);
                    return (
                        <Card key={pro.id}
                              className={"w-[300px] flex flex-col transform transition duration-500 ease-in-out hover:scale-105"}>
                            <CardHeader className={"gap-1"}>
                                <Image src={pro.thumbnail} alt={pro.title} width={250} height={250}
                                       className={"mb-3 rounded-[3px] shadow h-[250px] object-contain"}/>
                                <CardTitle
                                    className={"h-8 leading-12 overflow-hidden text-ellipsis text-wrap"}>{pro.title}</CardTitle>
                                <CardDescription className={"h-10 overflow-hidden"}>{pro.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className={"flex justify-between items-center"}>
                                    <label className={"text-2xl font-bold"}>$ {pro.price}</label>
                                    <label className={color}>
                                        {status}
                                    </label>
                                </div>
                            </CardContent>
                            <CardFooter className={"w-full"}>
                                <Link href={`/product/${pro.id}`}
                                      className={"w-full"}>
                                    <Button className={"w-full flex justify-center items-center"}>
                                        <MdViewInAr className={"mr-2 text-lg"}/>
                                        View Detail
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}