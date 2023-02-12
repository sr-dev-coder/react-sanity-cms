import Link from "next/link"

export const Banner = () => {
  return <div className="flex justify-center items-center text-center px-4 max-w-7xl mx-auto">
        <div className="bg-gray-200 py-12 px-6 w-full md:py-28 xl:py-40">
            <h1 className="text-4xl font-bold text-indigo-600 lg:text-7xl xl:text-8xl">Fill Roles Faster</h1>
            <p className="text-sm py-4 text-slate-700 md:text-base md:py-8 md:max-w-[720px] md:mx-auto md:text-center lg:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <Link href="#" className="bg-indigo-600 text-white rounded-md py-3 inline-block px-8 text-base font-normal
            hover:bg-indigo-700 lg:py-3 lg:px-16 lg:text-xl xl:text-lg xl:py-4 xl:px-20">Request Free Demo</Link>
        </div>
    </div>
}