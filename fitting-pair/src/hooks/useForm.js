import { useEffect, useState } from 'react';

function useForm({ initialValue, validate }) {
	const [values, setValues] = useState(initialValue);
	const [touched, setTouched] = useState({});
	const [errors, setErrors] = useState({});

	const handleChangeText = (name, text) => {
		setValues({ ...values, [name]: text });
	};

	const handlePhoneNum = (name, text) => {
		if (text.length === 10) {
			setValues({
				...values,
				[name]: text.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
			});
		} else if (text.length === 13) {
			setValues({
				...values,
				[name]: text
					.replace(/-/g, '')
					.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
			});
		} else {
			setValues({
				...values,
				[name]: text,
			});
		}
	};

	const handleBlur = name => {
		setTouched({
			...touched,
			[name]: true,
		});
	};

	const handleGenderChange = gender => {
		setValues({ ...values, userGender: gender });
	};

	const getGenderButtonProps = gender => {
		const onClick = () => handleGenderChange(gender);
		const selected = values.userGender === gender;
		const onBlur = () => handleBlur(name);
		return { onClick, selected, onBlur };
	};

	const getTextInputProps = name => {
		const value = values[name];
		const onChange = event => handleChangeText(name, event.target.value);
		const onBlur = () => handleBlur(name);
		return { value, onChange, onBlur };
	};

	const getPhoneNumInputProps = name => {
		const value = values[name];
		const onChange = event => handlePhoneNum(name, event.target.value);
		const onBlur = () => handleBlur(name);
		return { value, onChange, onBlur };
	};

	useEffect(() => {
		const newErrors = validate(values);
		setErrors(newErrors);
	}, [validate, values]);

	return {
		getTextInputProps,
		touched,
		getPhoneNumInputProps,
		getGenderButtonProps,
		values,
		errors,
	};
}

export default useForm;
