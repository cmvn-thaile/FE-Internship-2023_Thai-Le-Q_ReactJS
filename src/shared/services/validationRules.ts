type ValidationFunction = (value: string) => string | undefined;

type ValidationRules = {
  [key: string]: ValidationFunction[];
};

export const validationRules: ValidationRules = {
  email: [
    (value) => (value ? undefined : 'Email is required'),
    (value) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ? undefined
        : 'Invalid email address',
  ],
  password: [
    (value) => (value ? undefined : 'Password is required'),
    (value) =>
      value.length >= 8 ? undefined : 'Password must be at least 8 characters long',
  ],
};