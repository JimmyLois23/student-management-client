import React from "react";
import TableAttendence from "./Tables/TableAttendence";

const StudentAttendence: React.FC = () => {
  return (
    <div>
      <div className="col-span-12 xl:col-span-8">
        <TableAttendence />
      </div>
    </div>
  );
};      

export default StudentAttendence;
