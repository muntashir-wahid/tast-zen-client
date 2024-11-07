import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  MessageCircleMore,
  NotepadText,
  Paperclip,
} from "lucide-react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white px-2 py-3 flex flex-col gap-4 rounded-sm">
      {/* Task Card Header */}
      <header className="flex justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>
          <p className="font-medium text-gray-800">Client Name</p>
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>
          <p className="font-medium text-gray-800">Sakib Khan</p>
        </div>
      </header>

      {/* Task Card Body */}
      <div className="flex justify-between">
        <p className="text-gray-600 font-medium truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          veritatis eum commodi.
        </p>

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
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>
          <span className="bg-[#E8EEF3] text-center p-2 rounded-full">12+</span>
        </div>

        <div className="flex gap-1 items-center">
          <MessageCircleMore size={20} />
          <span className="text-sm text-gray-600">15</span>
        </div>

        <div className="flex gap-1 items-center">
          <Paperclip size={20} />
          <span className="text-sm text-gray-600">5</span>
        </div>

        <div className="flex gap-1 items-center">
          <CalendarDays size={20} />
          <span className="text-sm text-gray-600">30-12-2022</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
