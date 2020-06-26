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
      <label htmlFor={identity}>{label}</label>
      <textarea
        name={identity}
        id={identity}
        cols={cols}
        rows={rows}
        onChange={fn}
        value={value}
        className="form-control"
      />
    </>
  );
};

export default TextField;
