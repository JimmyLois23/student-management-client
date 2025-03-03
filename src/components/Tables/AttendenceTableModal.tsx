import React, { useState } from "react";

const data = [
  {
    date: "6 December",
    attendance: "Present",
  },
  {
    date: "7 December",
    attendance: "Present",
  },
  {
    date: "8 December",
    attendance: "Present",
  },
  {
    date: "9 December",
    attendance: "Present",
  },
];

interface TypeModal {
  openAttendenceModal: boolean;
  handleCloseAttendenceModal: () => void;
}

const AttendenceTableModal: React.FC<TypeModal> = ({
  openAttendenceModal,
  handleCloseAttendenceModal,
}) => {
  const [searchItem, setSearchItem] = useState("");

  const filteredSearch = data.filter((item) =>
    item.date.toLowerCase().includes(searchItem.toLowerCase())
  );

  if (!openAttendenceModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-5">
      <div className="w-full max-w-2xl rounded-lg border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="p-6">
          <div className="mb-6">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-gray-500 dark:fill-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search by date..."
                  onChange={(e) => setSearchItem(e.target.value)}
                  value={searchItem}
                  className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-blue-400"
                />
              </div>
            </form>
          </div>

          <div className="overflow-auto max-h-96">
            <div className="grid grid-cols-2 sm:grid-cols-3 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
              <div className="p-3 font-semibold text-center text-gray-700 dark:text-gray-300">
                Date
              </div>
              <div className="p-3 font-semibold text-center text-gray-700 dark:text-gray-300">
                Attendance
              </div>
            </div>

            {filteredSearch.length > 0 ? (
              filteredSearch.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 sm:grid-cols-3 border-b border-gray-300 dark:border-gray-600 ${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  }`}
                >
                  <div className="p-3 text-center text-gray-700 dark:text-gray-300">
                    {item.date}
                  </div>
                  <div className="p-3 text-center text-gray-700 dark:text-gray-300">
                    {item.attendance}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-3 text-center text-gray-500 dark:text-gray-400">
                No results found.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end p-4">
          <button
            onClick={handleCloseAttendenceModal}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendenceTableModal;
