import Head from 'next/head';
import { links } from '../data/links';
import Image from 'next/image'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import Button from '../components/Shared/Button';
import Coming from '../components/Shared/Coming';


export default function Home() {
  return (
    <div>
        <Head>
            <title>DyroSource</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="bg-gradient-to-r from-dark to-lightdark sm:pt-0">
            <header className="w-full z-30 max-w-6xl py-2 mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a className="block" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 bg-gray-100 rounded-full p-2" viewBox="0 0 87 80" fill="none"><path d="M56.7631 11.25L74.9497 42.75C77.0666 46.4167 74.4204 51 70.1865 51H33.8135C29.5796 51 26.9334 46.4167 29.0503 42.75L47.2369 11.25C49.3538 7.58333 54.6462 7.58333 56.7631 11.25Z" fill="#E14E4B" stroke="white" stroke-width="3"></path><path d="M39.7631 21.25L57.9497 52.75C60.0666 56.4167 57.4204 61 53.1865 61H16.8135C12.5796 61 9.93337 56.4167 12.0503 52.75L30.2369 21.25C32.3538 17.5833 37.6462 17.5833 39.7631 21.25Z" fill="#E14E4B" stroke="white" stroke-width="3"></path></svg>
                    </a>
                    {/* <nav  className="flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center"> 
                            <a  href="" className="text-sm	 text-gray-700 font-semibold ">Dashboard</a>
                    
                            <a className="text-sm	text-gray-100 font-semibold">Log in</a>
                                <a className="ml-4 text-sm	 text-gray-100 font-semibold border-2 border-white px-6 py-2 transition-all rounded-lg hover:bg-white hover:text-dark">Register</a>
                        </ul>
                    </nav> */}
                </div>
            </header>
            <div className="max-w-6xl text-center px-5 justify-center items-center flex mx-auto sm:px-6 flex-col py-24">
                <p className="mb-4 flex items-center text-white font-semibold text-xs mx-auto">
                    <CheckBadgeIcon className="h-5 text-white "/>
                    <span className="ml-2">Coming soon</span>
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tighter tracking-tight mb-5">🚀Discover.</h1>
                <div className="max-w-lg">
                    <p className="text-md md:text-lg text-gray-300 mb-5">Discover new applications that make life easier for you as a designer or front-end developer. Manage and save your favourite applications too! 👋</p>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center -mt-7">
            <form className="max-w-4xl w-11/12 sm:w-3/6">   
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-6 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block p-5 shadow-xl pl-14 w-full text-sm font-medium text-gray-900 bg-gray-50 rounded-full border-2 border-gray-200 focus:ring-red-300 focus:border-red-300" placeholder="Search for tools ..."/>
                    <button className='btn md block  transition-all bg-rood hover:bg-hoveryellow text-white items-center justify-center px-5 font-medium py-2.5 text-sm rounded-full absolute right-2.5 top-2.5'>Search</button>
                </div>
            </form>
        </div>

        <div className="max-w-6xl mx-auto  px-5 sm:px-6 py-14 sm:py-24">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-dark font-semibold text-2xl">Your next most used tools 🔦 </h2>
                </div>
                <div>
                    <h2 className="text-slate-600 font-semibold text-base">Newest</h2>
                </div>
            </div>
        </div>
        <Coming/>
    </div>
    );
}
    