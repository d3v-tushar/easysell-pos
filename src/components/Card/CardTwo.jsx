import React from 'react';

const CardTwo = () => {
  return (
    <div className='border border-stroke rounded-md m-2 p-2 bg-rose-100'>
    <div className='rounded-sm  bg-rose-100 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>



    </div>

    <div className='mt-4 flex items-end justify-between'>
      <div>
        <h4 className='text-title-md text-3xl font-bold text-black dark:text-white'>
          10.187K
        </h4>
        <span className='text-xl font-bold font-2xl'>Total Profit</span>
      </div>

      <span className='flex  text-xl font-bold items-center gap-1 text-meta-3'>
        82%
        <svg
          className='fill-meta-3'
          width='10'
          height='11'
          viewBox='0 0 10 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z'
            fill=''
          />
        </svg>
      </span>
    </div>
  </div>
  </div>
  )
}

export default CardTwo;
