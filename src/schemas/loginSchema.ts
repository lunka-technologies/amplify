import * as Yup from 'yup';

export const uppercaseRule = Yup.string()
  .required('Password is required')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter');

export const lowercaseRule = Yup.string()
  .required('Password is required')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter');

export const numberRule = Yup.string()
  .required('Password is required')
  .matches(/\d/, 'Password must contain at least one number');

export const specialCharacterRule = Yup.string()
  .required('Password is required')
  .matches(
    /[!@#$%^&*()_+]/,
    'Password must contain at least one special character'
  );

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+com$/, 'Only .com domains are allowed')
    .required('Email is required'),
  password: Yup.string()
    .concat(uppercaseRule)
    .concat(lowercaseRule)
    .concat(numberRule)
    .concat(specialCharacterRule)
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot exceed 30 characters')
    .required('Password is required'),
});

export type LoginSchema = Yup.InferType<typeof loginSchema>;
