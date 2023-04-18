import React from 'react';
import ChartTwo from '../../components/Chart/ChartTwo';
import CardFour from './../../components/Card/CardFour';
import CardOne from './../../components/Card/CardOne';

import CardThree from './../../components/Card/CardThree';
import ChartThree from '../../components/Chart/ChartTwo';
import ChartOne from '../../components/Chart/ChartTwo';
import MapOne from '../../components/Chart/MapOne';
import CardTwo from '../../components/Card/CardTwo';
const Dashboard = () => {
    return (
        <div>
             <header className="sticky top-0 bg-white z-50">
        <h2 className="text-4xl font-bold leading-7 p-6 text-gray-600">
          
        </h2>
      </header>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 p-4'>
       
        <CardFour />
        
        <CardThree/>
        <CardOne/>
        <CardTwo/>
        
      </div>
      <div className='mt-4 h-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 p-6 m-6'>
        <ChartTwo />
        <ChartOne />
        <ChartThree />
        
        </div>
        </div>
    );
};

export default Dashboard;