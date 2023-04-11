import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarChartCard = (inputData) => {
  const data = inputData;
  // console.log('Input data from BarChart', { data });

  let newData;

  if (data.inputData !== undefined) {
    newData = [
      ...data.inputData.map(
        ({
          publisher_name: publisherName,
          min_salary: minSalary,
          max_salary: maxSalary,
          median_salary: medianSalary,
        }) => ({ publisherName, minSalary, maxSalary, medianSalary }),
      ),
    ];
  }

  // console.log('NewData', newData);
  return (
    <div>
      {data ? (
        <ResponsiveContainer width="95%" height={400}>
          <BarChart
            barGap={200}
            barCategoryGap={40}
            data={newData || undefined}
            margin={{ top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="publisherName" />
            <YAxis />
            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
            <Legend verticalAlign="top" height={40} />
            <Bar
              dataKey="minSalary"
              fill="#FDDD8C"
              radius={[20, 20, 0, 0]}
              maxBarSize={10}
            />
            <Bar
              dataKey="maxSalary"
              fill="#0BAB7C"
              radius={[20, 20, 0, 0]}
              maxBarSize={10}
            />
            <Bar
              dataKey="medianSalary"
              fill="#FFBBD7"
              radius={[20, 20, 0, 0]}
              maxBarSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : ('')}
    </div>
  );
};

export default BarChartCard;
