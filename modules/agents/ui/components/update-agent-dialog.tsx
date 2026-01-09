import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentsForm } from "./agents-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValues: AgentGetOne;
}


export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValues
}: UpdateAgentDialogProps) => {
    return (
        <ResponsiveDialog 
        title="Edit Agent"
        description="Edit current agent"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentsForm
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
            initialValues={initialValues}
            />
        </ResponsiveDialog>
    )
}