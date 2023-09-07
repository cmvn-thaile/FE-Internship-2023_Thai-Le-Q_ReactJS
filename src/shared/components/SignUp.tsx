interface SignUpProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignUp = ({ handleChange, setIsSignUp }: SignUpProps) => {
  return (
    <>
      <form>
        <h2 className="modal-title">Sign up to use our features</h2>
        <input
          className="modal-input"
          type="email"
          required
          onChange={handleChange}
          name="email"
          id="sign-up-email"
          placeholder="Fill your email"
        />

        <input
          className="modal-input"
          type="text"
          required
          name="name"
          onChange={handleChange}
          id="sign-up-name"
          placeholder="Fill your name"
        />

        <input
          className="modal-input"
          type="password"
          required
          name="password"
          onChange={handleChange}
          id="sign-up-password"
          placeholder="Fill your password"
        />
        <input
          className="modal-input"
          type="password"
          required
          name="rePassword"
          onChange={handleChange}
          id="sign-up-rePassword"
          placeholder="Re-fill your password"
        />
        <button className="btn btn-primary" type="submit">
          Sign up
        </button>
      </form>
      <p>
        If you have an account.
        <span onClick={() => setIsSignUp(false)}>Click here to sign in</span>
      </p>
    </>
  );
};

export default SignUp;
