import { apis } from '../../axios/apis';
import { axiosInstance } from '../../axios/instance';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { LOCAL_JWT_KEY } from '../../constants/localHostConstants';
import {
  ROUTE_DASHBOARD,
  ROUTE_MAIN,
  ROUTE_REGISTER,
} from '../../router/routes';
import { LoginSchema, loginSchema } from '../../schemas/loginSchema';
import styles from './loginForm.module.scss';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem(LOCAL_JWT_KEY);
    if (jwtToken) {
      axiosInstance.defaults.headers.common['Authorization'] =
        `Bearer ${jwtToken}`;
    }
    navigate(ROUTE_MAIN);
  }, []);

  const onSubmit = async (values: LoginSchema) => {
    try {
      const {
        data: { devOnlyToken },
      } = await axiosInstance.post(apis.login, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem(LOCAL_JWT_KEY, devOnlyToken);

      navigate(ROUTE_DASHBOARD);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setError(error.response?.data.message as string);
      }
    }
  };

  const formik = useFormik<LoginSchema>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        placeholder="example@email.com"
        label="Email"
        id="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.touched.email && formik.errors.email) &&
          formik.errors.email
        }
      />
      <Input
        type="password"
        placeholder="Enter password"
        label="Password"
        id="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.touched.password && formik.errors.password) &&
          formik.errors.password
        }
      />
      {error && <div className={styles.errorMsg}>{error}</div>}
      <div className={styles.passwordContainer}>
        {/* <Link className={styles.forgotPassword} to="#">
          Forgot Password
        </Link> */}
      </div>
      <Button type="submit" color="mint" className={styles.submitButton}>
        Login
      </Button>
      <p className={styles.textToCreateAccount}>
        Not a member?{' '}
        <Link className={styles.linkToCreateAccount} to={ROUTE_REGISTER}>
          Create Account
        </Link>
      </p>
    </form>
  );
};
