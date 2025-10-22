"use client";

import '@styles/global.css';


import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { userState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLogin = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
      setProviders();
    }
  }, [])

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className='flex gap-2'>
        <Image
          src="/assets/images/logo.svg"
          alt="Logo image"
          className='object-contain'
          width={30}
          height={30}
        />
        <p className='logo_text'>Rootanvir</p>
      </Link>
      {/*Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLogin ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt"
              className='black_btn'>
              Create Post
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/profile.png'
                width={40}
                height={40}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))
            }

          </>
        )}
      </div>
      {/*Mobile Navigation*/}
      <div className='sm:hidden flex'>
        {isUserLogin ? (
          <div className='relative'>
            <Image
              src='/assets/images/profile.png'
              width={40}
              height={40}
              className='rounded-full cursor-pointer'
              alt='profile'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-md flex flex-col gap-2 p-3 w-48 text-center'>
                <Link
                  href='/profile'
                  className='dropdown_link '
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link '
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-0 black_btn w-full'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>


        ) : (<>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            ))
          }
        </>)}
      </div>



    </nav>
  );
}

export default Nav;