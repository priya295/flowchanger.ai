import React from 'react'

const Project_Progress = () => {
  return (
    <div className='w-[100%]'>
         <h2 className='text-[20px] p-[20px] font-medium'>Projects / Addoble</h2>
        <div className='p-[20px] flex w-[34%] justify-between items-center'>
           <p>img</p>
           <button className='finish-btn p-[8px] rounded-lg bg-[#dcfce7] font-medium text-[#58ae71] '>Finished</button>
        </div>

        <div className=" bg-white  w-[100%] shadow rounded-lg p-6 max-[900px]:w-[100%] ">
          {/*-- Progress Bar -*/}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700 max-[1400px]:text-[14px]">
                Project Progress 100%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full"></div>
            </div>
          </div>

          {/*-- Overview Section -*/}
          <div className="text-gray-600 space-y-2 max-[1400px]:text-[14px]">
            <span className="block font-semibold text-gray-700 ">Overview</span>
           
                <div className='flex customer-adoble '>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700 ">
                  Project #
                </span>
                <span className="text-[#B1B1B1]">29</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Customer
                </span>
                <span className="text-[#B1B1B1]">Addodle</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Status
                </span>
                <span className="text-[#B1B1B1]">Finished</span>
              </div>
              <div className='w-[235px]'>
                <span className="block font-semibold text-gray-700">
                  Date Created
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              </div>
               <div className='flex customer-adoble'>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Start Date
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Deadline
                </span>
                <span className="text-[#B1B1B1]">31-08-2024</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Completed Date
                </span>
                <span className="text-[#81EF93]">02-09-2024 6:03 PM</span>
              </div>
              <div className='w-[235px]'>
                <span className="block font-semibold text-gray-700">
                  Total Logged Hours
                </span>
                <span className="text-[#B1B1B1]">03:55</span>
              </div>
              </div>
         
          </div>

          {/*-- Tags Section -*/}
          <div className="mt-4">
            <span className="block font-semibold text-gray-700">Tags</span>
            <div className="flex space-x-2 mt-2">
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Ads
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Graphic
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Reel
              </span>
            </div>
          </div>

          {/*-- Description Section --*/}
          <div className="mt-4 text-gray-700">
            <span className="font-semibold block mb-1">Description</span>
            <p className="text-[#B1B1B1] text-sm">
              SMM plan (12 Graphic + 10 Reels & Facebook ad management).
            </p>
          </div>
        </div>
    </div>
  )
}

export default Project_Progress