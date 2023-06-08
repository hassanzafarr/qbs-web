import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Image from "next/image";


const Total_Enterprise_Projects_Doughnut_Chart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const endCount = 10;
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
        backgroundColor: ['#0381CA', 'transparent'],
        hoverBackgroundColor: ['#0381CA', 'transparent'],
        borderColor: ['#0381CA', '#0381CA'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart_holder">
      <div className='chart'>
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
            <p className='counting_1'>{count}</p>
            <p className='count_Title'>Enterprise Projects</p>
            <p className='punch_line_1'>10 Enterprise Projects: <span style={{color:'white'}}>Setting the Bar Higher, Achieving Excellence.</span></p> 
        </div>
      </div>
    </div>
  );
};

export default Total_Enterprise_Projects_Doughnut_Chart;
