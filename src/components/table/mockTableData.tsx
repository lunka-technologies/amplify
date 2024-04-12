import AssetsSVG from '../../assets/tableIcon/assets-1.svg?react';
import Assets2SVG from '../../assets/tableIcon/assets-2.svg?react';
import ChainSVG from '../../assets/tableIcon/chain-logo-1.svg?react';
import CoinsSVG from '../../assets/tableIcon/coins.svg?react';
import ProtocolSVG from '../../assets/tableIcon/protocol-logo-1.svg?react';

export const mockTableData = [
  {
    id: 1,
    strategy: { text: 'Growth', color: 'mint' },
    protocol: { logo: <ProtocolSVG />, label: 'AAVE' },
    chain: { logo: <ChainSVG />, label: 'Polygon (MATIC)' },
    assets: <AssetsSVG />,
    apy: '32.4%',
    stake: '$120.5',
    action: { text: 'Stake / Withdraw', color: 'mint' },
  },
  {
    id: 2,
    strategy: { text: 'Hyper', color: 'red' },
    protocol: { logo: <CoinsSVG />, label: 'ETH 2.0' },
    chain: { logo: <CoinsSVG />, label: 'Ethereum' },
    assets: <Assets2SVG />,
    apy: '25%+',
    stake: '-',
    action: { text: 'Coming Soon', color: 'disabled' },
  },
];
