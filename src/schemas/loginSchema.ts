import {
  lowercaseRule,
  numberRule,
  specialCharacterRule,
  uppercaseRule,
} from './passwordRules';
import * as Yup from 'yup';

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
