import React from 'react';

const CardThree = () => {
  return (
    <div className='border border-stroke rounded-md m-2 p-2 bg-amber-100'>
      <div className='rounded-sm  bg-amber-100 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>


      </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h4 className='text-title-md text-3xl font-bold text-black dark:text-white'>
            $3.456K
          </h4>
          <span className='text-xl font-bold font-2xl'>Total Sell</span>
        </div>

        <span className='flex  text-xl font-bold items-center gap-1 text-meta-3'>
          0.43%
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

export default CardThree;
