
import { Link } from "react-router-dom";

const Tickets = () => {
  return (
    <div>

      <Link
        to="/new-ticket"
        className="px-4 py-2 bg-[#511992] text-white rounded-lg inline-block"
      >
        + New Ticket
      </Link>

      <div>
        <div className="p-4 shadow mt-8 rounded-xl">
          <div className="flex  justify-between items-center mb-4 max-[500px]:block">
            <div className="flex space-x-2 text-[#B1B1B1]">
              <select className="border w-[4.5rem] border-[#B1B1B1] rounded p-2 bg-white">
                <option>25</option>
              </select>
              <button className=" text-[#B1B1B1] border border-[#B1B1B1] px-4 py-2 rounded">
                Export
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded p-2 w-64 max-[500px]:mt-4"
              />
            </div>
          </div>

          <div className="overflow-x-auto ">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border-t border-r border-[#DBDBDB]">
                    #
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Subject
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Tags{" "}
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Department
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Services{" "}
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Contact
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Status
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Last Reply
                  </th>
                  <th className="px-4 py-4 font-normal text-[#B1B1B1] text-[16px]  border-b text-center border border-[#DBDBDB]">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="px-4 py-4 text-start text-[#B1B1B1]"
                    colspan="8"
                  >
                    No entries found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
