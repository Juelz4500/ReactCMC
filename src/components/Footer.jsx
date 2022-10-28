import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaGithub,
  FaTiktok,
  FaTwitter
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';


const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Resources</h2>
            <ul>
              <li className='text-sm py-2'><a href="https://support.coingecko.com/hc/en-us">Help Center</a></li>
              <li className='text-sm py-2'><a href="https://www.coingecko.com/en/news">News</a></li>
              <li className='text-sm py-2'><a href="https://www.coingecko.com/en/public-companies-bitcoin">Bitcoin Treasury</a></li>
              <li className='text-sm py-2'><a href='https://www.coingecko.com/en/api/documentation'>Documentation</a></li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm py-2'><a href='https://www.coingecko.com/en/about'>About Us</a></li>
              <li className='text-sm py-2'><a href='https://www.coingecko.com/en/careers'>Careers</a></li>
              <li className='text-sm py-2'><a href='https://www.coingecko.com/en/faq'>FAQ</a></li>
              <li className='text-sm py-2'><a href='https://blog.coingecko.com/'>Company Blog</a></li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Sign up for crypto news</p>
              <div className='py-4'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Enter your email' />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign up</button>
                </form>
              </div>
              <div className='flex py-4 justify-between text-accent'>
                <a href="https://www.instagram.com/coingecko/"><AiOutlineInstagram /></a>
                <a href="https://www.tiktok.com/@coingeckotv"><FaTiktok /></a>
                <a href="https://twitter.com/coingecko"><FaTwitter /></a>
                <a href="https://www.facebook.com/coingecko"><FaFacebookF /></a>
                <a href="https://github.com/Juelz4500"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-4'>Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;