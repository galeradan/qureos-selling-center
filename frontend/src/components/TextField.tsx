import React from 'react';

interface Props {
  label: string;
  type: string;
  fn: (e: React.ChangeEvent<any>) => void;
  value?: any;
}

const TextField: React.FC<Props> = ({ label, type, fn, value }) => {
  const identity = label?.toLowerCase();

  return (
    <>
      <label
        htmlFor={identity}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        id={identity}
        type={type}
        onChange={fn}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        step="0.01"
      />
    </>
  );
};

export default TextField;
