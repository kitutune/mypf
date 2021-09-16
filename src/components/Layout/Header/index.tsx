import Head from 'next/head';
import React from 'react';
import { useTab } from 'components/Hooks/useTab';
import { BurgerMenu } from 'components/Layout/Header/BurgerMenu';
import { HouseIcon } from 'components/Layout/Header/HouseIcon';
import { Login } from 'components/Login';
export const Header: React.FC = () => {
  const { RandomWordOn, MyWordListOn, SubmissionOn } = useTab();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white opacity-90'>
        <header className='absolute top-0 left-0 right-0 '>
          <nav className='container mx-auto px-6 md:px-12 py-4'>
            <div className='md:flex justify-between items-center'>
              <div className='flex justify-between items-center'>
                <div className='md:hidden'>
                  <BurgerMenu />
                </div>
              </div>
              <div className='hidden md:flex items-center'>
                <a
                  onClick={RandomWordOn}
                  className='text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300'
                >
                  RandomWord
                </a>
                <a
                  onClick={MyWordListOn}
                  className='text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300'
                >
                  MyWordList
                </a>
                <a
                  onClick={SubmissionOn}
                  className='text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300'
                >
                  Submission
                </a>
                <a className='text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300'>
                  <Login />
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
