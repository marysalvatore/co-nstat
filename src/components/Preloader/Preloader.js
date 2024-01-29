import classes from './Preloader.module.css';
import React from 'react';
// import ReactLoading from 'react-loading';
import Lottie from 'react-lottie';
import * as location from '../../1055-world-locations.json';
import * as failure from '../../1122-failure.json';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Preloader extends React.Component {

    constructor(props){
        super(props)
        this.state={
            switch: false
        }
    }

    switchDefaultFunc = () => {
        this.setState({switchDefault: true})
    }

    render(){
    setTimeout(() => {
        this.switchDefaultFunc()
    },10000)

        let defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: location.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

          if(this.state.switchDefault) {
             defaultOptions = {
                loop: false,
                autoplay: false,
                animationData: failure.default,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              };
          }



        return(
          <Aux>
             <div className={classes.Pre} >
                {/* <ReactLoading text="connecting" type="bubbles" color="red" height={'20%'} width={'20%'} /> */}

               <div className={classes.inner}>

               <Lottie options={defaultOptions}
                  height={300}
                  width={300}/>


                {/* isStopped={this.state.isStopped} */}
                  {/* isPaused={this.state.isPaused} */}
                  <div>
                  <p className={classes.p}>{defaultOptions.loop === false ? 'Error Connecting to Wallet' : ''}</p>
                  </div>

               </div>
            </div>


          </Aux>

        );
    }

}

export default Preloader;