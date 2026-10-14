import { Input, Surface } from "@heroui/react";



const inputClass =
  "h-[54px] w-[429px] rounded-full bg-[#F1F1F1] px-3";

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-base text-[#222222] ml-3 mb-1">
        {label}
      </label>

      <Surface className="flex h-[38px] w-full items-center rounded-full bg-[#F1F1F1]">
        <Input
          id={id}
          type={type}
          className={inputClass}
          placeholder={placeholder ?? ""}
          variant="secondary"
        />
      </Surface>
    </div>
  );
}



