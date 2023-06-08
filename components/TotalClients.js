import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Image from "next/image";


const Total_Clients_Doughnut_Chart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const endCount = 65;
      const increment = Math.ceil(endCount / 100);

      setCount(prevCount => {
        if (prevCount >= endCount) {
          clearInterval(interval);
          return endCount;
        }
        return prevCount + increment;
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const data = {
    datasets: [
      {
        data: [count, 100 - count],
        backgroundColor: ['#1F487C', 'transparent'],
        hoverBackgroundColor: ['#1F487C', 'transparent'],
        borderColor: ['#1F487C', '#1F487C'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart_holder_4">
      <div className='chart_4'>
        <Doughnut
          data={data}
          options={{
            cutoutPercentage: 90,
            animation: {
              animateRotate: true,
              duration: 3000,
            },
            legend: {
              display: true,
            },
            tooltips: {
              enabled: true,
            },
          }}
        />
      </div>

      <div className='total_clients_count'>
       
       <div className='insight_separator_image_holder'>
          <Image  src="/insights_separator.png" alt="Insight Separator" width={8} height={210} />
       </div>

        <div className="count_text_1">
            <p className='counting_4'>{count}</p>
            <p className='count_Title'>Successful Clients</p>
            <p className='punch_line_4'>65 Satisfied Clients: <span style={{color:'white'}}>Fueling Success Stories with Unparalleled Service.</span></p> 
        </div>
      </div>
    </div>
  );
};

export default Total_Clients_Doughnut_Chart;
