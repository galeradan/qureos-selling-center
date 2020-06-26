import React from 'react';

interface Props {
  label: string;
  fn: (e: React.ChangeEvent<any>) => void;
  cols: number;
  rows: number;
  value?: any;
}

const TextField: React.FC<Props> = ({ label, fn, cols, rows, value }) => {
  const identity = label?.toLowerCase();

  return (
    <>
      <label
        htmlFor={identity}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        name={identity}
        id={identity}
        cols={cols}
        rows={rows}
        onChange={fn}
        value={value}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};

export default TextField;
