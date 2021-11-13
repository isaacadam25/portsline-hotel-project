import React from 'react';

const InputWithIcon = ({ type, placeholder, fontAwesome, label }) => {
  return (
    <div className="icon-inside">
      <label className="icon-label">{label} </label>
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
