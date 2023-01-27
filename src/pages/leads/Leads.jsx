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
import LeadData from "@/data/lead-table-props";
import UniversityModul_university_data from "@/data/UniversityModul-university-data";
import plus from "../../../public/img/plus.svg";
import filterIcon from "../../../public/img/filterIcon.svg";
import down from "../../../public/img/downIcon.svg";
import vector from "../../../public/img/vector.svg";

export function Leads() {
  return (
    <div className="mt-12 w-full bg-[#E8E9EB]">
      <div className="my-10 grid grid-cols-1">
        <p className=" text-4xl font-semibold text-[#280559]">Leads Module</p>
        <p className=" font text-base text-[#9898A3]">View all leads</p>
      </div>
      <div>
        <div className=" mr-8 rounded-[34px] bg-white p-2 xl:p-12">
          <div className=" my-0 flex w-full flex-row items-center justify-between gap-3 pt-0 pb-5">
            <p className="text-[32px] font-bold text-black">Leads</p>
            <NavLink to="createLead">
              <Button className="flex h-[60px] w-[174px] flex-row items-center justify-center rounded-2xl bg-[#280559]">
                <img className="m-1 w-[20px]" src={plus} alt="..." />
                <p className="m-1 text-base font-medium normal-case text-white">
                  Add New
                </p>
              </Button>
            </NavLink>
          </div>
          <div className="my-3 grid grid-cols-1 justify-between gap-3 rounded-[20px] bg-[#F8F9FB] py-5 px-6 xl:grid-cols-5">
            <form className="col-span-4 w-full">
              <div className="relative pt-1">
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
                  className="w-full rounded-[15px] border border-gray-600/[0.3] bg-white py-3 pt-4 pl-12 pr-4 text-gray-500 focus:bg-white"
                />
              </div>
            </form>
            <div className=" col-span-1 flex flex-row justify-between gap-4">
              <button className=" flex h-[57px] w-[135px] flex-row items-center justify-center rounded-2xl shadow-xl outline outline-1 outline-[#CBD2DC] hover:shadow-sm-light">
                <img className="w-[20px]" src={filterIcon} alt="..." />
                <p className="mx-3 text-[16px] ">Filters</p>
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
            </div>
          </div>
          <div className="flex flex-col overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-[50px] py-3 text-left text-lg font-bold text-gray-500  "
                  ></th>
                  <th
                    scope="col"
                    className="w-[200px] py-3 text-left text-lg font-bold text-gray-500  "
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
                    className="w-[113px] px-6 py-3 text-center text-lg font-bold text-gray-500  "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-center text-lg font-bold text-gray-500  "
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="w-[115px] px-6 py-3 text-center text-lg font-bold text-gray-500  "
                  >
                    Option
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {LeadData.map((items) => (
                  <tr>
                    <td className="whitespace-nowrap py-4 text-sm font-medium text-gray-800">
                      <div className="flex h-7 items-center">
                        <Checkbox />
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-lg font-normal text-gray-800">
                      {items.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg font-bold text-gray-800">
                      {items.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-800">
                      {items.Email}
                    </td>
                    <td className="text-center">
                      <span
                        className=" rounded-[100px] px-5 py-2 text-center text-xs font-medium normal-case"
                        style={{
                          color: `${items.color}`,
                          backgroundColor: `${items.color}10`,
                        }}
                      >
                        {items.status}
                      </span>
                    </td>
                    <td className=" whitespace-nowrap py-4 text-center  font-medium">
                      <Button
                        variant="outlined"
                        className=" rounded-2xl border border-[#280559] px-5 py-2"
                      >
                        <p className=" m-0 justify-center p-0 text-center text-xs text-[#280559]">
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
          <div className="mt-6 grid grid-cols-1 items-center justify-between gap-[200px] rounded-[20px] bg-[#F8F9FB] py-4 px-6 xl:grid-cols-2">
            <p className="px-5 text-base text-[#92929D]">
              <span className="text-[#280559]">1</span>-5 of 56
            </p>
            <div className="flex flex-row items-center justify-center">
              <p className="mr-3 text-base text-[#92929D]">
                The page you’re on
              </p>
              <div className=" mr-2 w-[77px]">
                <Menu>
                  <MenuHandler>
                    <button className="flex h-[40px] w-[77px] flex-row items-center justify-center rounded-2xl border border-[#CBD2DC] shadow-lg">
                      <p className="mx-3 text-[#280559]">1</p>
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
              <button className="mr-2 flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBD2DC] shadow-lg outline-2 outline-black">
                <img src={vector} alt="..." />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBD2DC] shadow-lg outline-2 outline-black">
                <img className=" rotate-180" src={vector} alt="..." />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
