import { useState } from "react";

function useForm({ initialValue }) {
  const [values, setValues] = useState(initialValue);

  const handleChangeText = (name, text) => {
    setValues({ ...values, [name]: text });
  };

  const handlePhoneNum = (name, text) => {
    if (text.length === 10) {
      setValues({ ...values, [name]: text.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") });
    } else if (text.length === 13) {
      setValues({ ...values, [name]: text.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3") });
    } else {
      setValues({
        ...values,
        [name]: text,
      });
    }
  };

  const handleGenderChange = (gender) => {
    setValues({ ...values, userGender: gender });
  };

  const getGenderButtonProps = (gender) => {
    const onClick = () => handleGenderChange(gender);
    const selected = values.userGender === gender;
    return { onClick, selected };
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeText(name, event.target.value);
    return { value, onChange };
  };

  const getPhoneNumInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handlePhoneNum(name, event.target.value);
    return { value, onChange };
  };

  return { getTextInputProps, getPhoneNumInputProps, getGenderButtonProps, values };
}

export default useForm;
