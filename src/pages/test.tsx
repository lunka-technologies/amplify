import { Checkbox } from '../components/checkbox/checkbox';
import { Input } from '../components/input/input';

export const TestPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Input placeholder="trhtrh" label="Email" />
      </div>
      <div>
        <Input type="password" placeholder="Enter password" label="Password" />
      </div>
      <div>
        <Checkbox label="Test test test test" />
      </div>
    </div>
  );
};
