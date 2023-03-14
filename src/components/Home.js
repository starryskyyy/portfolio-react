import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';
import mySvg from '../assets/img/Background_Blurs.svg';

const Pip = ({ isOn }) =>
    <div className={`pip ${isOn && 'pip--on'}`}></div>

const BinaryDigit = ({ base2NumberAsArray }) =>
    <div className="binary-digit">
        {
            base2NumberAsArray.map((pip, idx) => <Pip key={idx} isOn={pip === 1} />)
        }
    </div>

const BinaryDigitGroup = ({ group }) =>
    <div className="binary-digit-group">
        {
            group.map((binaryDigit, idx) => <BinaryDigit base2NumberAsArray={binaryDigit} key={idx} />)
        }
    </div>

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            digits: [[], [], []]
        }
    }

    componentDidMount() {
        setInterval(function () {
            const date = new Date();
            const newDigits = [
                numberAsBinaryArrayPair(date.getHours()),
                numberAsBinaryArrayPair(date.getMinutes()),
                numberAsBinaryArrayPair(date.getSeconds())
            ];
            this.setState({
                digits: newDigits
            });
        }.bind(this), 1000);
    }


    render() {
        return (
            <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full w-full">
                <div className="flex flex-col h-full justify-between w-full">
                    <header className="h-auto"><NavBar /></header>
                    <main className="mb-auto w-full h-full">
                        <div className="flex flex-row w-full m-0 h-full ...">
                            <div className="w-auto h-auto flex mt-60 pl-40">
                                <div>
                                    <h1 className="text-white text-4xl">Elizaveta Vygovskaia</h1>
                                    <TypeAnimation

                                        // Same String at the start will only be typed once, initially
                                        sequence={[
                                            '> Back-end developer',
                                            1000,
                                            '> Full-stack developer',
                                            1000,
                                        ]}
                                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                        style={{ fontSize: '2em', color: "#4D5BCE" }}
                                        wrapper="span" // Animation will be rendered as a <span>
                                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                                    />
                                    <p className="text-secondary-1">{'//'} you can find more of my projects on my GitHub</p>
                                    <p><span className="text-secondary-3">const&nbsp;</span><span class="text-accent-2">githubLink&nbsp;</span><span class="text-white">=&nbsp;</span><a class="text-accent-3" target="_blank" rel="noreferrer" href="https://github.com/starryskyyy/">"https://github.com/starryskyyy/"</a></p>
                                </div>

                            </div>
                            <div className="w-full h-full" style={{ backgroundImage: `url(${mySvg})` }}>
                                <div id="parent" className="w-108 h-96 border-solid border border-lines rounded-md ml-72 mt-40 bg-gradient-to-br from-gradient-1 to-transparent shadow-lg" >
                                    <img src={require('../assets/img/bolt.png')} alt="bolt" />
                                    <img src={require('../assets/img/bolt.png')} alt="bolt" />
                                    <img src={require('../assets/img/bolt.png')} alt="bolt" />
                                    <img src={require('../assets/img/bolt.png')} alt="bolt" />

                                    <div className=" w-90 h-80 my-8 ml-8 border-solid border border-lines rounded-md bg-primary-2 shadow-inner">
                                        <p className="text-secondary-1 pt-6 pl-12 mb-10">{'//'} binary clock</p>
                                        <div className="flex justify-center items-center">
                                            {
                                                this.state.digits.map(digit => <BinaryDigitGroup group={digit} />)
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div></main>
                    <footer className=""><Footer /></footer>
                </div>
            </div>
        )
    }
}


function numberToBinary(base10Number) {
    const base2Values = [8, 4, 2, 1];
    let output = [0, 0, 0, 0];
    let remainder = base10Number;

    base2Values.forEach((val, idx) => {
        const left = remainder - val;

        if (left >= 0) {
            output[idx] = 1;
            remainder = left
        }
    });

    return output;
}

function numberAsBinaryArrayPair(number) {
    const pair = [];
    if (number < 10) {
        pair[0] = numberToBinary();
        pair[1] = numberToBinary(number);
    } else {
        const numberAsArray = String(number).split('');
        pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
        pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
    }

    return pair;
}