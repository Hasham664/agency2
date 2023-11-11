import React from 'react';
import './bussnes.css';
import { BsWifi } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCameraFill } from 'react-icons/bs';
import { GiElectric } from 'react-icons/gi';
import { FiLayers } from 'react-icons/fi';
import { FiMonitor } from 'react-icons/fi';

function Bussnes() {
  return (
    <>
      <div className='container'>
        <div className='busGrid'>
          <div className='box text-[#f9004d] hover:bg-[#f9004d] hover:text-white'>
            <BsWifi className='m-auto text-4xl ' />
            <h3>Business Stratagy</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className='box text-[#f9004d] hover:bg-[#f9004d] hover:text-white'>
            <FiLayers className='m-auto text-4xl ' />
            <h3>Website Development</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className='box text-[#f9004d] hover:bg-[#f9004d] hover:text-white'>
            <BsFillPersonFill className='m-auto text-4xl ' />

            <h3>Marketing & Reporting</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className='box text-[#f9004d] hover:bg-[#f9004d] hover:text-white'>
            <FiMonitor className='m-auto text-4xl ' />
            <h3>Mobile Development</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className='box text-[#f9004d] hover:bg-[#f9004d] hover:text-white'>
            <BsFillCameraFill className='m-auto text-4xl ' />

            <h3>Marketing & Reporting</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
          <div className='box text-[#f9004d] hover:bg-[#f9004d] hover:text-white'>
            <GiElectric className='m-auto text-4xl ' />

            <h3>Mobile Development</h3>
            <p>
              I throw myself down among the tall grass by the stream as I lie
              close to the earth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bussnes;
