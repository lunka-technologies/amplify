import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import {
  ChangePasswordSchema,
  changePasswordSchema,
} from '../../schemas/changePasswordSchema';
import styles from './changePasswordForm.module.scss';
import { useFormik } from 'formik';

export const ChangePasswordForm = ({
  onCloseForm,
}: {
  onCloseForm: () => void;
}) => {
  const formik = useFormik<ChangePasswordSchema>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      console.log('Submitted values:', values);
      onCloseForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        type="password"
        placeholder="Enter password"
        label="New Password:"
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
        label="Repeat New Password:"
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
        Submit
      </Button>
    </form>
  );
};
