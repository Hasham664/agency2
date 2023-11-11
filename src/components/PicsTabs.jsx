import React from 'react';
import './picstabs.css';
import image1 from './tab-pic1.jpg';
import image2 from './tab-pic2.jpg';
import image3 from './tab-pic3.jpg';
import image4 from './tab-pic4.jpg';
import image5 from './tab-pic5.jpg';
import image6 from './tab-pic6.jpg';
import image7 from './tab-pic7.jpg';
import image8 from './tab-pic8.jpg';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';

export const PicsTabs = () => {
  return (
    <>
      <div className='ground-color bg-[#f8f9fc] mt-28 pb-24'>
        <div className='container'>
          <div class='pt-36 text-center'>
            <div
              id='card-type-tab-1'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-1'
            >
              <Fade>
                <p className='m-auto max-w-4xl	leading-normal text-xl md:text-4xl  text-[#18181b] dark:text-gray-400'>
                  Phenomenal Customer Service! I'm just starting out with the
                  team helped me so much with integrating this into my website.{' '}
                  <span className='underline'>Highly recommend.</span>
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>FATIMA ASRAFY</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-2'
              class='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-2'
            >
              <Fade>
                <p className='m-auto max-w-3xl	leading-normal text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  Exactly what I was looking for. Saved me a bit of time using
                  this template to start my project.
                  <p className='underline'> İt's pretty good.</p>
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Yusra Kay </span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-3'
              class='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-3'
            >
              <Fade>
                <p className='m-auto max-w-5xl	leading-normal text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  The best customer support I've ever received on Envato. The
                  author is absolutely great and he's always so fast to answer.
                  The template is <span className='underline'>amazing</span> and
                  very flexible. Thank you!!
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Arnav Pike</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-4'
              className='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-4'
            >
              <Fade>
                <p className='m-auto max-w-4xl	leading-normal text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  Product is of{' '}
                  <span className='underline'> good quality </span>
                  and easy to use, We are also the author on Envato and our
                  requirement is very high.I hired the team to do some custom
                  work and .
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Ana Barber</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-5'
              className='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-5'
            >
              <Fade>
                <p className='m-auto max-w-4xl	leading-normal text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  Affordable and excellent quality work. If you need a
                  high-quality front-end product, you should consider the
                  Rainbow team, they are quite patient and work great.
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Korban Burn</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-6'
              className='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-6'
            >
              <Fade>
                <p className='m-auto max-w-4xl	leading-normal  text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  Simply amazing support. Top Seller in terms of support. Thanks
                  a lot. I will keep buying your products.
                  <span className='underline'> amazing work </span>
                  bug free... thanks a lot
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Danny Ferreira -</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-7'
              className='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-7'
            >
              <Fade>
                <p className='m-auto max-w-4xl	leading-normal  text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  Simply amazing support. Top Seller in terms of support. Thanks
                  a lot. I will keep buying your products.
                  <span className='underline'> amazing work </span>
                  bug free... thanks a lot
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Danny Ferreira -</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
            <div
              id='card-type-tab-8'
              className='hidden'
              role='tabpanel'
              aria-labelledby='card-type-tab-item-8'
            >
              <Fade>
                <p className='m-auto max-w-4xl	leading-normal text-xl md:text-4xl text-[#18181b] dark:text-gray-400'>
                  Simply amazing support. Top Seller in terms of support. Thanks
                  a lot. I will keep buying your products.
                  <span className='underline'> amazing work </span>
                  bug free... thanks a lot
                </p>
                <h4 className=' mt-14 text-[#8c8c8c]'>
                  <span className='text-red-500'>Danny Ferreira -</span> - COO,
                  AMERIMAR ENTERPRISES, INC.
                </h4>
              </Fade>
            </div>
          </div>

          <div className=''>
            <nav
              className='flex justify-center pt-20 space-x-6 '
              aria-label='Tabs'
              role='tablist '
            >
              <div className='main'>
                <div className='flex flex-wrap hatwo'>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 active'
                    id='card-type-tab-item-1'
                    data-hs-tab='#card-type-tab-1'
                    aria-controls='card-type-tab-1'
                    role='tab'
                  >
                    <img src={image1} alt='' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-2'
                    data-hs-tab='#card-type-tab-2'
                    aria-controls='card-type-tab-2'
                    role='tab'
                  >
                    <img src={image2} alt='' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-3'
                    data-hs-tab='#card-type-tab-3'
                    aria-controls='card-type-tab-3'
                    role='tab'
                  >
                    <img src={image3} alt='' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-4'
                    data-hs-tab='#card-type-tab-4'
                    aria-controls='card-type-tab-4'
                    role='tab'
                  >
                    <img src={image4} alt='' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-3'
                    data-hs-tab='#card-type-tab-5'
                    aria-controls='card-type-tab-5'
                    role='tab'
                  >
                    <img src={image5} alt='' />
                  </button>
                </div>
                <div className='flex flex-wrap justify-center mt-6 hawrap'>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-3'
                    data-hs-tab='#card-type-tab-6'
                    aria-controls='card-type-tab-6'
                    role='tab'
                  >
                    <img src={image6} alt='' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-3'
                    data-hs-tab='#card-type-tab-7'
                    aria-controls='card-type-tab-7'
                    role='tab'
                  >
                    <img src={image7} alt='' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center gap-2 mx-4 my-3 -mb-px text-sm font-medium text-center text-gray-500 duration-150 border rounded-t-lg hover:scale-110 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white bg-gray-50 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    id='card-type-tab-item-3'
                    data-hs-tab='#card-type-tab-8'
                    aria-controls='card-type-tab-8'
                    role='tab'
                  >
                    <img src={image8} alt='' />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
