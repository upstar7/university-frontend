import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Select, Option, Button, Input } from "@material-tailwind/react";
import universityLogo from "../../../public/img/universityLogo.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
export function CreateUniversity() {
  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  return (
    <div className="mt-12 w-full bg-[#E8E9EB] ">
      <div className="relative my-10 grid grid-cols-1">
        <p className=" text-4xl font-semibold text-[#280559]">
          Create University
        </p>

        <p className=" font text-base text-[#9898A3]">
          Create or edit university
        </p>
        <NavLink className="absolute right-8 bottom-2" to="university">
          <Button className="rounded-[15px]  bg-[#280559]">
            <div className="flex flex-row items-center justify-center px-[33px] py-[10px]">
              <img src={saveIcon} alt="..." />
              <p className="px-[11px] text-base font-medium normal-case text-white ">
                Save Changes
              </p>
            </div>
          </Button>
        </NavLink>
      </div>
      <div className="mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">
          University Details
        </p>
        <div className=" flex flex-row gap-4">
          <p className="mr-[70px] text-base font-semibold text-[#333333]">
            University Logo
          </p>
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-3 rounded-2xl outline outline-1 outline-[#CBD2DC]"
              src={universityLogo}
              alt="..."
            />
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <button className="w-[150px] ">
                <p className="rounded-2xl px-[35px] py-3 text-sm outline outline-1 outline-[#CBD2DC]">
                  Upload Logo
                </p>
              </button>
            </FileUploader>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3 ">
          <div>
            <p className=" my-4 text-base font-semibold">University Name</p>
            <Input size="lg" className="h-[57px]" label="University Name"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">University Type</p>
            <Select className="h-[57px]" label="University Type">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Counsellor Name</p>
            <Input className="h-[57px]" label="Counsellor Name"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Phone Number</p>
            <Input className="h-[57px]" label="Phone Number"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Email Address</p>
            <Input className="h-[57px]" label="Email Address"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Add Field</p>
            <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
              Click to add more field
            </Button>
          </div>
        </div>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">
          Main Campus
        </p>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3">
          <div>
            <p className=" my-4 text-base font-semibold">Compus Name</p>
            <Input className="h-[57px]" label="University Name"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Address (line 1)</p>
            <Input className="h-[57px]" label="Address (line 1)"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Address (line 2)</p>
            <Input className="h-[57px]" label="Address (line 2)"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Compus Phone Number</p>
            <Input className="h-[57px]" label="+91 123 456 789 "></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Email Address</p>
            <Input className="h-[57px]" label="example@email.com"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Add More Field</p>
            <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
              Click to add more field
            </Button>
          </div>
        </div>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">Campus 2</p>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3 ">
          <div>
            <p className=" my-4 text-base font-semibold">Compus Name</p>
            <Input className=" h-[57px]" label="Compus Name"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Address (line 1)</p>
            <Input className="h-[57px]" label="Address (line 1)"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Address (line 2)</p>
            <Input className="h-[57px]" label="Address (line 2)"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Compus Phone Number</p>
            <Input className="h-[57px]" label="+91 123 456 789 "></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Email Address</p>
            <Input className="h-[57px]" label="example@email.com"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Add More Field</p>
            <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
              Click to add more field
            </Button>
          </div>
        </div>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">Add Campus</p>

        <div className="flex items-center justify-center">
          <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
            Click to add more field
          </Button>
        </div>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">
          Fees and Commissions
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 laptop:grid-cols-3">
          <div>
            <p className=" my-4 text-base font-semibold">
              Visa Application Fee
            </p>
            <form className="">
              <div className="relative">
                <div className=" absolute top-[1px] left-[1px]   rounded-md bg-[#E5E8ED]">
                  <p className="p-[12px] text-base font-medium text-[#333333]">
                    USD:
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full rounded-md border-[#E5E8ED] bg-gray-50 py-3  pl-16 pr-4  text-gray-500 outline-none"
                />
              </div>
            </form>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Admission Fee</p>
            <form className="">
              <div className="relative">
                <div className=" absolute top-[1px] left-[1px]   rounded-md bg-[#E5E8ED]">
                  <p className="p-[12px] text-base font-medium text-[#333333]">
                    USD:
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full rounded-md border-[#E5E8ED] bg-gray-50 py-3  pl-16 pr-4  text-gray-500 outline-none"
                />
              </div>
            </form>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">
              QETC Service Charges
            </p>
            <form className="">
              <div className="relative">
                <div className=" absolute top-[1px] left-[1px]   rounded-md bg-[#E5E8ED]">
                  <p className="p-[12px] text-base font-medium text-[#333333]">
                    USD:
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full rounded-md border-[#E5E8ED] bg-gray-50 py-3  pl-16 pr-4  text-gray-500 outline-none"
                />
              </div>
            </form>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Commission Duration</p>
            <Select className="h-[57px]" label="Select Duration">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Add More Field</p>
            <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
              Click to add more field
            </Button>
          </div>
        </div>
      </div>
      <NavLink to="university">
        <Button className="rounded-[15px]  bg-[#280559]">
          <div className="flex flex-row items-center justify-center px-[33px] py-[10px]">
            <img src={saveIcon} alt="..." />
            <p className="px-[11px] text-base font-medium normal-case text-white ">
              Save Changes
            </p>
          </div>
        </Button>
      </NavLink>
    </div>
  );
}

export default CreateUniversity;
