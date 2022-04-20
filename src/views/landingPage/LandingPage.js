import React, { useState, useEffect } from 'react';
import AfterWallteConnect from '../../components/landingPage/afterWallteConnect';
import BeforeWalletConnect from '../../components/landingPage/beforeWalletConnect';
import ConnectWallet from '../../components/Wallet/ConnectWallet';
import { useWeb3React } from '@web3-react/core';
import './landingPage.scss';

function LandingPage() {
  //Initial
  const { account } = useWeb3React();

  //Redux State

  //React State
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  //Component Life Cycle
  useEffect(() => {
    if (account === undefined) {
      setIsWalletConnected(false);
    } else {
      setIsWalletConnected(true);
    }
  }, [account]);

  return (
    <div className="text-white contaier-landing-page h-screen pr-4">
       <ConnectWallet/>
      {isWalletConnected ? (
        <AfterWallteConnect />
      ) : (
        <BeforeWalletConnect />
      )}
      <div className="join sm:mt-10">
        <span className="text-center sm:text-3xl lg:text-5xl text-xl">Be the first to know</span>
        <div className="flex flex-row justify-between mt-10 text-center">
          <div className="p-2">
            <div className="border-2 py-2.5 px-3.5 rounded-2xl">
              <img
                src="https://web.archive.org/web/20220313011002im_/https://www.getverse.com/images/uploads/home-discord-icon.png"
                alt="dischord"
                width={40}
              />
            </div>
            <span className="text-xl mt-2 flex justify-center">Discord</span>
          </div>
          <div className="p-2">
            <div className="border-2 py-2 flex justify-center rounded-2xl cursor-pointer w-5/6">
              <img
                src="https://web.archive.org/web/20220314152122im_/https:/www.getverse.com/images/uploads/home-telegram-icon.png"
                alt="telegram"
                width={34}
              />
            </div>
            <span className="text-xl mt-2 flex justify-center">Telegram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
