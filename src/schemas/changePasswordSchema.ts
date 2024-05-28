import {
  lowercaseRule,
  numberRule,
  specialCharacterRule,
  uppercaseRule,
} from './passwordRules';
import * as Yup from 'yup';

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .concat(uppercaseRule)
    .concat(lowercaseRule)
    .concat(numberRule)
    .concat(specialCharacterRule)
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot exceed 30 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export type ChangePasswordSchema = Yup.InferType<typeof changePasswordSchema>;
