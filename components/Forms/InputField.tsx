import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  name,
  label,
  placeholder,
  register,
  type = "text",
  validation,
  error,
  value,
  disabled,
}: FormInputProps) => {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <div className="relative">
        <Input
          type={isPassword && show ? "text" : type}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          className={cn("form-input", {
            "opacity-50 cursor-not-allowed": disabled,
          })}
          {...register(name, validation)}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
