import { BsCart } from "react-icons/bs";

interface HeaderProps { name: string }

const Header = ({ name }: HeaderProps) => {
    return (
        <div className="flex bg-slate-100 py-4 h-20 items-center justify-between">
            <h1 className="text-blue-600 text-xl font-semibold flex gap-2 items-center">
                <BsCart class="text-3xl" />
                {name}
            </h1>
            <button>Login</button>
        </div>
    )
}

export default Header