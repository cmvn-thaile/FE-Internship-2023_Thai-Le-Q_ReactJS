import React from 'react';
interface SignInProps {
  formData:
    | {
        email: string;
        password: string;
      }
    | undefined;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  isPasswordValid: boolean;
  isEmailValid: boolean;
  isSubmit: boolean;
}
const SignIn = ({
  formData,
  handleSubmit,
  handleChange,
  isPasswordValid,
  isEmailValid,
  isSubmit,
  handleBlur,
}: SignInProps) => {
  const errorMessageClass = isSubmit ? 'error-message' : 'error-message hidden';
  console.log(isSubmit)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="modal-title">Login to use our features</h2>
        <label htmlFor="sign-in-email">Email</label>
        <input
          className="modal-input"
          type="text"
          required
          name="email"
          value={formData?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="sign-in-email"
          placeholder="Fill your email"
        />
        {!isEmailValid && (
          <p className={errorMessageClass}>Please type valid email</p>
        )}

        <label htmlFor="sign-in-password">Password</label>
        <input
          className="modal-input"
          type="password"
          required
          name="password"
          value={formData?.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="sign-in-password"
          placeholder="Fill your password"
        />
        {!isPasswordValid && (
          <p className={errorMessageClass}>Password have to longer than 6</p>
        )}
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <p>
        If you dont have an account.{' '}
        {/* <span onClick={() => setIsSignUp(true)}>Click here to sign up</span> */}
      </p>
    </>
  );
};

export default SignIn;
