import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  discordUsername: Yup.string().required('Discord username is required'),
  password: Yup.string()
    .min(6)
    .max(32)
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password cannot exceed 16 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export type RegisterSchema = Yup.InferType<typeof registerSchema>;
