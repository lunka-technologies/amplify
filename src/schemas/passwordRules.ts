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
