export const metadata = {
  title: "Task List-TaskZen ",
};

const TasksLayout = ({ children }) => {
  return (
    <main className="h-[95vh] overflow-x-auto mx-6 my-4 px-4  pt-6 pb-2 bg-white shadow shadow-slate-400 rounded-md border">
      {children}
    </main>
  );
};

export default TasksLayout;
