import React from "react";
import photo from "../Images/photo.png";

const create_users = () => {
  return (
    <div>
      <style></style>

      <div className="absolute top-[95px] left-[240px]">
      

          <div>
            <div class=" bg-white rounded-lg ">
              <h1 class="text-2xl p-8">Create User</h1>

              <div class="ml-[39rem]">
                <img
                  src={photo}
                  alt="Profile"
                  class="w-20 h-20 rounded-full object-cover"
                />

                <div class="flex border-2 w-[25rem] h-[40px] rounded ml-[-8rem] mt-5">
                  <label class="block">
                    <span class="sr-only">Choose file</span>
                    <input
                      type="file"
                      class="block w-full text-sm text-gray-500 border-[#DBDCDE] bg-[#F4F5F9] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-gray-600 hover:file:bg-gray-700"
                    />
                  </label>
                </div>
              </div>

              <form className="ml-5">
                <div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pl-8 mt-5">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        class="mt-1 p-2 block w-[30rem] h-[40px] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        class="mt-1 block p-2 border w-[30rem] h-[40px] border-[#DBDCDE]  bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Email id
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        class="mt-1 block  p-2 border w-[30rem] h-[40px] border-[#DBDCDE]  bg-[#F4F5F9] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Contact number
                      </label>
                      <input
                        type="tel"
                        placeholder="1234567890"
                        class="mt-1 block  p-2 border w-[30rem] h-[40px] border-[#DBDCDE]  bg-[#F4F5F9] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        class="mt-1 block p-2 border w-[30rem] h-[40px] border-[#DBDCDE] bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Date of joining
                      </label>
                      <input
                        type="date"
                        class="mt-1 block p-2 border w-[30rem] h-[40px] border-[#DBDCDE] bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex ml-8 mt-9">
                      <div class="flex grid-rows-2">
                        <label class="block text-sm font-medium text-gray-700 mr-4">
                          Gender
                        </label>
                        <div class="flex space-x-4 ml-[-70px] mt-5">
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              class="form-radio text-indigo-600"
                            />
                            <span class="ml-2">Male</span>
                          </label>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              class="form-radio text-indigo-600"
                            />
                            <span class="ml-2">Female</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="ml-[24.4rem] mt-9">
                      <label class="block text-sm font-medium text-gray-700">
                        Designation
                      </label>
                      <input
                        type="text"
                        placeholder="Designation"
                        class="mt-1 block p-2 w-[64.5rem] h-[40px] border col-span-2 border-[#DBDCDE] bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="ml-8 flex mt-9">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        class="mt-1 block  p-2 w-[30rem] h-[40px] border border-[#DBDCDE]  bg-[#F4F5F9] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="ml-[4.2rem]">
                      <label class="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="City"
                        class="mt-1 block p-2 w-[64.3rem] h-[40px] border border-[#DBDCDE]  bg-[#F4F5F9] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="ml-8 flex mt-9 gap-16">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="State"
                        class="mt-1 block p-2 w-[30rem] h-[40px] border border-[#DBDCDE] bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        placeholder="Zip code"
                        class="mt-1 block p-2 w-[30rem] h-[40px] border border-[#DBDCDE]  bg-[#F4F5F9] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="Country"
                        class="mt-1 block p-2 w-[30.5rem] h-[40px] border border-[#DBDCDE] bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap ml-8 mt-9 gap-[3rem]">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="************"
                        class="mt-1 block p-2 w-[47.5rem] h-[40px] border border-[#DBDCDE] bg-[#F4F5F9]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="************"
                        class="mt-1 block p-2 w-[47.8rem] h-[40px] border border-[#DBDCDE]  bg-[#F4F5F9] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-6 text-right mr-[3.5rem]">
                  <button
                    type="submit"
                    class="bg-[#511992] text-white py-2 px-4 rounded-md shadow hover:bg-purple-700 focus:outline-none"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
     </div>
  );
};

export default create_users;
