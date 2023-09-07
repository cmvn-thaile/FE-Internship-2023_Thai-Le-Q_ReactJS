import { useState } from 'react';

export const useForm = (option: any) => {
  const [formData, setFormData] = useState(option?.initialValues);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value.trim(),
    }));
    console.log(formData);
  };

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  const isEmailValid =
    formData?.email?.length > 0 && emailRegExp.test(formData?.email);

  const isPasswordValid = formData?.password?.length >= 6;

  const isFormValid = isEmailValid && isPasswordValid;
  return {
    formData,
    handleChange,
    handleBlur,
    isEmailValid,
    isPasswordValid,
    isFormValid,
  };
};
