import { cn } from "../utils/common.util";
import { Button } from "@jimib/shaw-design";

export const Modal = ({
  children,
  onClose,
  className,
}: {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
      {onClose && (
        <Button
          className="absolute top-0 right-4"
          variant="ghost"
          onClick={onClose}
        >
          Close
        </Button>
      )}
      <div
        className={cn(
          "bg-white rounded-lg px-6 py-2 w-full mx-4 relative flex flex-col gap-2 max-h-[90vh] overflow-y-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
