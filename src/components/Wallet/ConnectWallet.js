import React, { useEffect, useRef, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useEagerConnect, useInactiveListener } from '../../hooks/index';
import {
  COINBASE_ICON_SVG,
  METAMASK_ICON_SVG,
  TRUST_WALLET_ICON_SVG,
} from '../../assets/images';
import { injected, walletconnect, walletLink } from '../../utils/connectors';
import { Dropdown } from 'react-bootstrap';
const ConnectWallet = () => {
  const { activate, deactivate, connector, active, error, account } =
    useWeb3React();
  const onboarding = useRef();
  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);
  const onConnectWithMetamaskClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      // window.ethereum.request({
      //     method: "wallet_requestPermissions",
      //     params: [
      //       {
      //         eth_accounts: {}
      //       }
      //     ]
      //   }).then(()=>{
      //       setActivatingConnector(injected);
      //       activate(injected);
      //       localStorage.setItem("shouldConnect" , "true")
      //   })
      localStorage.setItem('shouldEagerConnect', true);
      localStorage.setItem('connectedWallet', 'METAMASK');
      activate(injected);
    } else {
      onboarding.current.startOnboarding();
    }
  };
  // For Metamask OnBoarding
  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);
  const handleDisconnect = () => {
    localStorage.setItem('shouldEagerConnect', false);
    deactivate();
    localStorage.clear();
    console.log('in disconnect');
  };

  const handleRetry = () => {
    // resetWalletConnectConnector(connectorList['WalletConnect']);
    deactivate();
  };

  const onLinkConnectClick = () => {
    activate(walletLink);
    localStorage.setItem('connectedWallet', 'COINBASE');
  };
  const onConnectWithWalletConnectClick = () => {
    if (connector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined;
    }
    activate(walletconnect);
    localStorage.setItem('connectedWallet', 'TRUST');
    localStorage.setItem('shouldEagerConnect', true);
  };
  return (
    <div className="flex justify-end pt-10">
      {/* <Dropdown text="Wallet" pointing className="link item"> */}
      {(() => {
        if (active) {
          return (
            <button
              type="button"
              className="nav-connect-wallet-btn wallet-btn dropdown-toggle"
              id="ConnectdropdownMenuButton"
              // data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => handleDisconnect()}
            >
              Disconnect Wallet
            </button>
          );
        }
        if (!error) {
          return (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Connect wallet
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={onConnectWithMetamaskClick}>
                    <div className="WrapperDiv  ">
                      <img src={METAMASK_ICON_SVG} alt="" />
                      <span>Metamask</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onLinkConnectClick}>
                    <div className="WrapperDiv  ">
                      <img src={COINBASE_ICON_SVG} alt="" />
                      <span>Coinbase</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onConnectWithWalletConnectClick}>
                    <div className="WrapperDiv  ">
                      <img src={TRUST_WALLET_ICON_SVG} alt="" />
                      <span>TRUST wallet</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          );
        }
        return (
          <button
            type="button"
            className="nav-connect-wallet-btn wallet-btn dropdown-toggle"
            onClick={handleRetry}
          >
            Retry
          </button>
        );
      })()}
      {/* </Dropdown> */}
    </div>
  );
};

export default ConnectWallet;
