import AAVE from '../assets/coins/AAVE.svg?react';
import ARBITRUM from '../assets/coins/Arbitrum.svg?react';
import BNB from '../assets/coins/BNB.svg?react';
import BSC from '../assets/coins/BSC.svg?react';
import BITCOIN from '../assets/coins/Bitcoin.svg?react';
import DAI from '../assets/coins/DAI.svg?react';
import ETHEREUM from '../assets/coins/Ethereum.svg?react';
import OPTIMISM from '../assets/coins/Optimism.svg?react';
import PANCAKE from '../assets/coins/PancakeSwap.svg?react';
import POLYGON from '../assets/coins/Polygon.svg?react';
import SOLANA from '../assets/coins/Solana.svg?react';
import TRUE_USD from '../assets/coins/TrueUSD.svg?react';
import USDC from '../assets/coins/USDC.svg?react';
import USDT from '../assets/coins/USDT.svg?react';
import UNISWAP from '../assets/coins/Uniswap.svg?react';
import R_ETH from '../assets/coins/rETH.svg?react';
import ST_ETH from '../assets/coins/stETH.svg?react';
import WST_ETH from '../assets/coins/wstETH.svg?react';
import { Coins } from '../types/coins';

export const getCoinSVG = (coin: Coins) => {
  switch (coin) {
    case Coins.AAVE:
      return <AAVE />;

    case Coins.BITCOIN:
      return <BITCOIN />;

    case Coins.BNB:
      return <BNB />;

    case Coins.ARBITRUM:
      return <ARBITRUM />;

    case Coins.BSC:
      return <BSC />;

    case Coins.DAI:
      return <DAI />;

    case Coins.ETHEREUM:
      return <ETHEREUM />;

    case Coins.OPTIMISM:
      return <OPTIMISM />;

    case Coins.PANCAKE:
      return <PANCAKE />;

    case Coins.POLYGON:
      return <POLYGON />;

    case Coins.SOLANA:
      return <SOLANA />;

    case Coins.TRUEUSD:
      return <TRUE_USD />;

    case Coins.USDC:
      return <USDC />;

    case Coins.USDT:
      return <USDT />;

    case Coins.UNISWAP:
      return <UNISWAP />;

    case Coins.E_ETH:
      return <R_ETH />;

    case Coins.ST_ETH:
      return <ST_ETH />;

    case Coins.WST_ETH:
      return <WST_ETH />;

    default:
      return null;
  }
};
