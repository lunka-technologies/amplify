import { Coins } from '../../types/coins';

export type MockData = {
  id: number;
  strategy: 'growth' | 'hyper';
  protocol: Coins;
  chain: Coins;
  assets: Coins[];
  apy: number;
  stake: number;
  isCommingSoon?: boolean;
};

export const mockData: MockData[] = [
  {
    id: 1,
    strategy: 'growth',
    protocol: Coins.AAVE,
    chain: Coins.E_ETH,
    assets: [Coins.AAVE, Coins.USDTF, Coins.USDC],
    apy: 32.4,
    stake: 120.5,
  },
  {
    id: 2,
    strategy: 'hyper',
    protocol: Coins.ENTHERUM,
    chain: Coins.DAI,
    assets: [Coins.AAVE, Coins.DAI, Coins.ARBITRUM, Coins.ENTHERUM],
    apy: 25,
    stake: 120.5,
    isCommingSoon: true,
  },
];
