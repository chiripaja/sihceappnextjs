'use client'
import { TicketDniPage } from './components/formticketdni';
import { useState } from 'react';
import { TicketNombre } from './components/formticketnombres';
import { TicketDniPage2 } from './components/formticketdni2';


type FormInput = {
  dni: string,
}

export default function Totemticket() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab:any) => {

    setActiveTab(tab);
  };


  return (
    <>
     <div className="flex items-center justify-center h-screen bg-slate-900 w-full print:items-start ">
      <div className="w-full max-w-4xl ">
        <div className="border-b border-gray-200 dark:border-gray-700 mb-4 d-print-none">
          <ul className="flex flex-wrap -mb-px" id="myTab" role="tablist">
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block text-gray-200 hover:text-gray-200 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-300 dark:hover:text-gray-300  ${activeTab === 'profile' ? 'dark:border-white group' : ''}`}
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
          <TicketNombre></TicketNombre>
          </div>
        </div>

      
      </div>
    </div>
    </>
  )
}
