import React, { useState } from "react";

interface SearchBoxProps {
  placeholder?: string;
  suggestions: string[];
  onSelect: (value: string) => void;
}

const AutocompleteSearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  suggestions,
  onSelect,
}) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const matches = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(matches);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    setShow(false);
    onSelect(value);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder || "Search..."}
        value={query}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setShow(false), 150)} // delay so click works
        onFocus={() => query && setShow(true)}
      />

      {show && filtered.length > 0 && (
        <ul
          className="list-group position-absolute w-100 shadow"
          style={{ zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}
        >
          {filtered.map((item, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearchBox;
