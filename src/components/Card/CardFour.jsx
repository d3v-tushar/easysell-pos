import React from 'react';

const CardFour = () => {
  return (
    <div className='border border-stroke rounded-md m-2 p-5 bg-indigo-100' >
      <div className=' bg-red py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

      </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h4 className='text-title-md text-3xl font-bold text-black dark:text-white'>
            3.456
          </h4>
          <span className='text-xl font-bold font-2xl'>Total Users</span>
        </div>

        <span className='flex  text-xl font-bold items-center gap-1 text-meta-3'>
          0.95%
          <svg
            className='fill-meta-5'
            width='10'
            height='11'
            viewBox='0 0 10 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z'
              fill=''
            />
          </svg>
        </span>
      </div>
    </div>
    </div>
  )
}

export default CardFour;
