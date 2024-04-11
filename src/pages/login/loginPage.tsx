import { Card } from '../../components/card/card';
import { FormContainer } from '../../components/container/container';
import { LoginForm } from '../../forms/login/loginForm';
import styles from './loginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Card>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </Card>
    </div>
  );
};
