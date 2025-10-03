import React, { useState, useMemo } from "react";

type Option = { label: string; value: string };

interface Props {
  options: Option[];
  value?: Option[]; // selected values
  onChange?: (selected: Option[]) => void;
  multi?: boolean; // default true
  searchable?: boolean; // default true
  placeholder?: string;
  selectAll?: boolean; // 🔹 new config
  selectAllLabel?: string; // label for select all checkbox
}

export const CustomSelect: React.FC<Props> = ({
  options,
  value = [],
  onChange,
  multi = true,
  searchable = true,
  placeholder = "Select...",
  selectAll = false, // 🔹 default off
  selectAllLabel = "Select All",
}) => {
  const [search, setSearch] = useState("");

  // Filtered options for search
  const filteredOptions = useMemo(
    () =>
      options.filter((o) =>
        o.label.toLowerCase().includes(search.toLowerCase())
      ),
    [options, search]
  );

  const toggleOption = (option: Option) => {
    if (multi) {
      if (value.find((v) => v.value === option.value)) {
        onChange?.(value.filter((v) => v.value !== option.value));
      } else {
        onChange?.([...value, option]);
      }
    } else {
      onChange?.([option]);
    }
  };

  const toggleSelectAll = () => {
    const allSelected = filteredOptions.every((opt) =>
      value.find((v) => v.value === opt.value)
    );

    if (allSelected) {
      // Deselect all filtered options
      onChange?.(
        value.filter(
          (v) => !filteredOptions.some((opt) => opt.value === v.value)
        )
      );
    } else {
      // Select all filtered options
      const newValues = [
        ...value,
        ...filteredOptions.filter(
          (opt) => !value.find((v) => v.value === opt.value)
        ),
      ];
      onChange?.(newValues);
    }
  };

  const isSelected = (option: Option) =>
    !!value.find((v) => v.value === option.value);

  const isAllSelected =
    filteredOptions.length > 0 &&
    filteredOptions.every((opt) => value.find((v) => v.value === opt.value));

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {value.length > 0
          ? multi
            ? `${value.length} Selected`
            : value[0].label
          : placeholder}
      </button>
      <div
        className="dropdown-menu p-2"
        style={{ minWidth: "200px", maxHeight: "250px", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()} // keep dropdown open
      >
        {searchable && (
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        {multi && selectAll && filteredOptions.length > 0 && (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isAllSelected}
              onChange={toggleSelectAll}
              id="selectAllCheckbox"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="selectAllCheckbox"
            >
              {selectAllLabel}
            </label>
          </div>
        )}

        {filteredOptions.map((option) => (
          <div key={option.value} className="form-check">
            {multi ? (
              <input
                className="form-check-input"
                type="checkbox"
                checked={isSelected(option)}
                onChange={() => toggleOption(option)}
                id={option.value}
              />
            ) : (
              <input
                className="form-check-input"
                type="radio"
                name="customSelectRadio"
                checked={isSelected(option)}
                onChange={() => toggleOption(option)}
                id={option.value}
              />
            )}
            <label className="form-check-label ms-2" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
