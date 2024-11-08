import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CustomDialog from "./DialougeBox";
import { MdOutlineDone } from "react-icons/md";
import { useGlobalContext } from "../../../Context/GlobalContext";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { label } from "framer-motion/client";

const AddNewClient = () => {
  const animatedComponents = makeAnimated();
  const { baseUrl,openToast } = useGlobalContext();
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

  const[clientName,setClientName]=useState("");
  const [company, setCompany] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [currency, setCurrency] = useState([]);
  const [language, setLanguage] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch(baseUrl + "client", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name:clientName,company: company, vat_number: vatNumber, phone: phone, website: website, address: address, country: country, state: state, city: city, zip_code: zipCode, default_language: language, groups: selectedGroups, currency: currency, email: email })
    })
    console.log(result)
    if (result.status == 201) {
      openToast("Add Client Successfully")
    }
    else {
      openToast("An Error Accured")
    }
  }


  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          {/* <!-- Tabs for form sections --> */}
          <nav className="flex space-x-4 border-b">
            <a href="#" className=" py-2 hover:border-b-2 hover:border-blue-600 text-sm font-medium">Customer Details</a>
            <a href="#" className="text-gray-600 py-2 text-sm font-medium hover:border-b-2 hover:border-blue-600">Billing & Shipping</a>
          </nav>
        </div>

        {/* <!-- Form starts --> */}
        <form>
          <div className="grid grid-cols-1 gap-6">

             {/* <!-- Company --> */}
             <div>
              <label for="company" className="block text-sm font-medium text-gray-700">Name *</label>
              <input type="text" onChange={(e) => { setClientName(e.target.value) }} id="company" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
            </div>
            {/* <!-- Company --> */}
            <div>
              <label for="company" className="block text-sm font-medium text-gray-700">Company *</label>
              <input type="text" onChange={(e) => { setCompany(e.target.value) }} id="company" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
            </div>

            {/* <!-- VAT Number --> */}
            <div>
              <label for="vat" className="block text-sm font-medium text-gray-700">VAT Number</label>
              <input type="text" onChange={(e) => { setVatNumber(e.target.value) }} id="vat" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- email --> */}
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" onChange={(e) => { setEmail(e.target.value) }} id="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Phone --> */}
            <div>
              <label for="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" onChange={(e) => { setPhone(e.target.value) }} id="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Website --> */}
            <div>
              <label for="website" className="block text-sm font-medium text-gray-700">Website</label>
              <input type="url" onChange={(e) => { setWebsite(e.target.value) }} id="website" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Groups --> */}

            <div className="relative">
              <label for="groups" className="block text-sm font-medium text-gray-700">Groups</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  onChange={(o) => {
                    const arr = o.map((op) => op.value)
                    setSelectedGroups(arr)
                  }}
                  options={groups.map((g)=>{
                   return {value:g,label:g}
                  })}
                />
            </div>

            {/* <!-- Currency and Default Language in one row --> */}
            <div className="flex flex-row justify-between items-center space-x-2 w-full ">
              {/* <!-- Currency --> */}

              <div className="relative inline-block text-left w-1/2">
                <label htmlFor="" className="block text-sm font-medium text-gray-700 ">currency</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  onChange={(o) => {
                    const arr = o.map((op) => op.value)
                    setCurrency(arr)
                  }}
                  options={[{ label: "USD", value: "$" }, { label: "INR", value: "₹" }]}
                />
              </div>


              {/* <!-- Default Language --> */}
              <div className="w-1/2">
                <label for="language" className="block text-sm font-medium text-gray-700">Default Language</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  onChange={(o) => {
                    const arr = o.map((op) => op.value)
                    setLanguage(arr)
                  }}
                  options={defaultLanguages.map((op) => {
                    return { label: op, value: op }
                  })}
                />
              </div>
            </div>

            {/* <!-- Address --> */}
            <div>
              <label for="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" onChange={(e) => { setAddress(e.target.value) }} id="address" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- City --> */}
            <div>
              <label for="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" onChange={(e) => { setCity(e.target.value) }} id="city" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- State --> */}
            <div>
              <label for="state" className="block text-sm font-medium text-gray-700">State</label>
              <input type="text" onChange={(e) => { setState(e.target.value) }} id="state" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Zip Code --> */}
            <div>
              <label for="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" onChange={(e) => { setZipCode(e.target.value) }} id="zip" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>

            {/* <!-- Country --> */}
            <div>
              <label for="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" onChange={(e) => { setCountry(e.target.value) }} id="country" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <div className="mt-6  w-full md:w-[45%] flex p-2 justify-between md:justify-end  md:float-right">
            <button type="submit" onClick={handleSubmit} className=" bg-[#27004a] text-white px-2 py-1 rounded-md shadow-sm  focus:ring-4 focus:ring-opacity-50">
              Save</button>
          </div>
        </form>
        {/* <!-- Form ends --> */}
      </div>

    </div>
  );
}

export default AddNewClient;