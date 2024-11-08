import { useFormik } from "formik";
import { object, string } from "yup";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import APIKit from "@/lib/apiKit";

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
import { Textarea } from "@/components/ui/textarea";

const taskSchema = object({
  clientName: string().required("Client Name is Required"),
  assigneeName: string().required("Assignee Name is Required"),
  description: string().required("Description is Required"),
});

const AddNewTask = ({
  openAddTaskModal,
  setOpenAddTaskModal,
  status,
  refetchTask,
}) => {
  const formik = useFormik({
    initialValues: {
      clientName: "",
      assigneeName: "",
      description: "",
      status,
    },
    validationSchema: taskSchema,
    onSubmit: async (values) => {
      try {
        await APIKit.tasks.addTask(values);
        refetchTask();
        toast.success("New task created successfully!");
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong!");
      } finally {
        formik.setFieldValue("clientName", "");
        formik.setFieldValue("assigneeName", "");
        formik.setFieldValue("description", "");
        formik.setTouched("description", false);
        setOpenAddTaskModal(false);
      }
    },
  });

  return (
    <Dialog open={openAddTaskModal} onOpenChange={setOpenAddTaskModal}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                type="text"
                id="clientName"
                name="clientName"
                placeholder="Abul Kalam"
                onChange={formik.handleChange}
                value={formik.values.clientName}
              />
              {formik.touched.clientName && formik.errors.clientName ? (
                <p className="text-sm font-medium text-red-600">
                  {formik.errors.clientName}
                </p>
              ) : null}
            </div>
            <div className="space-y-1">
              <Label htmlFor="assigneeName">Assignee Name</Label>
              <Input
                type="text"
                id="assigneeName"
                name="assigneeName"
                placeholder="Salman Khan"
                onChange={formik.handleChange}
                value={formik.values.assigneeName}
              />
              {formik.touched.assigneeName && formik.errors.assigneeName ? (
                <p className="text-sm font-medium text-red-600">
                  {formik.errors.assigneeName}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="w-full"
                id="description"
                name="description"
                placeholder="Some description about the task..."
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <p className="text-sm font-medium text-red-600">
                  {formik.errors.description}
                </p>
              ) : null}
            </div>
          </div>

          <DialogFooter>
            <Button disabled={formik.isSubmitting} type="submit">
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  Please Wait
                </>
              ) : (
                "Add Task"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
