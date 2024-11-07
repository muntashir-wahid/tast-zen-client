import TaskCard from "./TaskCard";

const TaskStatus = ({ status: { name: statusName, value: statusValue } }) => {
  return (
    <div className="flex-shrink-0 bg-[#F2F4F7] w-[400px] px-3 pt-4 h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
      <header className="bg-[#F2F4F7] flex justify-between items-center sticky px-2 py-3 -top-[17px] z-50">
        <h3 className="text-lg font-semibold text-gray-700">{statusName}</h3>
        <div>
          <span className="bg-gray-200 text-center px-2 py-1 rounded-md">
            0
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3 h-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <TaskCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
