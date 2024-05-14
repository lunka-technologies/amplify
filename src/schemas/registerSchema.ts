import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  discordUsername: Yup.string().required('Discord username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password cannot exceed 30 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export type RegisterSchema = Yup.InferType<typeof registerSchema>;
