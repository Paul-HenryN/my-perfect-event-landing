import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

interface SearchInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type"> {
  buttonProps?: React.ComponentProps<typeof Button>;
}

export function SearchInput({
  className,
  buttonProps: { className: buttonClass, ...buttonProps } = {},
  ...props
}: SearchInputProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        className={cn("bg-slate-50 py-8 rounded-full pl-5 pr-28", className)}
        {...props}
      />
      <Button
        variant="primary"
        className={cn(
          "absolute right-5 top-1/2 -translate-y-1/2 rounded-full",
          buttonClass
        )}
        {...buttonProps}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
