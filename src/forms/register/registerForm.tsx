import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { ROUTE_MAIN } from '../../router/routes';
import styles from './registerForm.module.scss';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      discordUsername: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input placeholder="John Doe" label="Name" />
      <Input placeholder="example@email.com" label="Email" />
      <Input placeholder="@username" label="Discord Username" />
      <Input type="password" placeholder="Enter password" label="Password" />
      <Input
        type="password"
        placeholder="Enter password"
        label="Confirm Password"
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
