import React from 'react'

interface Props{
	label: string;
	type: string;
	fn: (e: React.ChangeEvent<any>)=>void;
}

const TextField: React.FC<Props> = ({label, type, fn}) =>{

	let identity = label?.toLowerCase();
	
	return(
			<React.Fragment>
				<label htmlFor={identity}>{label}</label>
				<input id={identity} type={type} onChange={fn} className="form-control"/>
			</React.Fragment>
		);
}

export default TextField