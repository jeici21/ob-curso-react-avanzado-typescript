interface ProductProps { image: string, title: string, price: number }

const Product = ({ image, title, price }: ProductProps) => {
    return (
        <div className="flex flex-col gap-2 border border-slate-100 p-4 shadow rounded">
            <img src={image} />
            <h2 className="font-semibold text-slate-700">{title}</h2>
            <h2 className="text-right text-slate-400">$ {price}</h2>
        </div>
    )
}

export default Product