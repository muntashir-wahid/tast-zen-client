"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";

import APIKit from "@/lib/apiKit";

import { Button } from "@/components/ui/button";

import AddNewTask from "./AddNewTask";
import TaskCard from "./TaskCard";

const TaskStatus = ({ status: { name: statusName, value: statusValue } }) => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`tasks-${statusValue}`],
    queryFn: () => APIKit.tasks.getTasksOnStatus({ status: statusValue }),
  });

  if (isLoading) {
    return (
      <div className="flex-shrink-0 bg-[#F2F4F7] w-[400px] px-3 pt-4 h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
        Loading {statusName} Tasks...
      </div>
    );
  }

  const {
    data: { tasks },
    count,
  } = data;

  return (
    <>
      <div className="flex-shrink-0 bg-[#F2F4F7] w-[400px] px-3 pt-4 h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
        <header className="bg-[#F2F4F7] flex justify-between items-center sticky px-2 py-3 -top-[17px] z-50">
          <h3 className="text-lg font-semibold text-gray-700">{statusName}</h3>
          <div className="flex items-center gap-2">
            <Button
              title={`Add New Task on Status ${statusName}`}
              variant="outline"
              size="icon"
              onClick={() => setOpenAddTaskModal(true)}
            >
              <Plus />
            </Button>
            <span className="bg-gray-200 text-center px-2 py-1 rounded-md">
              {count}
            </span>
          </div>
        </header>

        <div className="flex flex-col gap-3 h-full">
          {tasks.map((task) => (
            <TaskCard key={task.uid} task={task} refetchTask={refetch} />
          ))}
        </div>
      </div>

      <AddNewTask
        openAddTaskModal={openAddTaskModal}
        setOpenAddTaskModal={setOpenAddTaskModal}
        status={statusValue}
        refetchTask={refetch}
      />
    </>
  );
};

export default TaskStatus;
