import { useEffect, useState } from "react"
import { getProducts } from "../controllers/productController"
import Product from "./Product"

interface ProductInterface {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: object,
    title: string
}

const ProductList = () => {
    const [productList, setProductList] = useState<ProductInterface[]>([])

    useEffect(() => { getProducts().then(r => setProductList(r.data)).catch(e => console.error(e)) }, [])

    return (
        <>{productList.length === 0 ? "No hay productos" : (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-4">
                {productList.map(product =>
                    <Product image={product.image} title={product.title} price={product.price} />
                )}
            </div>
        )}
        </>
    )
}

export default ProductList