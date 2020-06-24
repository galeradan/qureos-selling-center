import React from 'react'

interface Props{
	label: string;
    fn: (e: React.ChangeEvent<any>)=>void;
    cols: number,
    rows: number,
}

const TextField: React.FC<Props> = ({label, fn, cols, rows}) =>{

	let identity = label?.toLowerCase();
	
	return(
			<React.Fragment>
				<label htmlFor={identity}>{label}</label>
				<textarea name={identity} id={identity} cols={cols} rows={rows} onChange={fn} className="form-control"></textarea>
			</React.Fragment>
		);
}

export default TextField