import { useCallback, useEffect, useId, useRef, useState } from "react";

type Option = { value: string; label: string };

type Props = {
  id?: string;
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  "aria-labelledby"?: string;
};

export function ModelComboBox({
  id,
  value,
  options,
  placeholder = "— انتخاب —",
  onChange,
  "aria-labelledby": ariaLabelledBy,
}: Props) {
  const autoId = useId();
  const triggerId = id ?? `combo-${autoId}`;
  const listId = `${triggerId}-listbox`;

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);
  const labelShown = selected?.label ?? placeholder;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDocDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className={`model-combobox${open ? " is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        id={triggerId}
        className="model-combobox-trigger"
        aria-labelledby={ariaLabelledBy}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="model-combobox-label">{labelShown}</span>
        <span className="model-combobox-chevron" aria-hidden>
          ▼
        </span>
      </button>
      {open && (
        <ul id={listId} className="model-combobox-list" role="listbox">
          <li role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={value === ""}
              className="model-combobox-option"
              onClick={() => {
                onChange("");
                close();
              }}
            >
              {placeholder}
            </button>
          </li>
          {options.map((o) => (
            <li key={o.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === o.value}
                className="model-combobox-option"
                onClick={() => {
                  onChange(o.value);
                  close();
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
