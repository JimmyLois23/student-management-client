import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BaseUrl from "../BaseUrl/BaseUrl";

const StudentEntry: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const saveDetails = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/students/register`, {
        name,
        subject,
      });
      if (res.data.success) {
        toast.success("Student Registered Successfully");
        setName("");
        setSubject("");
      }
    } catch (error) {
      console.log("Error saving student details " + error);
      toast.error("Error saving student details ");
    }
  };

  return (
    <>
      <div className="mb-5 text-2xl font-semibold">
        <h1 className="text-xl dark:text-white p-4 rounded-md bg-gradient-to-r from-teal-800 to-teal-400 text-black">
          Create Student
        </h1>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 mt-10">
        <div className="flex justify-center items-start w-full md:w-full">
          <div className="space-y-5 w-full">
            <dl className="flex flex-col sm:flex-row gap-4 items-center ">
              <dt className="">
                <span className="block font-bold text-base text-gray-500 dark:text-neutral-500 sm:w-full">
                  Name <span className="px-1 text-red-500">*</span>
                </span>
              </dt>
              <input
                type="text"
                name="username"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="rounded-lg border border-stone-800 bg-stone-900 py-3 px-4 w-full sm:w-4/5"
              />
            </dl>

            <dl className="flex flex-col sm:flex-row gap-4 items-center">
              <dt className="">
                <span className="block font-bold text-base text-gray-500 dark:text-neutral-500 sm:w-full">
                  Course <span className="px-1 text-red-500">*</span>
                </span>
              </dt>
              <input
                type="text"
                name="password"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className="rounded-lg border border-stone-800 bg-stone-900 py-3 px-4 w-full sm:w-4/5"
              />
            </dl>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-10 sm:px-6 lg:px-0 lg:py-6 ">
        <button
          onClick={saveDetails}
          className=" py-3 px-6 rounded-lg border border-stone-400 hover:bg-stone-800 hover:text-white dark:text-white text-black"
        >
          Save User Details
        </button>
      </div>
    </>
  );
};

export default StudentEntry;
