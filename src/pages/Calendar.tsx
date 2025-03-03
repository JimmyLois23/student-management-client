import { useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "./Modal";
import "./CalendarCustom.css";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Function to handle clicking a date
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const type = localStorage.getItem("type");
  return (
    <>
      {type !== "Student" && <Breadcrumb pageName="Calendar" />}

      <div className="flex items-center justify-center  p-8 rounded-lg ">
        <Calender
          onChange={(value) => {
            if (value instanceof Date) {
              handleDateClick(value);
            }
          }}
          value={value}
          className="w-full"
          tileClassName={({ date, view }) =>
            view === "month" ? "text-lg p-8 text-white" : ""
          }
        />

        {modalOpen && selectedDate && (
          <Modal date={selectedDate} onClose={() => setModalOpen(false)} />
        )}
      </div>
    </>
  );
};

export default Calendar;
