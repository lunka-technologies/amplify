import { ReactNode } from 'react';

export interface ITableTypes {
  id: number;
  strategy: { text: string; color: string };
  protocol: { logo: ReactNode; label: string };
  chain: { logo: ReactNode; label: string };
  assets: ReactNode;
  apy: string;
  stake: string;
  action: { text: string; color: string };
}
