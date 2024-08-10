import Input from '../../components/Input/Input';
import * as S from './SignUpPage.style';
import Icon from '../../assets/images/icon.png';
import Phone from '../../assets/images/phone.png';
import Ruler from '../../assets/images/ruler.png';
import SIGNUP from '../../assets/images/SIGNUP.png';
import Submit from '../../components/Button/Submit';
import { Link } from 'react-router-dom';
import MFButton from '../../components/Button/MFButton/MFButton';
import useForm from '../../hooks/useForm';
import { validateSignUp } from '../../util';
import { toast } from 'sonner';
import { useSignup } from '../../hooks/queries/useSignup';

const SignUpPage = () => {
	const signupForm = useForm({
		initialValue: {
			userName: '',
			phoneNumber: '',
			userHeight: '',
			userGender: '',
		},
		validate: validateSignUp,
	});

	const { mutate } = useSignup();

	const handleSubmit = () => {
		mutate(
			{
				userName: signupForm.values.userName,
				phoneNumber: signupForm.values.phoneNumber.replace(/-/g, ''),
				userHeight: parseInt(signupForm.values.userHeight),
				userGender: signupForm.values.userGender,
			},
			{
				onError: error => {
					error.response &&
						toast.error(error.response.data.message, {
							style: {
								color: '#fff',
								background: '#e05151',
							},
							duration: 1200,
						});
				},
			},
		);
	};

	const handleDisabled = () => {
		const { phoneNumber, userName, userHeight, userGender } = signupForm.errors;
		return !(
			phoneNumber === '' &&
			userName === '' &&
			userHeight === '' &&
			userGender === ''
		);
	};

	return (
		<S.Container>
			<S.Logo src={SIGNUP} />
			<div>
				<Input text={'Nickname'} icon={Icon} half={false} signup={signupForm} />
				{signupForm.errors.userName && signupForm.touched.userName && (
					<S.ErrorMeg>{signupForm.errors.userName}</S.ErrorMeg>
				)}
			</div>
			<div>
				<Input text={'Phone'} icon={Phone} half={false} signup={signupForm} />
				{signupForm.errors.phoneNumber && signupForm.touched.phoneNumber && (
					<S.ErrorMeg>{signupForm.errors.phoneNumber}</S.ErrorMeg>
				)}
			</div>
			<S.Wrapper>
				<S.ButtonBox>
					<MFButton male={true} signup={signupForm} />
					<hr />
					<MFButton signup={signupForm} />
				</S.ButtonBox>
				{signupForm.errors.userGender && signupForm.touched.userGender && (
					<S.ErrorMeg>{signupForm.errors.userGender}</S.ErrorMeg>
				)}
				<div>
					<Input text={'Height'} icon={Ruler} half={true} signup={signupForm} />
					{signupForm.errors.userHeight && signupForm.touched.userHeight && (
						<S.ErrorMeg>{signupForm.errors.userHeight}</S.ErrorMeg>
					)}
				</div>
			</S.Wrapper>

			<Submit
				text={'SUBMIT'}
				width={'530px'}
				onClick={handleSubmit}
				disabled={handleDisabled()}
			/>

			<S.GoLogin>
				Do you have id ?<Link to="/login">Login</Link>
			</S.GoLogin>
		</S.Container>
	);
};

export default SignUpPage;
