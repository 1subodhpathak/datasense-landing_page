import * as React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = "", checked, onCheckedChange, ...props }, ref) => {
    return (
      <label className="relative inline-block w-14 h-8">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="opacity-0 w-0 h-0"
          {...props}
        />
        <span className={`absolute cursor-pointer inset-0 rounded-full bg-gray-700 transition-all duration-300
          before:absolute before:content-[''] before:h-6 before:w-6 before:left-1 before:bottom-1
          before:bg-white before:rounded-full before:transition-all before:duration-300
          ${checked ? 'bg-emerald-500' : ''}
          ${checked ? 'before:translate-x-6' : ''}
          ${className}`}
        />
      </label>
    );
  }
);

Switch.displayName = "Switch";