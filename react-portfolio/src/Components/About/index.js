import { useEffect, useState } from 'react'
import {
    faPython,
    faCss3,
    faJava,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Pic from '../../assets/images/baby-pic.jpg'
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="logos">
                <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="blue" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faJava} color="red" />
                </div>
            </div>
            <div className='text-zone'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>My name is Majed Althonayan, I was born and raised in Jeddah, Saudi Arabia to a loving family. 
                    I lived in jeddah until 8 years of age, at which point we migrated to live in London, England.
                </p>
                <p>I completed my schooling at Vyners School where I achieved excellent GCSE and A Level grades, 
                    allowing me to pursue my passion in studying Computer Science at University.
                </p>
                <p>I am currently studying computer Science at Royal Hollay in my final year hoping to go into a 
                    career in cyber security.
                </p>
            </div>

            <img
                className="baby-pic"
                src={Pic}
                alt=""
            />

        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default About