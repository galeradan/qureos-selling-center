import React from 'react'

interface Props{
	label: string;
	type: string;
	fn: (e: React.ChangeEvent<any>)=>void;
	value?: any;
}

const TextField: React.FC<Props> = ({label, type, fn, value}) =>{

	let identity = label?.toLowerCase();
	
	return(
			<React.Fragment>
				<label htmlFor={identity}>{label}</label>
				<input id={identity} type={type} onChange={fn} className="form-control" value={value}/>
			</React.Fragment>
		);
}

export default TextField