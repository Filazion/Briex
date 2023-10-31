import React from 'react';
import { Link } from 'react-router-dom';
//import { FiFacebook, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';


const SocialMediaIcons = () => {
    const socialMediaIcons = [
        {
            id: 1,
            //icon: <FiFacebook />,
            icon: <FaFacebook />,
            url: 'https://www.facebook.com/',
        },
        {
            id: 2,
            icon: <FaTwitter />,
            url: 'https://www.twitter.com/',
        },
        {
            id: 3,
            icon: <FaGithub />,
            url: 'https://www.github.com/',
        },
        {
            id: 4,
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/',
        },
    ];
  return (
    <ul className='flex items-center gap-4 sm:gap-8'>
        {socialMediaIcons.map((icon) => (
            <a href={icon.url} target='__blank' key={icon.id}
            className='text-blue-400 cursor-pointer rounded-lg duration-300'
            >
                <i className='text-xl sm:text-2xl md:text-3xl'>{icon.icon}</i>
            </a>
            
        ))}
    </ul>
  );
};

export default SocialMediaIcons