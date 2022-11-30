import Head from 'next/head';
import { links } from '../data/links';
import Link from 'next/link';
import Image from 'next/image'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { LightBulbIcon } from '@heroicons/react/24/outline' 
import { SparklesIcon } from '@heroicons/react/24/outline'
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
                <nav  className="flex flex-grow">
                    <ul className="flex flex-grow justify-end flex-wrap items-center"> 
                        <a  href="" className="text-sm	 text-gray-700 font-semibold ">Dashboard</a>
                        <a className="text-sm	text-gray-100 font-semibold">Log in</a>
                        <a className="ml-4 text-sm	 text-gray-100 font-semibold border-2 border-white px-6 py-2 transition-all rounded-lg hover:bg-white hover:text-dark">Register</a>
                    </ul>
                </nav>
            </div>
        </header>
        <div className="max-w-6xl px-5 mx-auto sm:px-6 block py-24 md:py-32">
            <div className="block sm:flex items-center justify-between">
                <div className="">
                    <p className="mb-4 flex items-center text-white font-semibold text-xs mx-auto">
                       <CheckBadgeIcon className="h-5 text-white "/>
                       <span className="ml-2">Coming soon</span>
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tighter tracking-tight mb-5">The front-end resource tool.</h1>
                    <div className="max-w-lg">
                        <p className="md:text-md text-gray-300 mb-5">Discover new applications that make life easier for you as a designer or front-end developer. Manage and save your favourite applications too! 👋</p>
                        <Link href="/discover">
                            <div  className="hover:cursor-pointer max-w-xs btn md flex px-24 btn transition-shadow font-semibold py-2 rounded-lg  bg-rood hover:bg-hoveryellow  text-white items-center justify-center">
                                Discover
                                <SparklesIcon className="h-5 ml-1"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='h-72 w-96 relative hidden lg:block'>
                  <Image className='' layout="fill" objectFit="cover" src="/images/hero.png" alt=""/>
              </div>
            </div>
        </div>
        <div className="bg-slate-200">
            <div className="max-w-6xl h-4/5 px-5 mx-auto sm:px-6 block py-12">
                <div className="grid grid-cols-1 place-items-center gap-48">
                    <a href="https://uitgenodigd.be" className="flex items-center mb-4 sm:mb-0">
                        <svg className="sm:w-12 w-9 mr-2 fill-gray-700 text-gray-700 " viewBox="0 0 166 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="73.5391" width="38" height="104" rx="19" transform="rotate(45 73.5391 0)" ></rect>
                            <rect x="106.541" y="28.4092" width="38" height="104" rx="19" transform="rotate(45 106.541 28.4092)" ></rect>
                            <rect x="138.541" y="56.8184" width="38" height="104" rx="19" transform="rotate(45 138.541 56.8184)" ></rect>
                        </svg>
                    </a>       
                </div>
            </div>
        </div>
        <div className="bg-white">
            <div className="max-w-6xl px-5 mx-auto sm:px-6 block py-12">
                <div className="block sm:flex items-center justify-between">
                    <div className="max-w-2xl">
                        <div className="mt-1 flex items-center ">
                            <div className="p-2 bg-slate-50 rounded-full">                        
                                <LightBulbIcon className="h-5 text-rood "/>
                            </div>
                            <p className="ml-2 text-2xl sm:text-3xl font-bold tracking-tight text-lightdark">Today's Spotlight</p>
                        </div>
                        <p className="mt-2 ml-0 sm:ml-12 mb-2 max-w-sm text-base leading-7 text-slate-700">Applications made for developers who want to store all their useful sites and discover new things.</p>
                    </div>
                    <Link href="/discover">
                        <div className="text-base font-semibold text-indigo-600 hover:text-indigo-700">Browse all tools <span aria-hidden="true">→</span></div>
                    </Link>
                </div>
            </div>
        </div>
        <Coming/>
    </div>
    </div>
  );
}
