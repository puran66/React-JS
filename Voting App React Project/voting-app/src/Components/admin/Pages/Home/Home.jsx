import React from 'react'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar navData={true} />
      <div className="container m-auto">
        <div className="Image-vote flex justify-center mt-6 w-[100%]">
          <img src="https://www.floridacondohoalawblog.com/wp-content/uploads/2022/11/Think-About-Elections-768x402.jpg" className=" w-[70%] sm:w-[65%] lg:w-[70%]" alt="vote image" />
        </div>
      </div>
      <div className="election-party grid sm:grid-cols-2 grid-cols-1 gap-12 p-4 lg:w-[80%] w-[80%] m-auto">
        <div className="current-party font-bold">
          <h4>Current Election Party</h4>
          <ol className="p-3 bg-[#f0f3f7] font-normal">
            <li className="border-b-2 p-3">1.  Aam Aadmi Party</li>
            <li className="border-b-2 p-3">2.  Bahujan Samaj Party</li>
            <li className="border-b-2 p-3">3.  Communist Party of India</li>
            <div className="flex justify-end">
              <a href="#" className="text-[blue] font-normal">see all</a>
            </div>
          </ol>

        </div>
        <div className="lastyaer-party font-bold">
          <h4>Last Year Election Party</h4>
          <ol className="p-3 bg-[#f0f3f7] font-normal">
            <li className="border-b-2 p-3">1.  Aam Aadmi Party</li>
            <li className="border-b-2 p-3">2.  Bahujan Samaj Party</li>
            <li className="border-b-2 p-3">3.  Communist Party of India</li>
            <div className="flex justify-end">
              <a href="#" className="text-[blue] font-normal">see all</a>
            </div>
          </ol>

        </div>
      </div>
      <div className="election-party grid sm:grid-cols-2 grid-cols-1 gap-12 p-4 lg:w-[70%] sm:w-[60%] w-[80%] m-auto">
        <div className="current-party font-bold">
          <h4 className="lg:text-[25px] md:text-[20px]">Last Year MLA</h4>
          <div className="bg-[#f0f3f7] p-3">
            <center className="mb-3">
              <h3 className="lg:text-[20px] md:text-[17px]">Prime Minister of India</h3>
            </center>
            <div className="flex lg:flex-row flex-col lg:text-[16px]  sm:text-[12px] text-[14px] items-center lg:justify-center">
              <div className="lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[160px] sm:w-[140px] sm:h-[120px] w-[200px] h-[200px]  bg-[#d9d9d9]"></div>
              <div className="p-3">
                <p>ABCDYD HAJSHSJ</p>
                <p>BoB : 1/2/3</p>
                <p>01 jan 2019- Incumbent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="current-party font-bold">
          <h4 className="lg:text-[25px] md:text-[20px]">Party Win</h4>
          <div className="bg-[#f0f3f7] p-3">
            <center className="mb-3">
              <h3 className="lg:text-[20px] md:text-[17px]">Bharatiya Janata Party</h3>
            </center>
            <div className="flex lg:flex-row flex-col lg:text-[16px]  sm:text-[12px] text-[14px] items-center lg:justify-center">
              <div className="lg:w-[200px] lg:h-[200px] md:w-[170px] md:h-[160px] sm:w-[140px] sm:h-[120px] w-[200px] h-[200px] bg-[#d9d9d9]"></div>
              <div className="p-3">
                <p>Party Name : ABCDEG</p>
                <p>Seat Number : 1/2/3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home