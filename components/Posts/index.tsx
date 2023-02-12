import Link from 'next/link'

export const Posts = () => {
  return <div className="">
        <div className="flex flex-wrap px-4 max-w-7xl mx-auto">
            <h2 className="text-5xl font-medium leading-tight text-indigo-600 mb-4 w-full">Blog</h2>
            <p className="text-lg leading-9 text-[#333] font-medium">The latest information on the recruiting industry.</p>
        </div>
        <div className="flex flex-wrapp py-4">
            <div className="w-1/3">
                <div className="h-96 bg-gray-400"></div>
                <div className="p-10">
                    <h4 className="text-lg leading-9 text-[#333] font-medium">3 Ways to decrease your time to fill for open roles</h4>
                    <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">Read More...</Link>
                </div>
            </div>
            <div className="w-1/3">
                <div className="h-96 bg-gray-400"></div>
                <div className="p-10">
                    <h4 className="text-lg leading-9 text-[#333] font-medium">3 Ways to decrease your time to fill for open roles</h4>
                    <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">Read More...</Link>
                </div>
            </div>
            <div className="w-1/3">
                <div className="h-96 bg-gray-400"></div>
                <div className="p-10">
                    <h4 className="text-lg leading-9 text-[#333] font-medium">3 Ways to decrease your time to fill for open roles</h4>
                    <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">Read More...</Link>
                </div>
            </div>
        </div>
  </div>
}