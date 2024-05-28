import { apis } from '../../../axios/apis';
import { prodAxiosInstance } from '../../../axios/instance';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { LineChart as Chart } from '@mui/x-charts/LineChart';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface DataPoint {
  id: number;
  timestamp: string;
  apyPercentage: number;
}

export const LineChart = () => {
  // const [data, setData] = useState<DataPoint[]>([]);
  const [xAxisData, setXAxisData] = useState<string[]>([]);
  const [yAxisData, setYAxisData] = useState<number[]>([]);

  const fetchGraph = async () => {
    try {
      const {
        data: { data },
      } = await prodAxiosInstance.get(apis.getGraph);

      const xData = data.map((item: DataPoint) =>
        new Date(item.timestamp).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })
      );
      const yData = data.map((item: DataPoint) => item.apyPercentage);

      setXAxisData(xData);
      setYAxisData(yData);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchGraph();
  }, []);

  return (
    <Chart
      sx={{
        '& .MuiLineElement-root': {
          stroke: '#2BCBF1',
        },
        '& .MuiChartsAxis-root': {
          stroke: '#84818A',
        },
        '& .MuiChartsAxis-bottom': {
          transform: 'translate(0, 265px) !important',
        },
        '& .MuiAreaElement-series-series': {
          fill: "url('#myGradient')",
        },
        '& .MuiChartsAxis-line': {
          stroke: 'rgba(216,218,229,0.20)',
        },
        '& .MuiChartsAxis-tick': {
          stroke: 'rgba(216,218,229,0.2)',
        },

        [`& .${chartsGridClasses.horizontalLine}`]: {
          strokeDasharray: '5 5',
          strokeWidth: 1,
          stroke: 'rgba(216,218,229,0.20)',
        },
        [`& .${chartsGridClasses.verticalLine}`]: {
          stroke: 'rgba(216,218,229,0.20)',
        },
      }}
      xAxis={[
        {
          scaleType: 'point',
          data: xAxisData,
        },
      ]}
      series={[
        {
          id: 'series',
          data: yAxisData,
          area: true,
          showMark: false,
          curve: 'linear',
        },
      ]}
      margin={{ left: 60, top: 10, right: 20 }}
      width={1075}
      height={300}
      grid={{ vertical: true, horizontal: true }}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#2BCBF1" />
          <stop offset="95%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </Chart>
  );
};
