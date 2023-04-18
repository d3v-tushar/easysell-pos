import React from 'react';

const CardOne = () => {
  return (
    <div className='border border-stroke rounded-md m-2 p-2 bg-cyan-100'>
      <div className='rounded-sm  bg-cyan-100 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>



      </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h4 className='text-title-md text-3xl font-bold text-black dark:text-white'>
            5.157K
          </h4>
          <span className='text-xl font-bold font-2xl'>Total Product</span>
        </div>

        <span className='flex  text-xl font-bold items-center gap-1 text-meta-3'>
          0.61%
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

export default CardOne;
