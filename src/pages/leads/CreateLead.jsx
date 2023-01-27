import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Select, Option, Button, Input } from "@material-tailwind/react";
import universityLogo from "../../../public/img/universityLogo.svg";
import saveIcon from "../../../public/img/saveIcon.svg";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export function CreateLead() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];

  return (
    <div className="mt-12 w-full bg-[#E8E9EB]">
      <div className="relative my-10 mr-8 grid grid-cols-1">
        <p className=" text-4xl font-semibold text-[#280559]">Create Lead</p>
        <p className=" font text-base text-[#9898A3]">Create or edit lead</p>
        <NavLink className="absolute right-0 top-2" nto="leads">
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
        <div>
          <div className="mb-5 grid grid-cols-1 gap-[90px] xl:grid-cols-6">
            <p className="text-base font-semibold text-[#333333]">Photo</p>
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
            <div className="w-[420px]">
              <p className=" mb-4 text-base font-semibold">Generated ID</p>
              <Input className="h-[57px] w-full" label="Generated ID"></Input>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3">
          <div>
            <p className=" my-4 text-base font-semibold">Full Name</p>
            <Input className="h-[57px]" label="Full Name"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Passport No</p>
            <Input className="h-[57px]" label="0123 456 789"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Lead Group</p>
            <Select className="h-[57px]" label="Select Group">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Nationality/Country</p>
            <Select className="h-[57px]" label="Select Country">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Phone Number</p>
            <Input className="h-[57px]" label="Counsellor Name"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Phone Number</p>
            <Input className="h-[57px]" label="+91 0123 456 789"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Email Address</p>
            <button className=" h-[57px]">example@email.com </button>
          </div>
        </div>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">
          Program Details
        </p>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3">
          <div>
            <p className=" my-4 text-base font-semibold">School Name</p>
            <Input className="h-[57px]" label="Select University "></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">
              Type of Qualification
            </p>
            <Select className="h-[57px]" label="Select Qualification">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Selected University</p>
            <Select className="h-[57px]" label="Select University">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Interested Program</p>
            <Select className="h-[57px]" label="Select Program">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Status</p>
            <Select className="h-[57px]" label="Select Status">
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
              <Option>University</Option>
            </Select>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Cert</p>
            <Input className="h-[57px]" label="Cert"></Input>
          </div>
          <div className="my-[30px] h-[170px]">
            <p className=" my-4 text-base font-semibold">Comments With Date</p>
            <Input className="h-[143px]" label="Comments With Date"></Input>
          </div>
        </div>
        <div className="w-[420px]">
          <p className=" my-4 text-base font-semibold">Add Field</p>
          <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
            Click to add more field
          </Button>
        </div>
      </div>
      <div className="my-[30px] mr-8 rounded-[34px] bg-white p-[39px]">
        <p className="my-8 text-2xl font-semibold text-[#333333]">
          Referral Details
        </p>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 laptop:grid-cols-3">
          <div>
            <p className=" my-4 text-base font-semibold">Referral Name Name</p>
            <Input className="h-[57px]" label="Select University"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Email</p>
            <Input className="h-[57px]" label="example@email.com"></Input>
          </div>
          <div>
            <p className=" my-4 text-base font-semibold">Add Field</p>
            <Button className="h-[57px] w-full rounded-[7px] bg-[#F8F9FB] px-[11px] text-center text-[16px] font-semibold normal-case text-[#BEBFC3]">
              Click to add more field
            </Button>
          </div>
        </div>
      </div>

      <NavLink to="leads">
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

export default CreateLead;
