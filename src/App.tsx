import React, { FC } from 'react';
// import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
// require('@solana/wallet-adapter-react-ui/styles.css');
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from "@solana/web3.js";
import MyWallet from "./components/WalletConnection/WalletConnection";
import { SendTokens } from './components/SendTokens/SendTokens';
import twitterLogo from './assets/twitter-logo.svg';
import discordLogo from './assets/discord.png';
import logo from 'url:./assets/soluminati.png';

export const App: FC = () => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = 'https://ssc-dao.genesysgo.net/';

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = React.useMemo(
    () => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <div className="top-wrapper">
        <div>
            <div>
                 <div className="HeaderText">
                    <h1 className="HeaderName">HELIUS</h1>
                    <h2 className="HeaderDesc">are you GMI?</h2>
                    <p className="HeaderLongDesc">Historical NFT trading aggregator for your wallet on Solana</p>
                </div>
            </div>
            <div>
                <img className="Logo" src={logo} />
            </div>
           
        </div>
        <div className="App">
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets}>
                    <MyWallet />
                    <SendTokens />
                 </WalletProvider>
            </ConnectionProvider>
        </div>
        <div className="footer">
            <a href="https://twitter.com/HighSocietyNFTs">
                <img src={twitterLogo} alt="" />
            </a>
            <a href="https://discord.com/invite/highsociety">
                <img src={discordLogo} alt="" />
            </a>
        </div>
    </div>
  );
};
