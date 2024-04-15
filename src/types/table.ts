import { ReactNode } from 'react';

export interface ITableTypes {
  id: number;
  strategy: { text: string; color: string };
  protocol: { logo: ReactNode; label: string };
  chain: { logo: ReactNode; label: string };
  assets: ReactNode;
  apy: string;
  stake: string;
  action: { isActive: boolean; text: string[]; color: string };
}
