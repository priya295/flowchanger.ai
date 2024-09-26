import React, { useState } from "react";
import refresh from "../../../Assets/Images/refresh.png";
import app_menu from "../../../Assets/Images/app-menu.png";
import three_dot from "../../../Assets/Images/dots-three-outline.png";
import deleteIcon from "../../../Assets/Images/delete.png";

const Filter_selected = () => {
  const [isOpen, setisOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function togglePopup() {
    setisOpen(!isOpen);
  }

  function handleDeleteClick() {
    setShowConfirm(true);
  }

  function handleDeleteCancel() {
    setShowConfirm(false)
  }

  return (
    <div className='absolute top-[95px] left-[240px]'>
     
        <div>
          <div className="flex justify-between items-center">
            <h1 class=" font-medium text-2xl p-8">Subscriptions</h1>
            <button className="mr-9 bg-[#511992] text-white h-[37px] w-[185px] rounded">
              Create Subscriptions
            </button>
          </div>

          <div class="flex items-center justify-between p-4 ml-8">
            {/*-- Left side: Dropdown and Filter button --*/}
            <div class="flex items-center space-x-10 ml-[-1rem]">
              {/*-- Dropdown --*/}
              <div class="relative">
                <select class=" w-[35rem] appearance-none border rounded-lg py-2 px-4 border-[#DBDCDE] text-[#89868D] bg-[#F4F5F9]">
                  <option>All</option>
                  <option>Active</option>
                  <option>Upcoming</option>
                  <option>Expired</option>

                  {/*-- Add more options here --*/}
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/*-- Filter Button --*/}
              <button class="bg-[#511992] text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700">
                Filter
              </button>
            </div>

            {/*-- Right side: Icon buttons --*/}
            <div class="flex space-x-4 mr-[-16px]">
              {/*-- Refresh icon --*/}
              <div className=" flex mt-1">
                <button className="  h-[46px] w-[58px] bg-[#DADDE1] rounded-s">
                  {" "}
                  <img className="px-5 py-3" src={refresh} alt="refresh" />
                </button>
                <button className="  h-[46px] w-[58px] bg-[#CDD0D4] mr-9 rounded-e">
                  {" "}
                  <img className="px-5 py-3" src={app_menu} alt="app-menu" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden mx-9 mt-10 border-[#DBDBDB] rounded-t-lg">
            <table class=" w-full bg-white">
              <thead class="w-full bg-[#511992] text-white text-center text-[15px]">
                <tr className="text-[15px]">
                  <th class="w-1/6 px-4 py-2">User Name</th>
                  <th class="w-1/6 px-4 py-2">Package</th>
                  <th class="w-1/6 px-4 py-2">Type</th>
                  <th class="w-1/6 px-4 py-2">Start Day</th>
                  <th class="w-1/6 px-4 py-2">End Day</th>
                  <th class="w-1/6 px-4 py-2">Tenure</th>
                  <th class="w-1/6 px-4 py-2">Months</th>
                  <th class="w-1/6 px-4 py-2">Amount</th>
                  <th class="w-1/6 px-4 py-2">Payment Method</th>
                  <th class="w-1/6 px-4 py-2">Purchase date</th>
                  <th class="w-1/6 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-[#89868D] text-[13px] font-normal">
                <tr class="bg-gray-100 border-b text-center">
                  <td class="px-4 py-2  border  ">Admin</td>

                  <div className="border-r text-start p-3">
                    <td class="px-4 py-2 ">Enterprise Plan</td>
                    <span class="bg-[#FFC107] text-white rounded-full px-2 py-1 ml-3 text-[10.22px]">
                      Upcoming plan
                    </span>
                  </div>
                  <td class="px-4 py-2">
                    <span class="bg-[#FC544B] text-white rounded-full px-2 py-1 text-xs ml-1">
                      Paid
                    </span>
                  </td>
                  <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                  <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                  <td class="px-4 py-2 border">quarterly</td>
                  <td class="px-4 py-2 border">4</td>
                  <td class="px-4 py-2 border">₹ 8000</td>
                  <td class="px-4 py-2 border">Razorpay</td>
                  <td class="px-4 py-2 border">2024-05-18 21:55:42</td>
                  <td class="px-4 py-2 border">
                    <button class="text-gray-500 hover:text-gray-900">
                      <img src={three_dot} alt="" />
                    </button>
                  </td>
                </tr>
                <tr class="bg-gray-50 text-center">
                  <td class="px-4 py-2 border">Admin</td>
                  <div className="text-start p-3 border-b">
                    <td class="px-4 py-2">Enterprise Plan</td>
                    <span class="bg-[#63ED7A] text-white rounded-full px-2 py-1 ml-3 text-[10.22px]">
                      Active
                    </span>
                  </div>
                  <td class="px-4 py-2 border">
                    <span class="bg-[#FC544B] text-white rounded-full px-2 py-1 text-xs ml-1">
                      Paid
                    </span>
                  </td>
                  <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                  <td class="px-4 py-2 border">2025-03-24 00:00:00</td>
                  <td class="px-4 py-2 border">Yearly</td>
                  <td class="px-4 py-2 border">12</td>
                  <td class="px-4 py-2 border">₹ 20000</td>
                  <td class="px-4 py-2 border">Razorpay</td>
                  <td class="px-4 py-2 border">2024-05-18 21:55:42</td>
                  <td class="px-4 py-2 border">

                    <button onClick={togglePopup} class="text-gray-500 ">
                      <img src={three_dot} alt="" />

                      {isOpen && (
                        <div>
                          <button
                            onClick={handleDeleteClick}
                            className="flex items-center ml-[-80px] space-x-2 px-6 py-2 border bg-[#FFFFFF] border-[#DBDCDE]  rounded-lg "
                          >
                            <img src={deleteIcon} alt="" />
                            <span className="text-black">Delete</span>
                          </button>
                        </div>
                      )}
                    </button>

                    {showConfirm && (
                      <div class="fixed inset-0 flex items-center justify-center z-50">
                        <div class="inset-0  bg-gray-800 bg-opacity-50"></div>

                        <div class="bg-white p-6 rounded-lg border border-[#575757] z-10 w-96">
                          <div class="flex justify-center">
                            <div class="text-yellow-500 text-5xl mb-4">
                              &#x26A0;
                            </div>
                          </div>

                          <h2 class="text-center text-xl font-semibold text-gray-900 mb-2">
                            Are you sure?
                          </h2>

                          <p class="text-center text-gray-700 mb-6">
                            Subscription Data Will Be deleted, you will not be
                            able to recover that data!
                          </p>

                          <div class="flex justify-center space-x-4">
                            <button 
                            onClick={handleDeleteCancel}
                            class="px-4 py-2 text-black bg-white rounded-md border border-[#595757]">
                              Cancel
                            </button>
                            <button class="px-4 py-2 bg-purple-600 text-white rounded-md w-[5rem] hover:bg-purple-700 focus:outline-none">
                              Ok
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
     </div>
  );
};

export default Filter_selected;
