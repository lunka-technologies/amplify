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

export const registerSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  discordUsername: Yup.string().required('Discord username is required'),
  password: Yup.string()
    .concat(uppercaseRule)
    .concat(lowercaseRule)
    .concat(numberRule)
    .concat(specialCharacterRule)
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot exceed 30 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export type RegisterSchema = Yup.InferType<typeof registerSchema>;
