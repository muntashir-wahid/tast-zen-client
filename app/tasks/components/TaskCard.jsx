import { format } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  MessageCircleMore,
  NotepadText,
  Paperclip,
} from "lucide-react";
import { useState } from "react";
import AddAttachment from "./AddAttachment";

const TaskCard = ({
  task: {
    uid,
    clientName,
    assigneeName,
    description,
    status,
    totalAttachments,
    createdAt,
  },
  refetchTask,
}) => {
  const [openAttachmentAddModal, setOpenAttachmentAddModal] = useState(false);
  return (
    <>
      <div className="bg-white px-2 py-3 flex flex-col gap-4 rounded-sm">
        {/* Task Card Header */}
        <header className="flex justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>
                {clientName.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-medium text-gray-800">{clientName}</p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>
                {assigneeName.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-medium text-gray-800">{assigneeName}</p>
          </div>
        </header>

        {/* Task Card Body */}
        <div className="flex justify-between">
          <p className="text-gray-600 font-medium truncate">{description}</p>

          <div className="bg-[#E8EEF3] text-center p-1 rounded-md self-start flex items-center">
            <NotepadText size={18} />
            <span className="text-sm">1/2</span>
          </div>
        </div>

        {/* Task Card Footer */}
        <div className="flex items-center justify-evenly gap-2">
          <div className="flex gap-1 items-center">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User Avatar"
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <span className="bg-[#E8EEF3] text-center p-2 rounded-full">
              12+
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <MessageCircleMore size={20} />
            <span className="text-sm text-gray-600">15</span>
          </div>

          <div className="flex gap-1 items-center">
            <button onClick={() => setOpenAttachmentAddModal(true)}>
              <Paperclip size={20} />
            </button>
            <span className="text-sm text-gray-600">{totalAttachments}</span>
          </div>

          <div className="flex gap-1 items-center">
            <CalendarDays size={20} />
            <span className="text-sm text-gray-600">
              {format(createdAt, "P")}
            </span>
          </div>
        </div>
      </div>

      {openAttachmentAddModal ? (
        <AddAttachment
          openAttachmentAddModal={openAttachmentAddModal}
          setOpenAttachmentAddModal={setOpenAttachmentAddModal}
          taskUid={uid}
          refetchTask={refetchTask}
        />
      ) : null}
    </>
  );
};

export default TaskCard;
