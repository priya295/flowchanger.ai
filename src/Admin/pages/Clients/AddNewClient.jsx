import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CustomDialog from "./DialougeBox";
import { MdOutlineDone } from "react-icons/md";
const AddNewClient = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const [defaultLanguages, setDefaultLanguages] = useState(["portuguese", "German", "indonesia", "catlan", "Spanish", "Turkish", "Slovak", "Vitnamese", "Swedish", "Portguese_br", "ukrainian", "polish"])
  const [toggleCurrencyDropdown, setToggleCurrencyDropDown] = useState(false);

  const handleToggleCurrencyDropDown = () => {
    setToggleCurrencyDropDown(!toggleCurrencyDropdown)
  }

  const [selectAll, setSelectAll] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const groups = [
    'ASTROPITAH SMM PROJECT',
    'digital',
    'HONEY TOUR & TRAVELS',
    'vevge',
    'webs'
  ]

  const handleGroupSelection = (selectAll) => {
    if (selectAll) {
      setSelectedGroups(groups);//select all group
      setSelectAll(true);
    }
    else {
      setSelectedGroups([]); //deselect all group
      setSelectAll(false);
    }
  };
  const toggleGroupSelection = (group) => {
    setSelectedGroups((prevSelected) =>
      prevSelected.includes(group)
        ? prevSelected.filter(g => g !== group)
        : [...prevSelected, group]
    );
  };


  return (
    <div class="bg-gray-100 flex justify-center items-center min-h-screen">

      <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <div class="mb-6">
          {/* <!-- Tabs for form sections --> */}
          <nav class="flex space-x-4 border-b">
            <a href="#" class=" py-2 hover:border-b-2 hover:border-blue-600 text-sm font-medium">Customer Details</a>
            <a href="#" class="text-gray-600 py-2 text-sm font-medium hover:border-b-2 hover:border-blue-600">Billing & Shipping</a>
          </nav>
        </div>

        <form>
          <div class="grid grid-cols-1 gap-6">
            {/* <!-- Company --> */}
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700">Company *</label>
              <input type="text" id="company" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
            </div>

            {/* <!-- VAT Number --> */}
            <div>
              <label for="vat" class="block text-sm font-medium text-gray-700">VAT Number</label>
              <input type="text" id="vat" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Phone --> */}
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Website --> */}
            <div>
              <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
              <input type="url" id="website" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Groups --> */}
            <div className="relative">
              <label for="groups" class="block text-sm font-medium text-gray-700">Groups</label>
              <div className="relative">
                <input
                  type="text"
                  id="groups"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-16 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Nothing selected"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 mt-1">
                  <IoIosArrowDown className="h-4 w-4 text-gray-400 mr-2" onClick={() => setIsOpen(!isOpen)} />
                  <FiPlus className="h-4 w-4 text-gray-400" onClick={() => setIsDialogOpen(true)} />
                </div>
              </div>
              <CustomDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
              />
              {isOpen &&
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <div className="border-b border-gray-200">
                    <div className="flex justify-between px-4 py-2 text-sm text-black-600">
                      <button className="hover:underline border border-gray-200 w-1/2 py-2" onClick={() => handleGroupSelection(true)}>Select All</button>
                      <button className="hover:underline border border-gray-200 w-1/2 py-2" onClick={() => handleGroupSelection(false)}>Deselect All</button>
                    </div>
                  </div>

                  <div class="mt-6  w-full md:w-[45%] flex p-2 justify-between md:justify-around  md:float-right">
                    <button type="submit" class="   px-2 text-gray-400 border border-gray-400 rounded-md shadow-sm  focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 mr-2 ">save and create contact</button>
                    <button type="submit" class=" bg-purple-600 text-white px-2 py-1 rounded-md shadow-sm hover:bg-purple-700 focus:ring-4 focus:ring-black focus:ring-opacity-50">save</button>
                  </div>
                </div>

              }
              </div>

              </div>
            </form>
          </div>
      </div>
      );
}

      export default AddNewClient;


