import React, { useState } from "react";

function Collapsible({ title, children }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={toggleOpen}>
        {open ? "Hide" : title}
      </button>
      {open && (
        <div className="collapsible-body">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapsible;
