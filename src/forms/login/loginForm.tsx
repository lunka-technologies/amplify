import { Button } from '../../components/button/button';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Input } from '../../components/input/input';
import { ROUTE_DASHBOARD, ROUTE_REGISTER } from '../../router/routes';
import { LoginSchema, loginSchema } from '../../schemas/loginSchema';
import styles from './loginForm.module.scss';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const mockEmail = 'test_email@gmail.com';
  const mockPassword = 'testpassword';

  const navigate = useNavigate();

  const formik = useFormik<LoginSchema>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, { setErrors, setSubmitting }) => {
      if (mockEmail && values.email) {
        setErrors({ email: 'Email is incorrect' });
        setSubmitting(false);
      }

      if (mockPassword && values.password) {
        setErrors({
          password: 'Email address or password is incorrect',
        });
        setSubmitting(false);
      }

      console.log('Submitted values:', values);
      navigate(ROUTE_DASHBOARD);
    },
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
      <div className={styles.passwordContainer}>
        <Checkbox label="Remember Me" />
        <Link className={styles.forgotPassword} to="#">
          Forgot Password
        </Link>
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
