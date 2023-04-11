export const salaryRangesOptions = [
  { value: '<50K', display: '$0 - $50K', bounds: { min: 0, max: 50000 } },
  {
    value: '50K-100K',
    display: '$50K - $100K',
    bounds: { min: 50001, max: 100000 },
  },
  {
    value: '100K-150K',
    display: '$100K - $150K',
    bounds: { min: 100001, max: 150000 },
  }, {
    value: '150K-200K',
    display: '$150K - $200K',
    bounds: { min: 150001, max: 200000 },
  },
  {
    value: '> 200K',
    display: '> $200K',
    bounds: { min: 200001, max: 1000000 },
  },
];
