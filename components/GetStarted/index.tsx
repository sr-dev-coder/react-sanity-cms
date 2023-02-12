import Link from "next/link"

export const GetStarted = () => {
  return <div className="flex justify-center items-center text-center px-4 max-w-7xl mx-auto py-16">
        <div className="bg-indigo-600 py-12 px-6 w-full rounded-md md:py-28 xl:py-14">
            <h2 className="text-5xl font-bold leading-tight text-white">Get started with Us</h2>
            <p className="text-sm py-4 text-white leading-7 md:text-base md:py-8 md:max-w-[720px] md:mx-auto md:text-center lg:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ,</p>
            <Link href="#" className="text-indigo-600 bg-white rounded-md py-3 inline-block px-8 text-base font-normal hover:bg-transparent hover:text-white border border-color-white lg:py-3 lg:px-16 lg:text-xl xl:text-lg xl:py-4 xl:px-20">Request Free Demo</Link>
        </div>
    </div>
}