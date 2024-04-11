import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password cannot exceed 16 characters'),
});

export type LoginSchema = Yup.InferType<typeof loginSchema>;
