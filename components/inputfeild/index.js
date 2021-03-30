import React, { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const MaskedInput = styled(InputMask)`
  border-radius: 5px;
  border-color: rgb(219, 112, 147);
	min-width: 220px;
	font-size: 1.2em;
`;

const AdvanceMaskInput = () => {
	const [ value, setValue ] = useState('');
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const onBlur = (e) => {
		console.log('onBlur',e.target.value);
	};

    return (<MaskedInput type ="password" mask="****-****-****-****" maskChar={null}
	value={value} onChange={onChange} onBlur={onBlur} />);

};

export default AdvanceMaskInput;
