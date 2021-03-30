import React, { useState } from 'react';
import MaskInput from 'react-maskinput';

const AdvanceMaskInput = () => {
	const [ mask, setMask ] = useState('0000-0000-0000-0000');
	const [ cardNumber, setCardNumber ] = useState('');
	const [ cardNumberDisplay, setCardNumberDisplay ] = useState('');

	const onChange = (e) => {
		var outString = e.target.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		setCardNumber(outString);
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
		<MaskInput
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
