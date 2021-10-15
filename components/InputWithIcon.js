import React from 'react';

const InputWithIcon = ({ type, placeholder, fontAwesome }) => {
  return (
    <div className="icon-inside">
      <input
        className="input"
        type={type}
        name="name"
        placeholder={placeholder}
      />
      <i className={`fa fa-lg fa-${fontAwesome}`} />
    </div>
  );
};

export default InputWithIcon;
