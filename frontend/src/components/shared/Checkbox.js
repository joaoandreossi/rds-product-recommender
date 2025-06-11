import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center group hover:cursor-pointer">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" {...props} />
      <span className="ml-2 group-hover:text-gray-500">{children}</span>
    </label>
  );
}

export default Checkbox;
