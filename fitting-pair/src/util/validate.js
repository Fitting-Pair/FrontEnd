function validatePhoneNumber(values) {
	const errors = {
		phoneNumber: '',
	};

	if (!/^\d{3}-\d{4}-\d{4}$/.test(values.phoneNumber)) {
		errors.phoneNumber =
			'올바른 휴대폰 전화번호 형식이 아닙니다. (11자리로 입력해주세요)';
	}

	return errors;
}

function validateSignUp(values) {
	const errors = {
		userName: '',
		phoneNumber: '',
		userHeight: '',
		userGender: '',
	};

	if (values.userName === '') {
		errors.userName = '유저 이름을 입력해주세요.';
	}

	if (!/^\d{3}-\d{4}-\d{4}$/.test(values.phoneNumber)) {
		errors.phoneNumber =
			'올바른 휴대폰 전화번호 형식이 아닙니다. (11자리로 입력해주세요)';
	}

	if (values.userHeight === '') {
		errors.userHeight = '키를 입력해주세요.';
	}

	if (values.userGender === '') {
		errors.userGender = '성별을 선택해주세요.';
	}

	return errors;
}

export { validatePhoneNumber, validateSignUp };
