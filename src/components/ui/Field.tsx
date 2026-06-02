import type { ComponentProps } from "react";

type FieldProps = {
  label: string;
  name: string;
  type?: ComponentProps<"input">["type"];
  required?: boolean;
  textarea?: boolean;
  colSpan?: boolean;
};

export function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  colSpan,
}: FieldProps) {
  return (
    <div className={colSpan ? "md:col-span-2" : ""}>
      <label htmlFor={name} className="eyebrow block mb-3">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          className="w-full bg-transparent border-b border-foreground py-3 text-base focus:outline-none focus:border-gold resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          maxLength={255}
          className="w-full bg-transparent border-b border-foreground py-3 text-base focus:outline-none focus:border-gold"
        />
      )}
    </div>
  );
}
