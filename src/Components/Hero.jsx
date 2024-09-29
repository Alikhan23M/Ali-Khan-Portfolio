// src/components/Hero.js
import React,{useState} from 'react';
import { FaGithub, FaLinkedin,FaEnvelope,FaPhone,FaWhatsapp,FaMapMarkerAlt} from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';
import Profile from '../Assets/Ali Khan.png';
import { Link } from 'react-router-dom';

// ================================

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGithub, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SiTailwindcss, SiBootstrap, SiMongodb } from 'react-icons/si';

// Add the FontAwesome icons to the library
library.add(faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGithub);

const skills = [
    { icon: faHtml5, name: 'HTML', color: '#E34F26' },
    { icon: faCss3Alt, name: 'CSS', color: '#1572B6' },
    { icon: faJsSquare, name: 'JavaScript', color: '#F7DF1E' },
    { icon: faReact, name: 'React', color: '#61DAFB' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#38B2AC' },
    { icon: faNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: faGithub, name: 'GitHub', color: '#181717' },
    { icon: faSearchengin, name: 'SEO', color: '#FF5722' },
];

// =================

const Hero = () => {



    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        formData.append('service_id', 'nexskyofficial@gmail.com');
        formData.append('template_id', 'template_csav9no');
        formData.append('user_id', 'yDwZwZ-kAczpTpQNw');
        formData.append('from_name', formData.get('name')); // Add sender's name
        formData.append('reply_to', formData.get('email')); // Add sender's email
        formData.append('message', formData.get('message')); // Add sender's message

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Message sent successfully');
                setMessageSent(true);
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
                setTimeout(() => setMessageSent(false), 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Oops... Something went wrong. Please try again later.');
        }
    };




    return (
        <>
            <section id='home' className="hero bg-black flex flex-col md:flex-row items-center justify-center text-center md:text-left text-white px-4 md:px-8 relative pt-20 md:pt-0 pb-20 md:pb-0 pt-20 md:pt-48"
            >

                <img className="rounded-full w-64 h-64 md:w-96 md:h-96 mb-6 mt-3 md:mb-0 md:mb-8 md:ml-8 order-1 md:order-2 shadow-xl shadow-blue-600" src={Profile} alt="Ali Khan" />
                <div className="hero-content max-w-4xl mx-auto mt-20 md:mt-0 order-2 md:order-1">
                    <Typewriter
                        textStyle={{ fontFamily: 'Arial', color: '#FFFFFF', fontWeight: 'bold', fontSize: '2em' }}
                        startDelay={100}
                        cursorColor="#FFFFFF"
                        multiText={[
                            "Hi, I'm Ali Khan",
                            "Full-Stack Developer",
                            "React Enthusiast"
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                        deleteSpeed={50}
                        multiTextLoop
                    />
                    <p className="mt-4 text-lg text-justify px-3">I am passionate about creating efficient and scalable web applications. With a strong background in both front-end and back-end development, I strive to deliver seamless user experiences.</p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <a href="https://github.com/Alikhan23M" target="_blank" rel="noopener noreferrer">
                            <FaGithub size="2em" className="text-white hover:text-black hover:bg-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/ali-khan-972758316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size="2em" className="text-white hover:text-blue-700 hover:bg-white" />
                        </a>
                    </div>
                    <Link to={'/projects'}><button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">View My Work</button></Link>
                    
                </div>
            </section>
            {/* ========================== */}

            <section id='Skills' className="skills bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-blue-600">My Skills</h2>
                    <div className="flex flex-wrap justify-center">
                        {skills.map((skill, index) => (
                            <div key={index} className="m-4">
                                {skill.icon.prefix ? (
                                    <FontAwesomeIcon icon={skill.icon} size="3x" style={{ color: skill.color }} className="cursor-pointer zoom" />
                                ) : (
                                    <skill.icon size="3em" style={{ color: skill.color }} className="cursor-pointer zoom" />
                                )}
                                <p className="mt-2 text-lg">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*======================= */}

            <section id="about" className="about bg-black text-white py-20">
                <div className="container mx-auto flex gap-4 flex-col md:flex-row items-center justify-center">
                    <div className="w-1/3 w-full flex justify-center md:justify-end">
                        <img className=" w-48 h-48 md:w-96 md:h-96 mb-6 mt-3 md:mb-0 md:ml-8 shadow-xl shadow-blue-600" src={Profile} alt="Ali Khan" />
                    </div>
                    <div className="md:w-1/2 w-full p-4 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-lg mb-4 text-justify px-3">
                            Hi, I’m Ali Khan, a passionate web developer with a strong foundation in React and Node.js. Currently, I am a third-semester student pursuing a degree in Software Engineering at UET Mardan. My journey in the tech world is driven by a love for building unique projects and a keen interest in cybersecurity.
                        </p>
                        <p className="text-lg mb-4 text-justify px-3">
                            I am actively preparing a presentation on cyber crime awareness, aiming to educate and inform others about the importance of online safety. My technical skills extend to C++, where I enjoy tackling complex problems such as reversing stacks using additional stacks and non-array variables.
                        </p>
                        <p className="text-lg mb-4 text-justify px-3">
                            In addition to my academic pursuits, I am always eager to explore new technologies and contribute to open-source projects. My goal is to continuously learn and grow, taking on new challenges that push the boundaries of my knowledge and skills.
                        </p>
                        <p className="text-lg text-justify px-3">
                            Let’s connect and collaborate on exciting projects that make a difference!
                        </p>
                       <Link to={'https://wa.me/923429327224'}> <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" target="_blank" rel="noopener noreferrer">Connect</button></Link>
                    </div>
                </div>
            </section>

                        {/* =========================== */}

        <section id='contact' className='pt-6'>
             <div className="relative body-background bg-gray-100 p-3 w-full">
                <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
                <div className="text-center m-12">
                    <h1 className='font-bold text-blue-600 text-3xl'>Contact <span className='text-blue-800'>& Wrok Together</span></h1>
                </div>
                <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-6">
                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg text-center">
                            <FaPhone className="text-center text-2xl " />
                            <Link to={'tel:+923429327224'} className=" mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >+92 342 9327 224</Link>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                            <FaEnvelope className="text-2xl text-center" />
                            <Link to={'mailto:alikhan9327224@gmail.com'} className="mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >alikhan9327224@gmail.com</Link>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                            <FaWhatsapp className="text-2xl text-center" />
                            <a href={'https://wa.me/923429327224'} className="mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >+92 342 9327 224</a>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                            <FaMapMarkerAlt/>
                            <Link to={"https://maps.app.goo.gl/7CS2ufEVFA1ty8mm9"} className="mt-2 text-center hover:underline hover:decoration-black transition duration-3 ease underline decoration-white" target="_blank" rel="noopener noreferrer" >Rashakai / Nowshera</Link>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:mr-10">
                            <img src="https://media.istockphoto.com/id/1090878412/photo/smiling-businessman-pointing-right-with-two-hands-and-looking-at-camera-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=5B4-zJ6CtuZZ89rSr9STI7OqKCTVj4nqS1cLLSlmYcg=" alt="Contact Us" className="rounded-lg shadow-lg w-full h-full object-cover" />
                        </div>


                        <form onSubmit={handleSubmit} className="bg-black w-full max-w-lg p-4 rounded-lg shadow-lg">
                            <div className="mb-5">
                                <label htmlFor="name" className="text-white block mb-2 text h_color">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="text-white block mb-2 text h_color">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="text-white block mb-2 text h_color">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                ></textarea>
                            </div>
                            {messageSent && <p className="text-green-500 mb-5">Message sent successfully!</p>}
                            {errorMessage && <p className="text-red-500 mb-5">{errorMessage}</p>}
                            <div className="flex justify-center">
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
        </>

    );
};

export default Hero;
