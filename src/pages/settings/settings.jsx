import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import search from '../../../public/img/search.png';
import { Checkbox } from "@material-tailwind/react";
import settingData from '@/data/settings-table-props';
import { NavLink } from "react-router-dom";
import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import Vector from "../../../public/img/Vector.png";
import filterIcon from '../../../public/img/filterIcon.svg';

import { 
    Button,
    Menu,
      MenuHandler,
      MenuList,
      MenuItem,
  } from "@material-tailwind/react";



export function Settings() {
    const title=[
        {
            name:'User',
            id:'user'
        },
        {
            name:'Branch',
            id:'user'
        },
        {
            name:'Profile',
            id:'user'
        },
        {
            name:'Status',
            id:'status'
        },
        {
            name:'Properties',
            id:'properties'
        },
        {
            name:'Activity Log',
            id:'log'
        }
    ]

  return (
    <div className="mt-[30px] w-full bg-[#E8E9EB] flex flex-col gap-8">
 
        <Card>
            <CardBody>
            <div className="w-full flex max-md:flex-col">
                    
                    <Typography href='/#' className= 'mb-[54px] w-full flex justify-between space-x-3 text-[#92929D] ml-8 ' variant="h5" color="blue-gray">
                        <p className="text-[#280559] text-[36px] text-center">Activity Log</p> 
                        <Button className="flex text-center text-flex justify-center h-[50px] rounded-lg text-white p-3 w-[180px] items-center bg-[#280559]">
                            <img src={plus} alt='Add'/>
                            <p className="ml-1 text-center" >Create New User</p>
                        </Button> 
                    </Typography>
            </div>
            <div className=" pl-12 rounded-lg flex w-full justify-between">
                {/* <Input size="lg" className="w-full" htmlFor="hs-table-search" label="🔍 Search user"/> */}
                <form className="w-full px-4">
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
                <button className=" shadow-xl w-[135px] h-[57px] rounded-2xl outline outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center hover:shadow-sm-light">
                    <img className="w-[20px]" src={filterIcon} alt="..."/>
                    <p className="mx-3 ">Filters</p>
                </button>
            </div>
            </CardBody>
            <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border-none rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        className="w-[30px] items-center flex justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </th>
                                    <th
                                        className="w-[200px] py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Date
                                    </th>
                                    <th
                                        className="w-[83px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Time
                                    </th>
                                    <th
                                        className="w-[346px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Action
                                    </th>
                                    <th
                                        className="w-[113px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        User
                                    </th>
                                    <th
                                        className="w-[115px] px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                    >
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {settingData.map((items) => (
                                <tr>
                                    <td
                                        className="w-[30px] items-center justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </td>
                                    <td className="py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.date}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.time}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.action}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-semibold text-left whitespace-nowrap">
                                        {items.role}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.user}
                                    </td>
                                </tr>
                                ))}  
                                
                            </tbody>
                        </table>
                        <div className="flex w-[90%] justify-between ml-16 items-center">
                            <div className="w-[50%] whitespace-nowrap items-center pl-2">
                                <p className=" text-base text-[#BEBFC3]" ><span className="text-[#280559]">1</span> - 5 of 56</p>
                            </div>
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
            </div>
        </Card>
    </div>
  );
}

export default Settings;
