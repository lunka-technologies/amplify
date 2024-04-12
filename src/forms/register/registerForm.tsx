import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { ROUTE_DASHBOARD, ROUTE_MAIN } from '../../router/routes';
import { RegisterSchema, registerSchema } from '../../schemas/registerSchema';
import styles from './registerForm.module.scss';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const formik = useFormik<RegisterSchema>({
    initialValues: {
      name: '',
      email: '',
      discordUsername: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log('Submitted values:', values);
      navigate(ROUTE_DASHBOARD);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        placeholder="John Doe"
        label="Name"
        id="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.touched.name && formik.errors.name) &&
          formik.errors.name
        }
      />
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
        placeholder="@username"
        label="Discord Username"
        id="discordUsername"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(
            formik.touched.discordUsername && formik.errors.discordUsername
          ) && formik.errors.discordUsername
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
      <Input
        type="password"
        placeholder="Enter password"
        label="Confirm Password"
        id="confirmPassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword
          ) && formik.errors.confirmPassword
        }
      />
      <Button type="submit" color="mint" className={styles.submitButton}>
        Sign up
      </Button>

      <p className={styles.textToLogin}>
        Already have an account?{' '}
        <Link className={styles.linkToLogin} to={ROUTE_MAIN}>
          Login
        </Link>
      </p>
    </form>
  );
};
