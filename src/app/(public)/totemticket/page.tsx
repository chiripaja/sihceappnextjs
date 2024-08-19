'use client'
import { useState } from 'react';
import { TicketDniPage2 } from './components/formticketdni2';
import { TicketNombre3 } from './components/formticketnombres3';
import Image from 'next/image';
import { TicketNombre2 } from './components/formticketnombres2';


type FormInput = {
  dni: string,
}

export default function Totemticket() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab: any) => {

    setActiveTab(tab);
  };


  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/images/bgticket.png"
          layout="fill"
          className='d-print-none'
          quality={100}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10  d-print-none"></div>
        <div className="relative z-10 print:items-start">
          <div className="flex flex-col justify-center  items-center  h-screen  w-full print:items-start print:justify-start">            
            <div className="w-full max-w-5xl bg-slate-100 rounded shadow ">
              <div className="border-b border-gray-400 dark:border-gray-700 mb-2 d-print-none">
                <ul className="flex flex-wrap -mb-px" id="myTab" role="tablist">
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-300 dark:hover:text-gray-300  ${activeTab === 'profile' ? 'dark:border-white group' : ''}`}
                      id="profile-tab"
                      onClick={() => handleTabClick('profile')}
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={activeTab === 'profile'}
                    >
                      DNI
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-300 dark:hover:text-gray-300   ${activeTab === 'dashboard' ? 'dark:border-white group' : ''}`}
                      id="dashboard-tab"
                      onClick={() => handleTabClick('dashboard')}
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected={activeTab === 'dashboard'}
                    >
                      NOMBRES
                    </button>
                  </li>
                </ul>
              </div>
              <div id="myTabContent">
                <div className={` bg-slate-100 rounded p-3 ${activeTab !== 'profile' && 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  {/*<TicketDniPage></TicketDniPage>*/}
                  <TicketDniPage2></TicketDniPage2>
                </div>
                <div className={`bg-slate-100 rounded p-3  ${activeTab !== 'dashboard' && 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <TicketNombre3></TicketNombre3>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </>
  )
}
