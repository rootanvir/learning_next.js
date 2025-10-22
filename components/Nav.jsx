"use client";

import '@styles/global.css';


import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { userState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLogin = true;
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
      {/*Mobile Navigation */}
      <div className='sm:flex hidden'>
        {isUserLogin ?(
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" 
            className='black_btn'>
              Create Post
            </Link>
          </div>
        ):(
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;