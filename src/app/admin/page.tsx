import React from 'react'

const AdminHome = () => {
  return (
    <div className='relative flex h-screen overflow-hidden bg-white'>
      <div className='fixed inset-0 z-20 flex lg:hidden'>
        <div aria-hidden="true" className="fixed inset-0 hidden" enter-class="opacity-0"><div className="absolute inset-0 bg-gray-600 opacity-75"></div></div>
      </div>
      <div className="w-14 shrink-0"></div>
      <div className='hidden lg:flex lg:shrink-0'>
        <div className='flex flex-col'>
          <div className='flex grow flex-col bg-white pt-4 dark:bg-gray-800'>
            <div className='headway-app absolute left-28 top-1'>
              <span id="HW_badge_cont" className="HW_badge_cont HW_visible"><span id="HW_badge" className="HW_badge HW_visible HW_animated HW_bounce" data-count-unseen="5">5</span></span>
            </div>
            <div className='flex flex-1 flex-col overflow-y-auto'>
              <div className='mx-auto flex shrink-0 items-center space-y-5'>
                <a href='/' className='inline-flex items-center space-x-1.5 text-sm text-black hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-100'>
                  {/* svg icon */}
                </a>
                <div className='mt-8 flex grow flex-col'>
                  <nav className='w-full flex-1 space-y-2 bg-white p-2 dark:bg-gray-800 lg:w-[170px]' aria-label='Sidebar'>
                    <div content="">
                      <a className="group flex items-center justify-start space-x-4 rounded p-4 text-sm font-medium tracking-wide text-gray-700 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://app.cleavr.io/dashboard">
                        <svg aria-hidden="true" fill="currentColor" preserveAspectRatio="xMidYMid meet" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6"><path d="M21 16V4H3v12h18m0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18M5 6h9v5H5V6m10 0h4v2h-4V6m4 3v5h-4V9h4M5 12h4v2H5v-2m5 0h4v2h-4v-2z"></path></svg>
                        <span className="">Dashboard</span>
                      </a>
                    </div>
                    <div content="">
                      <a className="group flex items-center justify-start space-x-4 rounded p-4 text-sm font-medium tracking-wide text-gray-700 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://app.cleavr.io/servers">
                        <svg className="w-6 scale-90" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                        <span className="">Servers</span>
                      </a>
                    </div>
                    <div content="">
                      <a className="group flex items-center justify-start space-x-4 rounded p-4 text-sm font-medium tracking-wide text-gray-700 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://app.cleavr.io/sites/all">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                        <span className="">Sites</span>
                      </a>
                    </div>
                    <div content="">
                      <a className="group flex items-center justify-start space-x-4 rounded p-4 text-sm font-medium tracking-wide text-gray-700 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://app.cleavr.io/webapps">
                        <svg className="w-6 scale-95" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505.07337,19.34375C503.85462,13.73438,498.32338,8.20312,492.72964,7c-32.62885-7-58.162-7-83.57017-7C305.39988,0,242.95858,55.09375,196.236,128H94.82015c-16.34567.01562-35.53314,11.875-42.87883,26.48438L2.53125,253.29688A28.125,28.125,0,0,0,0,264a24.00659,24.00659,0,0,0,24.00191,24h92.63266l-10.59373,21.42188c-9.33592,18.91015,4.27733,34.77539,6.15624,36.625l53.75381,53.71874c1.85352,1.86329,17.789,15.47852,36.62885,6.14063l21.37692-10.57813V488a24.14815,24.14815,0,0,0,24.00191,24,28.02956,28.02956,0,0,0,10.625-2.53125l98.72835-49.39063c14.625-7.3125,26.50191-26.5,26.50191-42.85937V315.70312C456.6008,268.9375,511.98156,206.25,511.98156,103,512.07531,77.46875,512.07531,52,505.07337,19.34375ZM36.94134,256l43.59759-87.20312c2.46874-4.82813,8.84373-8.78126,14.28122-8.79688h85.19517c-13.93943,28.0625-31.72065,64-47.56632,96ZM351.84316,417.1875c-.03125,5.4375-4.002,11.84375-8.87694,14.26562L255.95855,475V379.48438c32.00386-15.82813,67.81825-33.59376,95.88461-47.54688Zm14.625-128.28125c-39.50383,19.78125-135.88649,67.4375-177.92157,88.23437l-53.81632-53.54687c20.87692-42.23437,68.537-138.59375,88.22642-178.1875C273.17923,67,330.65374,32,409.15947,32c21.53317,0,42.00384,0,66.63075,4.29688,4.34374,24.85937,4.25,45.20312,4.18749,66.6875C479.97771,181.0625,444.97582,238.45312,366.46813,288.90625ZM367.98962,88.0293a55.99512,55.99512,0,1,0,55.99209,55.99414A56.01691,56.01691,0,0,0,367.98962,88.0293Zm0,79.99218a23.998,23.998,0,1,1,23.99605-23.998A24.02247,24.02247,0,0,1,367.98962,168.02148Z"></path>
                        </svg>
                      <span className="">Deployments</span>
                      </a>
                    </div>
                    <div content="">
                      <a className="group flex items-center justify-start space-x-4 rounded p-4 text-sm font-medium tracking-wide text-gray-700 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://app.cleavr.io/dns">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        <span className="">Domain Records</span>
                      </a>
                    </div>
                    <div content="">
                      <a className="group flex items-center justify-start space-x-4 rounded p-4 text-sm font-medium tracking-wide text-gray-700 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://app.cleavr.io/quickscripts">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
                        <span className="">Quick Scripts</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome