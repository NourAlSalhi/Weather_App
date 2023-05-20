import { HeaderTitle } from "../data"
export const Header = () => {
    return (
        <nav className="text-white flex justify-between font-semibold font-nunito w-2/4 mx-auto py-10">
            {
                HeaderTitle.map(item => (
                    <button key={item.id}>
                        {item.title}
                    </button>
                ))
            }
        </nav>
    )
}

export default Header