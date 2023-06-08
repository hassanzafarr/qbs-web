import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Image from "next/image";


const Total_SAP_Projects_Doughnut_Chart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const endCount = 25;
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
        backgroundColor: ['#06A49B', 'transparent'],
        hoverBackgroundColor: ['#06A49B', 'transparent'],
        borderColor: ['#06A49B', '#06A49B'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart_holder_2">
      <div className='chart_2'>
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
            <p className='counting_2'>{count}</p>
            <p className='count_Title'>SAP Projects</p>
            <p className='punch_line_2'>25 SAP Projects: <span style={{color:'white'}}>Transforming Businesses with SAP Expertise.</span></p> 
        </div>
      </div>
    </div>
  );
};

export default Total_SAP_Projects_Doughnut_Chart;
