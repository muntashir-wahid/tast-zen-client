import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import APIKit from "@/lib/apiKit";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const AddAttachment = ({
  openAttachmentAddModal,
  setOpenAttachmentAddModal,
  taskUid,
  refetchTask,
}) => {
  const [file, setFile] = useState(null);

  const {
    data,
    isLoading,
    refetch: refetchAttachment,
  } = useQuery({
    queryKey: [`tasks/${taskUid}/attachments`],
    queryFn: () => APIKit.tasks.getTaskAllAttachments(taskUid),
  });

  const handleAttachmentUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const promise = APIKit.tasks
      .addTaskAttachment(taskUid, formData)
      .then((data) => {
        console.log(data);

        refetchTask();
        refetchAttachment();
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setFile(null);
      });

    return toast.promise(promise, {
      loading: "Uploading Attachment...",
      success: "New Attachment added successfully!",
      error: "Something went wrong!",
    });
  };

  return (
    <Dialog
      open={openAttachmentAddModal}
      onOpenChange={setOpenAttachmentAddModal}
    >
      <DialogContent className="max-w-xl max-h-[460px] overflow-y-auto custom-scrollbar">
        <DialogHeader>
          <DialogTitle>Attachments</DialogTitle>
        </DialogHeader>
        <div className="flex items-end gap-2">
          <div className="space-y-2 text-sm w-full">
            <Label htmlFor="file" className="text-sm font-medium">
              New Attachment
            </Label>
            <Input
              onChange={(event) => setFile(event.target.files[0])}
              file={file}
              id="file"
              type="file"
              placeholder="File"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            onClick={handleAttachmentUpload}
          >
            Add
          </Button>
        </div>

        <div>
          <h6 className="text-lg font-bold text-gray-600 mb-2">
            All Attachments
          </h6>
          <ul className="list-disc list-inside">
            {isLoading ? (
              "Loading Attachments..."
            ) : (
              <>
                {data?.data.attachments?.map((attachment) => (
                  <li key={attachment.uid}>
                    <Link
                      className="text-blue-400 underline"
                      download={true}
                      target="_blank"
                      href={attachment.fileUrl}
                    >
                      {attachment.fileName}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>

        <DialogFooter>
          <Button
            onClick={() => setOpenAttachmentAddModal(false)}
            type="submit"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAttachment;
