import React, { useState } from 'react';
import MaskInput from 'react-maskinput';
import styled from 'styled-components';

const MaskedInput = styled(MaskInput)`
  border-radius: 5px;
  border-color: rgb(219, 112, 147);
	min-width: 220px;
	font-size: 1.2em;
`;

const AdvanceMaskInput = () => {
	const [ mask, setMask ] = useState('0000-0000-0000-0000');
	const [ cardNumber, setCardNumber ] = useState('');
	const [ cardNumberDisplay, setCardNumberDisplay ] = useState('');

	const onChange = (e) => {
		var outString = e.target.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		setCardNumber(outString);
		const trailingCharsIntactCount = 4;
		let str =
			'x'.repeat(cardNumber.length - trailingCharsIntactCount) + cardNumber.slice(-trailingCharsIntactCount);

			setCardNumberDisplay(str);
	};
	const onBlur = (e) => {
		const trailingCharsIntactCount = 4;
		let str =
			'x'.repeat(cardNumber.length - trailingCharsIntactCount) + cardNumber.slice(-trailingCharsIntactCount);
		setCardNumberDisplay(str);
	};
	const onFocus = (e) => {
		setCardNumberDisplay(cardNumber);
	};

	return (
		<MaskedInput
		  alwaysShowMask
			maskString="XXXX-XXXX-XXXX-XXXX"
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			maskChar="_"
			mask={mask}
			size={20}
			value={cardNumberDisplay}
		/>
	);
};

export default AdvanceMaskInput;
