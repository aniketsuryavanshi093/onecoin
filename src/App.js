import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './assets/css/main.scss';
import './App.css';
import Loader from './components/Loader/Loader';
import WrongNetworkModal from './components/WrongNetworkModal';
import MainContainer from './views/MainContainer/MainContainer';
const App = () => {
  const onChangeNetworkClick = async () => {
    // Metamask adds Ropsten chain by default, so no need to check wether chain is added or not
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    });
  };

  return (
    <React.Suspense fallback={<Loader />}>
      {/* <WrongNetworkModal
        show={chainId !== 3 && active}
        onChangeNetworkClick={onChangeNetworkClick}
      /> */}
      <BrowserRouter>
        <Switch>
          <MainContainer />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
