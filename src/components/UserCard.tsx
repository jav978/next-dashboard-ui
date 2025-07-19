import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='p-4 flex-1 rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px]'>
    <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white py-1 rounded-full text-green-600 px-2">2024/25</span>
        <Image src="/more.png" alt="" width={20} height={20} />
    </div>
    <h1 className="text-2xl font-semibold my-4">1,234</h1>
    <h2 className="font-medium capitalize text-sm text-gray-500">{type}</h2>    
    </div>
  )
}

export default UserCard