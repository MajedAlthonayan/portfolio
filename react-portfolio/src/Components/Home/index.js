import {useEffect, useState} from 'react'
import LogoTitle from '../../assets/images/logo_s.png';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','j','e','d','.']
    const jobArray = ['C','o','m','p','u','t','e','r', ' ', 'S','c','i','e','n','c','e',' ','S','t','u','d','e','n','t']
    // ['w','e','b','','d','e','v','e','l','o','p','e','r']
    


 

    useEffect(() => {
         setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer"></img>
                <AnimatedLetters letterClass={letterClass}  strArray={nameArray} idx={15}/>
                <br></br>
                <AnimatedLetters letterClass={letterClass}  strArray={jobArray} idx={12}/>
                </h1>
                <h2>Royal Holloway, University of London</h2>
                <h2>Year 3</h2>
                <Link to="/contact" className="flat-button">Contact me</Link>
            </div>
            <Logo />
        </div>        
        <Loader type="line-scale" />
        </>
    );
}

export default Home