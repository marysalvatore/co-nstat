import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './Wallets.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import trust from '../../assets/images/trust-wallet-66f8777532931d9c09b633344981a6a9.png'
import atomic from '../../assets/images/atomic-4c02d2b33cf091fd83c7a49819394e41.png';
import metamask from '../../assets/images/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png';
import myetherwallet from '../../assets/images/myetherwallet.jpeg'
import trezor from '../../assets/images/trezor.jpeg'
import coinbase from '../../assets/images/coinbase.jpeg'
import rainbow from '../../assets/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png';
import argent from '../../assets/images/Argent.jpeg';
import gnosis from '../../assets/images/gnosis.jpeg';
import crypto from '../../assets/images/crypto-4cbeac57421fb3ca2573db2cf448169a.png';
import pillar from '../../assets/images/pillar.png';
import stagazer from '../../assets/images/stagazer.jpeg';
import rose from '../../assets/images/rose.png';
import phantom from '../../assets/images/phantom.jpeg';
import ledger from '../../assets/images/ledgerwallet-c56784b26234a389632687a36d548d4.png';
import tron from '../../assets/images/tron-20fg49jbfj9488dhvd76975js73648.png';
import sollet from '../../assets/images/sollet.jpeg';
import solflare from '../../assets/images/solflare.png';
import yoroi from '../../assets/images/yoroi.webp';
import imtoken from '../../assets/images/imtoken-fd8c7c52dac6101568954e7448a49202.png'
import anchor from '../../assets/images/anchor.png';
import onto from '../../assets/images/onto-983003d35fe32bf916f9eda381f138f7.png';
import tokenpocket from '../../assets/images/tokenpocket-57a4a886cc644e5237ac1558226154cb.png';
import mathwallet from '../../assets/images/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png';
import bitpay from '../../assets/images/bitpay-1573dd6c95eb38386f181048663590d0.jpeg';
import maiar from '../../assets/images/maiar.png';
import ledgerlive from '../../assets/images/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png'
import walleth from '../../assets/images/walleth-b60336f8dd9ea86285408cb4f96634d1.png'
import authereum from '../../assets/images/authereum-32f3939207b77c1837547d5ed4f86110.png';
import huobi from '../../assets/images/huobi.jpeg';
import eidoo from '../../assets/images/eidoo.png';
import mykey from '../../assets/images/mykey-7419df5270c0406c80cba19fa5165923.png';
import loopring from '../../assets/images/loopring.jpeg';
import trustvault from '../../assets/images/trustvault-9031a67f82293fc50ead978f936cfff3.png';
import coin98 from '../../assets/images/coin98-c5b50adaceaf474e48ef1dad150d0829.png'
import coolwallets from '../../assets/images/coolwallet-s-cc612ee7a151c1863293fcc69dd0f677.png';
import alice from '../../assets/images/alice.png';
import alphawallet from '../../assets/images/alphawallet.jpeg'
import dcentwallet from '../../assets/images/dcentwallet-f0bdbaec0837431b87ac9886bb22dfd5.png';
import zelcore from '../../assets/images/zelcore-d4c1a7a444b95612f6373f0b536b6ccb.png';
import nash from '../../assets/images/nash.jpeg';
import coinomi from '../../assets/images/coinomi-7eecd68e38d78752d68b7232bd9c58d9.jpeg';
import gridplus from '../../assets/images/gridplus-8cedce167d37ddaa02f2afdf55841d8c.png';
import cybavo from '../../assets/images/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png';
import tokenary from '../../assets/images/tokenary.png';
import wazirx from '../../assets/images/wazirx-logo-rounded.9bff9f42.png';
import torus from '../../assets/images/torus.jpeg';
import spatium from '../../assets/images/spatium.jpeg';
import safepal from '../../assets/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png';
import equal from '../../assets/images/equal.jpeg';
import infinito from '../../assets/images/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png';
import walletio from '../../assets/images/wallet.io-198f396de22fe25eb370f46544abe69d.png';
import infinity from '../../assets/images/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png';
import ownbit from '../../assets/images/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png';
import easypocket from '../../assets/images/easypocket-436ea3270a7bf77c02a880bfc70d0ee8.jpeg';
import bridgewallet from '../../assets/images/bridge.png';
import sparkpoint from '../../assets/images/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png';
import viawallet from '../../assets/images/viawallet-ae1502eddf4d2ed89abd36907dd3ae8a.png';
import bitkeep from '../../assets/images/bitkeep-387b0ca7da4cf322f44c70c23064c529.png';
import vision from '../../assets/images/vision-928292fe642172a18e62feb5eaa2d639.png';
import swiftwallet from '../../assets/images/swift wallet.png';
import peakdefi from '../../assets/images/peakdefi-2e1d4f97cc1a737a9aa765b3748ff315.png';
import cosmostation from '../../assets/images/cosmosstation.png';
import graph from '../../assets/images/graph.jpeg';
import kardiachain from '../../assets/images/kardachain.png';
import keplr from '../../assets/images/keplr.png';
import harmony from '../../assets/images/harmony.png';
import iconex from '../../assets/images/iconex.png';
import fetch from '../../assets/images/fetch.jpeg';
import xdc from '../../assets/images/xdc-9a98bff95dffc41869b8e77912a6cc54.png';
import unstoppable from '../../assets/images/unstoppable-0d3474dcd7572ac2080b0f4ce632dfac.png';
import meetone from '../../assets/images/meetone-01093db7d99e3e6cf5cca68b616f8255.jpeg';
import dok from '../../assets/images/dok-a32c522e109217cc2a1a2a310f3c9bf7.png';
import at from '../../assets/images/atwallet-2611d814a50a964b89d5f8bc1e5cb3a0.png';
import morix from '../../assets/images/morixwallet-aa7d607cf9ad52afeb3b7c83e5f34eba.png';
import midas from '../../assets/images/midas-wallet-5c5057d972ca621414f077541845fc61.png';
import ellipal from '../../assets/images/ellipal.png';
import keyringpro from '../../assets/images/keyring pro.png';
import blockchain from '../../assets/images/blockchain-logo.png';
import bsc from '../../assets/images/bsc-logo.png';
import dharma from '../../assets/images/Dharma.jpeg';
import halodefi from '../../assets/images/Halodefi.jpeg';
import talken from '../../assets/images/Talken.jpeg';
import kyberswap from '../../assets/images/Kyberswap.jpeg';
import tongue from '../../assets/images/tongue.jpeg';
import flare from '../../assets/images/Flare.jpeg';
import plasmapay from '../../assets/images/PlasmaPay.jpeg';
import wallet03 from '../../assets/images/03Wallet.jpeg';
import hashkeyme from '../../assets/images/HashKeyMe.jpeg';
import jadewallet from '../../assets/images/JadeWallet.jpeg';
import guardawallet from '../../assets/images/GuardaWallet.jpeg';
import defiant from '../../assets/images/Defiant.jpeg';
import trusteewallet from '../../assets/images/TrusteeWallet.jpeg';
import coinus from '../../assets/images/CoinUs.jpeg';
import cmorq from '../../assets/images/cmorq.jpeg';
import valora from '../../assets/images/Valora.jpeg';
import quiverx from '../../assets/images/QuiverX.jpeg';
import celo from '../../assets/images/CeloWallet.jpeg';
import encryptedink from '../../assets/images/EncryptedInk.jpeg';
import elastos from '../../assets/images/ElastosEssentials.jpeg';
import fusecash from '../../assets/images/fusecash.jpeg';
import bitpie from '../../assets/images/Bitpie.jpeg';
import aktionariat from '../../assets/images/aktionariat-c5784b26234a389632687a36d2fb3258 (1).png'
import walletconnect from '../../assets/images/walletconnect.jpeg';
import okex from '../../assets/images/16366474752706180001636647476390250000_content.JPG'
import Footer from '../Footer/Footer';




