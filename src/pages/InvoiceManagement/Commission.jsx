import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import UniversityModul_university_data from "@/data/UniversityModul-university-data";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import down from "../../../public/img/downIcon.svg";
import vector from "../../../public/img/vector.svg";
import print from "../../../public/img/print.svg";
import Commission_voice_data from "@/data/Commission-voice-data";

export function Commission() {
  return (
    <div className="mt-[30px] w-full bg-[#E8E9EB]">
      <div>
        <div className=" rounded-[34px] bg-white p-2 xl:p-12">
          <div className="my-3 flex w-full flex-row items-center justify-between gap-3 py-5">
            <p className=" text-3xl font-bold text-black">Commission Invoice</p>
            <NavLink to="createInvoice">
              <Button className=" flex h-[60px] flex-row items-center justify-center rounded-2xl bg-[#280559] p-2">
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-base font-medium normal-case text-white">
                  Add New Invoice
                </p>
              </Button>
            </NavLink>
          </div>
          <div className=" my-3 grid grid-cols-1 justify-between gap-3 py-5 xl:grid-cols-3">
            <form className="col-span-2 w-full">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-md border bg-gray-50 py-3 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
            </form>
            <div className="col-span-1 flex flex-row gap-4">
              <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                <img className="w-[20px]" src={filterIcon} alt="..." />
                <p className="mx-3 ">Filters</p>
              </button>
              <Menu>
                <MenuHandler>
                  <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                    <img className="w-[20px]" src={down} alt="..." />
                    <p className="mx-3 ">Export</p>
                  </button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Export as .csv</MenuItem>
                  <MenuItem>Export as .xlsx</MenuItem>
                </MenuList>
              </Menu>
              <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                <img className="w-[20px]" src={print} alt="..." />
                <p className="mx-3 ">Print</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-[33px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  ></th>

                  <th
                    scope="col"
                    className="w-[83px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="w-[83px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="w-[83px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-[346px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="w-[346px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="w-[346px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="w-[113px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-center text-lg font-bold text-gray-500  "
                  >
                    action
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-left text-lg font-bold text-gray-500  "
                  >
                    Option
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Commission_voice_data.map((items) => (
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      <Checkbox />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.ID}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.Date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.Recipient}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.Email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.Service}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center text-lg text-gray-800">
                      {items.Amount}
                    </td>
                    <td
                      className={`text-${items.color} whitespace-nowrap px-6 py-4 text-sm font-semibold`}
                    >
                      {items.Status}
                    </td>
                    <td className=" textpy-4 whitespace-nowrap text-center text-lg font-medium">
                      <Button
                        variant="outlined"
                        className=" rounded-2xl px-5 py-2"
                      >
                        <p className=" m-0 justify-center p-0 text-center">
                          view
                        </p>
                      </Button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium">
                      {items.option}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 ">
            <p className="px-5 text-base text-[#92929D]">
              <span className="text-[#280559]">1</span>-5 of 56
            </p>
            <div className="flex flex-row items-center justify-center">
              <p className="text-base text-[#92929D]">The page you’re on</p>
              <div className=" w-[77px]">
                <Menu>
                  <MenuHandler>
                    <button className=" flex h-[40px] w-[77px] flex-row items-center justify-center rounded-2xl shadow-lg outline-1 outline-[#CBD2DC]">
                      <p className="mx-3">1</p>
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg outline-2 outline-black">
                <img src={vector} alt="..." />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg outline-2 outline-black">
                <img className=" rotate-180" src={vector} alt="..." />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commission;
