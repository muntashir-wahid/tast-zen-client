import TaskStatus from "./TaskStatus";

const taskStatuses = [
  { name: "Incomplete", value: "INCOMPLETE" },
  { name: "To Do", value: "TO_DO" },
  { name: "Under Review", value: "UNDER_REVIEW" },
  { name: "Completed", value: "COMPLETED" },
  { name: "Overdue", value: "OVERDUE" },
];

const TasksModule = () => {
  return (
    <div className="flex gap-8 h-full w-full overflow-x-auto overflow-y-hidden custom-scrollbar">
      {taskStatuses.map((status) => (
        <TaskStatus key={status.value} status={status} />
      ))}
    </div>
  );
};

export default TasksModule;