class Wallets extends React.Component{
    render() {
        return(
            <Aux>
                <Container>
                    <Row style={{textAlign: 'center', marginTop: '5px'}}>
                         <Col onClick={() => this.props.openModal('Metamask')} md={3} xs={6}>
                         <img className={classes.img_icons} src={metamask} alt="Metamask logo"/>
                         <p>Metamask</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Coinbase')} md={3} xs={6}>
                         <img className={classes.img_icons} src={coinbase} alt="Coinbase logo"/>
                         <p>Coinbase</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Trezor')} md={3} xs={6}>
                         <img className={classes.img_icons} src={trezor} alt="Trezor logo"/>
                         <p>Trezor</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('MyEtherWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={myetherwallet} alt="myetherwallet logo"/>
                         <p>MyEtherWallet</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Trust')} md={3} xs={6}>
                         <img className={classes.img_icons} src={trust} alt="Trust logo"/>
                          <p>Trust</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Atomic')} md={3} xs={6}>
                         <img className={classes.img_icons} src={atomic} alt="Atomic logo"/>
                         <p>Atomic</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Walletconnect')} md={3} xs={6}>
                         <img className={classes.img_icons1} src={walletconnect} alt="Walletconnect logo"/>
                         <p style={{marginTop: '2em'}}>Walletconnect</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Rainbow')} md={3} xs={6}>
                         <img className={classes.img_icons} src={rainbow} alt="Rainbow logo"/>
                         <p>Rainbow</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Argent')} md={3} xs={6}>
                         <img className={classes.img_icons} src={argent} alt="Argent logo"/>
                          <p>Argent</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Gnosis')} md={3} xs={6}>
                         <img className={classes.img_icons} src={gnosis} alt="Trust logo"/>
                         <p>Gnosis Safe Multisig</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Crypto')} md={3} xs={6}>
                         <img className={classes.img_icons} src={crypto} alt="Crypto logo"/>
                         <p>Crypto.com | DeFi Wallet</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Pillar')} md={3} xs={6}>
                         <img className={classes.img_icons} src={pillar} alt="Trust logo"/>
                         <p>Pillar</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Okex')} md={3} xs={6}>
                         <img className={classes.img_icons} src={okex} alt="Okex logo"/>
                         <p>Okex</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Stargazer')} md={3} xs={6}>
                         <img className={classes.img_icons} src={stagazer} alt="Stargazer logo"/>
                          <p>Stargazer</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Rose')} md={3} xs={6}>
                         <img className={classes.img_icons} src={rose} alt="Rose logo"/>
                         <p>Rose Wallet</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Phantom')} md={3} xs={6}>
                         <img className={classes.img_icons} src={phantom} alt="Phantom logo"/>
                         <p>Phantom</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Ledger')} md={3} xs={6}>
                         <img className={classes.img_icons} src={ledger} alt="Trust logo"/>
                         <p>Ledger</p>
                        </Col>


                        <Col onClick={() => this.props.openModal('Tron')} md={3} xs={6}>
                         <img className={classes.img_icons} src={tron} alt="Tron logo"/>
                          <p>Tron</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Sollet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={sollet} alt="Sollet logo"/>
                         <p>Sollet</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Solflare')} md={3} xs={6}>
                         <img className={classes.img_icons} src={solflare} alt="solflare logo"/>
                         <p>Solflare</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Yoroi')} md={3} xs={6}>
                         <img className={classes.img_icons} src={yoroi} alt="Yoroi logo"/>
                         <p>Yoroi</p>
                        </Col>


                        <Col onClick={() => this.props.openModal('imToken')} md={3} xs={6}>
                         <img className={classes.img_icons} src={imtoken} alt="imToken logo"/>
                          <p>imToken</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Anchor')} md={3} xs={6}>
                         <img className={classes.img_icons} src={anchor} alt="anchor logo"/>
                         <p>Anchor</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Onto')} md={3} xs={6}>
                         <img className={classes.img_icons} src={onto} alt="onto logo"/>
                         <p>ONTO</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('TokenPocket')} md={3} xs={6}>
                         <img className={classes.img_icons} src={tokenpocket} alt="TokenPocket logo"/>
                         <p>TokenPocket</p>
                        </Col>


                        <Col onClick={() => this.props.openModal('MathWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={mathwallet} alt="mathwallet logo"/>
                          <p>imToken</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Bitpay')} md={3} xs={6}>
                         <img className={classes.img_icons} src={bitpay} alt="bitpay logo"/>
                         <p>Bitpay</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('Maiar')} md={3} xs={6}>
                         <img className={classes.img_icons} src={maiar} alt="maiar logo"/>
                         <p>Maiar</p>
                        </Col>
                        <Col onClick={() => this.props.openModal('LedgerLive')} md={3} xs={6}>
                         <img className={classes.img_icons} src={ledgerlive} alt="ledgerlive logo"/>
                         <p>Ledger Live</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Walleth')} md={3} xs={6}>
                         <img className={classes.img_icons} src={walleth} alt="Walleth logo"/>
                         <p>Walleth</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Authereum')} md={3} xs={6}>
                         <img className={classes.img_icons} src={authereum} alt="authereum logo"/>
                         <p>Authereum</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Huobi')} md={3} xs={6}>
                         <img className={classes.img_icons} src={huobi} alt="Huobi logo"/>
                         <p>Huobi Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Eidoo')} md={3} xs={6}>
                         <img className={classes.img_icons} src={eidoo} alt="Eidoo logo"/>
                         <p>Eidoo</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Mykey')} md={3} xs={6}>
                         <img className={classes.img_icons} src={mykey} alt="Mykey logo"/>
                         <p>MYKEY</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Loopring')} md={3} xs={6}>
                         <img className={classes.img_icons} src={loopring} alt="Loopring logo"/>
                         <p>Loopring Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('TrustVault')} md={3} xs={6}>
                         <img className={classes.img_icons} src={trustvault} alt="trustvault logo"/>
                         <p>Loopring Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Coin98')} md={3} xs={6}>
                         <img className={classes.img_icons} src={coin98} alt="Coin98 logo"/>
                         <p>Coin98</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('CoolWallets')} md={3} xs={6}>
                         <img className={classes.img_icons} src={coolwallets} alt="CoolWallets logo"/>
                         <p>CoolWallet S</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Alice')} md={3} xs={6}>
                         <img className={classes.img_icons} src={alice} alt="Alice logo"/>
                         <p>Alice</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('AlphaWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={alphawallet} alt="AlphaWallet logo"/>
                         <p>AlphaWallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('DcentWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={dcentwallet} alt="DcentWallet logo"/>
                         <p>D'CENT Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Zelcore')} md={3} xs={6}>
                         <img className={classes.img_icons} src={zelcore} alt="Zelcore logo"/>
                         <p>Zelcore</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Nash')} md={3} xs={6}>
                         <img className={classes.img_icons} src={nash} alt="Nash logo"/>
                         <p>Nash</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Coinomi')} md={3} xs={6}>
                         <img className={classes.img_icons} src={coinomi} alt="Coinomi logo"/>
                         <p>Zelcore</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('GridPlus')} md={3} xs={6}>
                         <img className={classes.img_icons} src={gridplus} alt="GridPlus logo"/>
                         <p>GridPlus</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Cybavo')} md={3} xs={6}>
                         <img className={classes.img_icons} src={cybavo} alt="Cybavo logo"/>
                         <p>CYBAVO Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Tokenary')} md={3} xs={6}>
                         <img className={classes.img_icons} src={tokenary} alt="Tokenary logo"/>
                         <p>Tokenary</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Wazirx')} md={3} xs={6}>
                         <img className={classes.img_icons} src={wazirx} alt="Wazirx logo"/>
                         <p>Wazirx</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Torus')} md={3} xs={6}>
                         <img className={classes.img_icons} src={torus} alt="Torus logo"/>
                         <p>Torus</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Spatium')} md={3} xs={6}>
                         <img className={classes.img_icons} src={spatium} alt="Spatium logo"/>
                         <p>Spatium</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('SafePal')} md={3} xs={6}>
                         <img className={classes.img_icons} src={safepal} alt="SafePal logo"/>
                         <p>SafePal</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Equal')} md={3} xs={6}>
                         <img className={classes.img_icons} src={equal} alt="Equal logo"/>
                         <p>Equal</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Infinito')} md={3} xs={6}>
                         <img className={classes.img_icons} src={infinito} alt="Infinito logo"/>
                         <p>Infinito</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Walletio')} md={3} xs={6}>
                         <img className={classes.img_icons} src={walletio} alt="Walletio logo"/>
                         <p>Wallet.io</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Infinity')} md={3} xs={6}>
                         <img className={classes.img_icons} src={infinity} alt="Infinity logo"/>
                         <p>Infinity Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('OwnBit')} md={3} xs={6}>
                         <img className={classes.img_icons} src={ownbit} alt="OwnBit logo"/>
                         <p>Ownbit</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('EasyPocket')} md={3} xs={6}>
                         <img className={classes.img_icons} src={easypocket} alt="EasyPocket logo"/>
                         <p>EasyPocket</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('BridgeWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={bridgewallet} alt="BridgeWallet logo"/>
                         <p>EasyPocket</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('SparkPoint')} md={3} xs={6}>
                         <img className={classes.img_icons} src={sparkpoint} alt="SparkPoint logo"/>
                         <p>SparkPoint</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('ViaWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={viawallet} alt="ViaWallet logo"/>
                         <p>Via Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('BitKeep')} md={3} xs={6}>
                         <img className={classes.img_icons} src={bitkeep} alt="BitKeep logo"/>
                         <p>BitKeep</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Vision')} md={3} xs={6}>
                         <img className={classes.img_icons} src={vision} alt="Vision logo"/>
                         <p>Vision</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('SwiftWallet')} md={3} xs={6}>
                         <img className={classes.img_icons} src={swiftwallet} alt="SwiftWallet logo"/>
                         <p>SWFT Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('PeakDefi')} md={3} xs={6}>
                         <img className={classes.img_icons} src={peakdefi} alt="SwiftWallet logo"/>
                         <p>PEAKDEFI Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Cosmostation')} md={3} xs={6}>
                         <img className={classes.img_icons} src={cosmostation} alt="Cosmostation logo"/>
                         <p>Cosmostation</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('GraphProtocol')} md={3} xs={6}>
                         <img className={classes.img_icons} src={graph} alt="GraphProtocol logo"/>
                         <p>Graph Protocol</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Kardiachain')} md={3} xs={6}>
                         <img className={classes.img_icons} src={kardiachain} alt="Kardiachain logo"/>
                         <p>KardiaChain</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Keplr')} md={3} xs={6}>
                         <img className={classes.img_icons} src={keplr} alt="Keplr logo"/>
                         <p>KardiaChain</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Harmony')} md={3} xs={6}>
                         <img className={classes.img_icons} src={harmony} alt="Harmony logo"/>
                         <p>Harmony</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Iconex')} md={3} xs={6}>
                         <img className={classes.img_icons} src={iconex} alt="Iconex logo"/>
                         <p>ICONex</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Fetch')} md={3} xs={6}>
                         <img className={classes.img_icons} src={fetch} alt="Fetch logo"/>
                         <p>Fetch</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Xdc')} md={3} xs={6}>
                         <img className={classes.img_icons} src={xdc} alt="Xdc logo"/>
                         <p>XDC Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Unstoppable')} md={3} xs={6}>
                         <img className={classes.img_icons} src={unstoppable} alt="Unstoppable logo"/>
                         <p>Unstoppable Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('MeetOne')} md={3} xs={6}>
                         <img className={classes.img_icons} src={meetone} alt="MeetOne logo"/>
                         <p>MEET.ONE</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Dok')} md={3} xs={6}>
                         <img className={classes.img_icons} src={dok} alt="Dok logo"/>
                         <p>Dok Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('AT')} md={3} xs={6}>
                         <img className={classes.img_icons} src={at} alt="AT logo"/>
                         <p>AT.Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Morix')} md={3} xs={6}>
                         <img className={classes.img_icons} src={morix} alt="Morix logo"/>
                         <p>MoriX Wallet</p>
                        </Col>

                        <Col onClick={() => this.props.openModal('Midas')} md={3} xs={6}>
                         <img className={classes.img_icons} src={midas} alt="Midas logo"/>
                         <p>Midas Wallet</p>
                        </Col>

                          <Col onClick={() => this.props.openModal('Ellipal')} md={3} xs={6}>
                          <img className={classes.img_icons} src={ellipal} alt="Ellipal logo"/>
                          <p>Ellipal</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('KeyRingPro')} md={3} xs={6}>
                          <img className={classes.img_icons} src={keyringpro} alt="KeyRingPro logo"/>
                          <p>KEYRING PRO</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Blockchain')} md={3} xs={6}>
                          <img className={classes.img_icons} src={blockchain} alt="Blockchain logo"/>
                          <p>Blockchain</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Binance Smart Chain')} md={3} xs={6}>
                          <img className={classes.img_icons} src={bsc} alt="Bsc logo"/>
                          <p>Binance Smart Chain</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Dharma')} md={3} xs={6}>
                          <img className={classes.img_icons} src={dharma} alt="Dharma logo"/>
                          <p>Dharma</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Halodefi')} md={3} xs={6}>
                          <img className={classes.img_icons} src={halodefi} alt="Halodefi logo"/>
                          <p>HaloDeFi Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Talken')} md={3} xs={6}>
                          <img className={classes.img_icons} src={talken} alt="Talken logo"/>
                          <p>Talken Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('KyberSwap')} md={3} xs={6}>
                          <img className={classes.img_icons} src={kyberswap} alt="KyberSwap logo"/>
                          <p>KyberSwap</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Tongue')} md={3} xs={6}>
                          <img className={classes.img_icons} src={tongue} alt="Tongue logo"/>
                          <p>Tongue Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Flare')} md={3} xs={6}>
                          <img className={classes.img_icons} src={flare} alt="Flare logo"/>
                          <p>Flare Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('PlasmaPay')} md={3} xs={6}>
                          <img className={classes.img_icons} src={plasmapay} alt="PlasmaPay logo"/>
                          <p>PlasmaPay</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('03Wallet')} md={3} xs={6}>
                          <img className={classes.img_icons} src={wallet03} alt="03Wallet logo"/>
                          <p>03Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('HashKeyMe')} md={3} xs={6}>
                          <img className={classes.img_icons} src={hashkeyme} alt="HashKeyMe logo"/>
                          <p>HashKey Me</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Jade')} md={3} xs={6}>
                          <img className={classes.img_icons} src={jadewallet} alt="JadeWallet logo"/>
                          <p>Jade Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Guarda')} md={3} xs={6}>
                          <img className={classes.img_icons} src={guardawallet} alt="Guarda logo"/>
                          <p>Guarda Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Defiant')} md={3} xs={6}>
                          <img className={classes.img_icons} src={defiant} alt="Defiant logo"/>
                          <p>Defiant</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('TrusteeWallet')} md={3} xs={6}>
                          <img className={classes.img_icons} src={trusteewallet} alt="TrusteeWallet logo"/>
                          <p>Trustee Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('CoinUs')} md={3} xs={6}>
                          <img className={classes.img_icons} src={coinus} alt="CoinUs logo"/>
                          <p>CoinUs</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Cmorq')} md={3} xs={6}>
                          <img className={classes.img_icons} src={cmorq} alt="Cmorq logo"/>
                          <p>Cmorq</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Valora')} md={3} xs={6}>
                          <img className={classes.img_icons} src={valora} alt="Valora logo"/>
                          <p>Valora</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('QuiverX')} md={3} xs={6}>
                          <img className={classes.img_icons} src={quiverx} alt="QuiverX logo"/>
                          <p>QuiverX</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Celo')} md={3} xs={6}>
                          <img className={classes.img_icons} src={celo} alt="Celo logo"/>
                          <p>Celo Wallet</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('EncryptedInk')} md={3} xs={6}>
                          <img className={classes.img_icons} src={encryptedink} alt="EncryptedInk logo"/>
                          <p>Encrypted Ink</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('ElastosEssentials')} md={3} xs={6}>
                          <img className={classes.img_icons} src={elastos} alt="ElastosEssentials logo"/>
                          <p>Elastos Essentials</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('FuseCash')} md={3} xs={6}>
                          <img className={classes.img_icons} src={fusecash} alt="FuseCash logo"/>
                          <p>fuse.cash</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Bitpie')} md={3} xs={6}>
                          <img className={classes.img_icons} src={bitpie} alt="Bitpie logo"/>
                          <p>Bitpie</p>
                          </Col>

                          <Col onClick={() => this.props.openModal('Aktionariat')} md={3} xs={6}>
                          <img className={classes.img_icons} src={aktionariat} alt="Aktionariat logo"/>
                          <p>Aktionariat</p>
                          </Col>
                    </Row>
                    <Footer />
                </Container>
            </Aux>
        );
    }
}

export default Wallets