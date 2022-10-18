import { Fragment , useRef} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import {LockClosedIcon} from '@heroicons/react/24/outline'

import HeroImage from '../components/Images/login_hero_image.svg'
import Logo from '../components/Images/icons8-crane-bird-100.png'
import Microsoft_Logo from '../components/Images/Google__G__Logo.svg'
// import Studentsview from './studentview'

import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup} from "firebase/auth";
import { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const navigation = [
  // { name: 'About Us', href: '/' },
//   { name: 'Features', href: '/' },
//   { name: 'Marketplace', href: '/' },
//   { name: 'Company', href: '/' },
]




export default function Login_2() {

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  let error = document.getElementById("alert")
  const navigate = useNavigate();

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }

    setData({ ...data, ...inputs })
  }

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((Response) =>{
      console.log(Response.user)
      navigate("/studentsview")
    })
    .catch((err) =>{
       setOpen(true)
      // error.classList.remove("hidden")
      // alert(err.message)
    });
  }

  const closeerror =() => {
    error.classList.add("hiddden")
  }

  const handleGoogleSubmit = () => {
    signInWithPopup(auth, googleProvider)
    .then((Response) =>{
      console.log(Response.user)
      navigate("/studentsview")
    })
    .catch((err) =>{
      alert(err.message)
    });
   
  }
  return (
    <>
     <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                       Incorrect Login Credentials
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Entered Email or Password is Incorrect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                 
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    <div className="relative overflow-x-hidden bg-white max-h-screen">
      <div class="bg-purple-100 rounded-lg py-5 px-6 mb-4 text-base text-purple-700 hidden" id='alert' role="alert">
        Incorrect Email or Password !!
        <button onClick={closeerror}>
          button1
        </button>
      </div>
      
      <div className="mx-auto max-w-9xl max-h-screen">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 lg:max-h-screen">
          {/* <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-4 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="/">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt="Your Company"
                        className="h-8 w-auto sm:h-10"
                        src={Logo}
                        />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <Link to ='/' className="font-medium text-indigo-600 hover:text-indigo-500">
                    Home
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={Logo}
                        alt=""
                        />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <Link
                    to="/"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                    >
                    Home
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto max-w-6xl px-2 sm:mt-8 sm:px-6 md:mt-12 lg:mt-4 lg:px-8  ">
            <div className="sm:text-center lg:text-left ">
            <div className="flex min-h-full  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={Logo}
                alt="Your Company"
                />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
               
              </p>
            </div>
        
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={event => handleInputs(event)}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={event => handleInputs(event)}
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                onClick={handleSubmit}
                
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg--700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 bg-indigo-600 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Sign in
                </button>
                <div className="w-full max-w-md space-y-8">
                <label htmlFor="Or" className=" mt-1  block text-sm text-center font-semibold text-gray-900">
                              OR
                  </label>
                </div>
                <button
                  onClick={handleGoogleSubmit}
                  className="group relative flex w-full top-2 justify-center rounded-md border border-transparent bg-gray-200 py-2 px-4 text-sm font-medium text-black hover:bg--700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img className="h-5 w-5" src={Microsoft_Logo} alt='' naria-hidden="true" />
                  </span>
                  Login with Google
                </button>
              </div>
        
          </div>
        </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:-right-5 lg:top-4 lg:w-1/1 sm:object-none ">
        <img
          className="w-full object-cover sm:h-full md:h-auto lg:h-5/6 lg:w-3/4 lg:ml-40 lg:-mt-8 "
          src={HeroImage}
          alt=""
          />
      </div>

    </div>
  </>
  )
}