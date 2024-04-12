import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { LineChart as Chart } from '@mui/x-charts/LineChart';

export const LineChart = () => {
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
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug'],
        },
      ]}
      series={[
        {
          id: 'series',
          data: [2, 5.5, 5, 8.6, 1.5, 5, 3, 1],
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
