import Link from 'next/link'

const menu = [
    { title: "How We Help", link: "#"},
    { title: "Pricing", link: "#"},
    { title: "Blog", link: "#"},
    { title: "Contact Us", link: "#"},
    { title: "Login", link: "#"},
    { title: "Request Free Demo", link: "#"},
]

export const Header = () => {
  return <header className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between xl:py-10">
        <Link href="/">Logo</Link>

        <div className="md:w-3/4">
            <div className="relative cursor-pointer md:hidden">
                <span className="w-8 h-px bg-indigo-400 block rounded mb-1.5"></span>
                <span className="w-5 h-px bg-indigo-400 block rounded"></span>
            </div>
            <nav 
                className="hidden fixed top-0 left-0 w-full h-screen p-8 bg-black/80 md:flex md:relative md:p-0 md:bg-inherit md:h-[inherit] md:justify-end"
            >
                <ul className="bg-white rounded-md p-5 md:bg-none md:rounded-none md:p-0 md:flex ">
                    {
                        menu.map(({ title, link }) =>(
                            <li key={title} className="ml-5">
                                <Link 
                                    className="text-indigo-600 hover:text-indigo-400 text-sm lg:text-base"
                                    href={link}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
  </header>
}
