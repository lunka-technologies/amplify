import * as Yup from 'yup';

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6)
    .max(32)
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password cannot exceed 16 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export type ChangePasswordSchema = Yup.InferType<typeof changePasswordSchema>;
