// CompletedPendingPie.tsx
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Card from '@mui/material/Card';
import { CompletedPendingProps } from './types';
import { Grid } from '@mui/material';

const CompletedPending = ({ data }: CompletedPendingProps) => {
  return (
    <>
      <Card variant="elevation" >
        <Grid container alignItems='center' sx={{ height: '33vh'}}>
          <PieChart
            series={[
              {
                data: data,
                innerRadius: 25,
                outerRadius: 60,
                paddingAngle: 1,
                startAngle: 0,
                endAngle: 360,
                cornerRadius: 3,
              },
            ]}
            sx={{ width: '100%' }} 
            height={140}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 13,
                },
                itemMarkWidth:10,
                itemMarkHeight:10,
                markGap: 15,
                itemGap: 15
              },
            }}

          />
        </Grid>
      </Card>
    </>
  );
};

export default CompletedPending;
