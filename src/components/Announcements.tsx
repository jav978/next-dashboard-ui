const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-xl'>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4">
      <div className="bg-lamaSkyLight mt-4 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Lorem, ipsum dolor sit amet consectetur</h2>
          <span className="text-xs text-gray-400 bg-white py-1 rounded-full px-2">2024-02-25</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
      
      <div className="bg-lamaPurple  p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Lorem, ipsum dolor sit amet consectetur</h2>
          <span className="text-xs text-gray-400 bg-white py-1 rounded-full px-2">2024-02-25</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
      <div className="bg-lamaYellow  p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Lorem, ipsum dolor sit amet consectetur</h2>
          <span className="text-xs text-gray-400 bg-white py-1 rounded-full px-2">2024-02-25</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
      </div>

    </div>
  )
}

export default Announcements