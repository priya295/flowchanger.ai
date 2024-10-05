
const AddNewCustomer = () =>{
  return(
<<<<<<< HEAD
<div class=" flex justify-center items-center min-h-screen">
=======
<div class="bg-gray-100 flex justify-center items-center min-h-screen">
>>>>>>> 28ce7936109530c3130352837de1036a6895762d

<div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
  <div class="mb-6">
    {/* <!-- Tabs for form sections --> */}
    <nav class="flex space-x-4 border-b">
<<<<<<< HEAD
      <a href="#" class=" py-2 hover:border-b-2 hover:text-blue-600 hover:border-blue-600 text-sm font-medium">Customer Details</a>
      <a href="#" class="text-gray-600 hover:text-blue-600 py-2 text-sm font-medium hover:border-b-2 hover:border-blue-600">Billing & Shipping</a>
=======
      <a href="#" class=" py-2 hover:border-b-2 hover:border-blue-600 text-sm font-medium">Customer Details</a>
      <a href="#" class="text-gray-600 py-2 text-sm font-medium hover:border-b-2 hover:border-blue-600">Billing & Shipping</a>
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
    </nav>
  </div>

  {/* <!-- Form starts --> */}
  <form>
    <div class="grid grid-cols-1 gap-6">
      {/* <!-- Company --> */}
      <div>
        <label for="company" class="block text-sm font-medium text-gray-700">Company *</label>
<<<<<<< HEAD
        <input type="text" id="company"  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm  focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" required />
=======
        <input type="text" id="company" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- VAT Number --> */}
      <div>
        <label for="vat" class="block text-sm font-medium text-gray-700">VAT Number</label>
<<<<<<< HEAD
        <input type="text" id="vat" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="text" id="vat" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- Phone --> */}
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
<<<<<<< HEAD
        <input type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- Website --> */}
      <div>
        <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
<<<<<<< HEAD
        <input type="url" id="website" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="url" id="website" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- Groups --> */}
      <div>
        <label for="groups" class="block text-sm font-medium text-gray-700">Groups</label>
<<<<<<< HEAD
        <input type="text" id="groups" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-400 sm:text-sm outline-none" placeholder="Nothing selected" />
=======
        <input type="text" id="groups" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Nothing selected" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- Currency and Default Language in one row --> */}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* <!-- Currency --> */}
        <div>
          <label for="currency" class="block text-sm font-medium text-gray-700">Currency</label>
<<<<<<< HEAD
          <select id="currency" class="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-400 sm:text-sm outline-none">
=======
          <select id="currency" class="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
            <option value="default">System Default</option>
            <option value="usd">USD $</option>
            <option value="inr">INR ₹</option>
          </select>
        </div>

        {/* <!-- Default Language --> */}
        <div>
          <label for="language" class="block text-sm font-medium text-gray-700">Default Language</label>
<<<<<<< HEAD
          <select id="language" class="mt-1 block w-full border border-gray-300 bg-white rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="default">System Default</option>
=======
          <select id="language" class="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="default">System Default</option>
            {/* <!-- Add other language options if needed --> */}
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
          </select>
        </div>
      </div>

      {/* <!-- Address --> */}
      <div>
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
<<<<<<< HEAD
        <input type="text" id="address" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="text" id="address" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- City --> */}
      <div>
        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
<<<<<<< HEAD
        <input type="text" id="city" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="text" id="city" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- State --> */}
      <div>
        <label for="state" class="block text-sm font-medium text-gray-700">State</label>
<<<<<<< HEAD
        <input type="text" id="state" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="text" id="state" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- Zip Code --> */}
      <div>
        <label for="zip" class="block text-sm font-medium text-gray-700">Zip Code</label>
<<<<<<< HEAD
        <input type="text" id="zip" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="text" id="zip" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>

      {/* <!-- Country --> */}
      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
<<<<<<< HEAD
        <input type="text" id="country" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none" />
=======
        <input type="text" id="country" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
      </div>
    </div>

    {/* <!-- Submit Button --> */}
<<<<<<< HEAD
    <div class="mt-6  w-full md:w-[43%] flex p-2 justify-around  md:float-right">
      <button type="submit" class=" p-1  text-gray-400 border border-gray-400 rounded-md shadow-sm h focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 ">save and create contact</button>
      <button type="submit" class=" bg-blue-600 text-white p-1 px-3 rounded-md shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">save</button>
=======
    <div class="mt-6  w-full md:w-[40%] flex p-2 justify-around  md:float-right">
      <button type="submit" class="   p-2 text-gray-400 border border-gray-400 rounded-md shadow-sm h focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 ">save and create contact</button>
      <button type="submit" class=" bg-blue-600 text-white p-2 px-3 rounded-md shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">save</button>
>>>>>>> 28ce7936109530c3130352837de1036a6895762d
    </div>
  </form>
  {/* <!-- Form ends --> */}
</div>

</div>
  );
}

export default AddNewCustomer;

