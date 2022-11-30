import Head from 'next/head';
import { links } from '../data/links';
import Link from 'next/link';
import Image from 'next/image'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { LightBulbIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/24/outline'
import Button from '../components/Shared/Button';
import Coming from '../components/Shared/Coming';
import { gql, useQuery } from '@apollo/client'

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Category' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function Discover() {
    const [selected, setSelected] = useState(people[0])
    const { data, loading, error } = useQuery(AllLinksQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>
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
                            <a href="" className="text-sm text-gray-700 font-semibold ">Dashboard</a>
                            <a className="text-sm text-gray-100 font-semibold">Log in</a>
                            <a className="ml-4 text-sm text-gray-100 font-semibold border-2 border-white px-6 py-2 transition-all rounded-lg hover:bg-white hover:text-dark">Register</a>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="max-w-6xl text-center px-5 justify-center items-center flex mx-auto sm:px-6 flex-col py-14">
                <p className="mb-4 flex items-center text-white font-semibold text-xs mx-auto">
                    <CheckBadgeIcon className="h-5 text-white "/>
                    <span className="ml-2">Coming soon</span>
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tighter tracking-tight mb-5">🚀Discover.</h1>
                <div className="max-w-lg">
                    <p className="text-sm md:text-base text-gray-300 mb-5">Discover new applications that make life easier for you as a designer or front-end developer. Manage and save your favourite applications too! 👋</p>
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
                </div>
            </form>
        </div>

        <div className="max-w-6xl mx-auto  px-5 sm:px-6 py-14 sm:py-24">
            <div className="block sm:flex items-center justify-between">
                <div>
                    <h2 className="text-dark font-semibold text-2xl">Your next most used tools 🔦 </h2>
                    <div className='font-semibold pt-2 text-xs'>Want to add your own tool to the list? <span className='text-rood underline'><Link href="">make a request.</Link></span></div>
                </div>
                <div className='flex gap-2'>
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                    }`
                                }
                                value={person}
                                >
                                {({ selected }) => (
                                    <>
                                    <span
                                        className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                        {person.name}
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                        </div>
                    </Listbox>
                    <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                    }`
                                }
                                value={person}
                                >
                                {({ selected }) => (
                                    <>
                                    <span
                                        className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                        {person.name}
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>
        </div>
        {data.links.map(link => (
            <li key={link.id} className="shadow  max-w-md  rounded">
              <img className="shadow-sm" src={link.imageUrl} />
              <div className="p-5 flex flex-col space-y-2">
                <p className="text-sm text-blue-500">{link.category}</p>
                <p className="text-lg font-medium">{link.title}</p>
                <p className="text-gray-600">{link.description}</p>
                <a href={link.url} className="flex hover:text-blue-500">
                  {link.url.replace(/(^\w+:|^)\/\//, '')}
                  <svg
                    className="w-4 h-4 my-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        <div className="max-w-6xl mx-auto pb-12 px-5 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className='rounded-3xl bg-dark border-2  border-dark border-b-0  '>
                    <div className='flex justify-between items-center pt-5 px-5'>
                        <div className='text-white font-semibold flex items-center'>
                            <svg className='h-4 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>
                            <span className='ml-1'>Tailwind</span>
                        </div>
                        <div className='bg-white p-2 rounded-full border-2 border-slate-200'>
                            <svg className='h-5 text-indigo-700' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                    <div className='px-5 py-7 font-medium text-slate-100 leading-[16px] text-xs'>
                        Discover new applications that make life easier for you as a designer or front-end developer. Manage and save your favourite applications too! 👋
                    </div>
                    <div className='flex justify-between items-center bg-dark rounded-3xl px-5 pb-3 border-2 border-dark '>
                        <div className='text-white font-semibold flex items-center gap-1'>
                            <LinkIcon className='h-3'/>
                            <span className='font-semibold text-[11px]'>tailwind.com</span>
                        </div>
                        <div className='text-right'>
                            <div className='text-xs font-semibold uppercase text-slate-200'>Category</div>
                            <div className='text-xs font-semibold text-white'>Webdesign</div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <Coming/>
    </div>
    );
}
    