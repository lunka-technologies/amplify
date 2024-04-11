import { Card } from '../../components/card/card';
import { FormContainer } from '../../components/container/container';
import { RegisterForm } from '../../forms/register/registerForm';
import styles from './registerPage.module.scss';

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <Card>
        <FormContainer>
          <RegisterForm />
        </FormContainer>
      </Card>
    </div>
  );
};
