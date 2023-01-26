import React from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Button,
  Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Checkbox
} from "@material-tailwind/react";
import UniversityModul_university_data from "@/data/UniversityModul-university-data";
import plus from '../../../public/img/plus.svg';
import filterIcon from '../../../public/img/filterIcon.svg';
import down from '../../../public/img/downIcon.svg';
import vector from '../../../public/img/vector.svg';
import print from '../../../public/img/print.svg';
import Commission_voice_data from "@/data/Commission-voice-data";

export function General() {
   
    return (
        <div className="mt-[30px] w-full bg-[#E8E9EB]">
            <div>
            <div className=" bg-white p-2 xl:p-12 rounded-[34px]">
                <div className="flex flex-row w-full justify-between items-center py-5 my-3 gap-3">
                        <p className=" text-3xl text-black font-bold">General Invoice</p>
                        <NavLink to="createInvoice">
                            <Button className=" h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center p-2">
                            <img className="w-[20px] m-1" src={plus} alt='...'/>
                            <p className="m-1 text-base text-white font-medium normal-case">Add New Invoice</p>
                            </Button>
                        </NavLink>
                    </div>
                    <div className=" justify-between py-5 my-3 gap-3 grid grid-cols-1 xl:grid-cols-3">
                        <form className="w-full col-span-2">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
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
                                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                                />
                            </div>
                        </form>
                        <div className="flex flex-row gap-4 col-span-1">
                            <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                <img className="w-[20px]" src={filterIcon} alt="..."/>
                                <p className="mx-3 ">Filters</p>
                            </button>
                            <Menu>
                                <MenuHandler>
                                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                    <img className="w-[20px]" src={down} alt="..."/>
                                    <p className="mx-3 ">Export</p>
                                </button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Export as .csv</MenuItem>
                                    <MenuItem>Export as .xlsx</MenuItem>
                                </MenuList>
                            </Menu>
                            <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                                <img className="w-[20px]" src={print} alt="..."/>
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
                                        className="w-[33px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        
                                    </th>
                                                                    
                                    <th
                                        scope="col"
                                        className="w-[83px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[83px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[83px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[346px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[346px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Service
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[346px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[113px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[115px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                                    >
                                        action
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-[115px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                                    >
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Commission_voice_data.map((items) => (
                                <tr>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        <Checkbox/>
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.ID}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Date}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Recipient}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Email}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                                        {items.Service}
                                    </td>
                                    <td className="px-6 py-4 text-lg text-gray-800 text-center whitespace-nowrap">
                                        {items.Amount}
                                    </td>
                                    <td className={`text-${items.color} px-6 py-4 text-sm font-semibold whitespace-nowrap`}>
                                        {items.Status}
                                    </td>
                                    <td className=" textpy-4 text-lg font-medium text-center whitespace-nowrap">
                                        <Button variant="outlined" className=" rounded-2xl px-5 py-2"><p className=" text-center justify-center p-0 m-0">view</p></Button>
                                    </td>
                                    <td className="px-6 py-4 text-lg font-medium text-center whitespace-nowrap">
                                        {items.option}
                                    </td>
                                </tr>
                                ))}  
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 ">
                        <p className="text-base text-[#92929D] px-5"><span className="text-[#280559]">1</span>-5 of 56</p>  
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-base text-[#92929D]">The page you’re on</p>
                            <div className=" w-[77px]">
                                <Menu>
                                    <MenuHandler>
                                    <button className=" shadow-lg w-[77px] h-[40px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
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
                            <button className="w-10 h-10 rounded-xl shadow-lg outline-2 outline-black flex justify-center items-center"><img src={vector} alt="..."/></button>
                            <button className="w-10 h-10 rounded-xl shadow-lg outline-2 outline-black flex justify-center items-center"><img className=" rotate-180" src={vector} alt="..."/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General;