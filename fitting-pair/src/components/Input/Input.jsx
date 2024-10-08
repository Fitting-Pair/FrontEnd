import * as S from './Input.style';

const Input = ({ text, icon, half, signup, placeholder }) => {
	if (text === 'Phone') {
		return (
			<S.Container $half={half}>
				<input
					placeholder={placeholder}
					{...signup.getPhoneNumInputProps('phoneNumber')}
					maxLength={13}
				/>
				<img src={icon} />
			</S.Container>
		);
	} else {
		return (
			<S.Container $half={half}>
				{text === 'Height' ? (
					<input
						placeholder={placeholder}
						{...signup.getTextInputProps('userHeight')}
						maxLength={3}
					/>
				) : (
					<input
						placeholder={placeholder}
						{...signup.getTextInputProps('userName')}
					/>
				)}

				<img src={icon} />
			</S.Container>
		);
	}
};

export default Input;
