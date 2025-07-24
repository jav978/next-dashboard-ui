import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"


const ParentPage = () => {
  return (
    <div className='p-4 flex-1 flex flex-col gap-4 xl:flex-row'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3 flex flex-col gap-8'>
        <div className="h-full bg-white p-4 rounded-xl">
          <h1 className="font-semibold text-lg">Schedule (Jhon Doe)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <Announcements/>
             
      </div>

    </div>
  )
}

export default ParentPage