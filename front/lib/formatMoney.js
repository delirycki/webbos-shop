import React from 'react';

function formatMoney(amount) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  };
  const formatter = Intl.NumberFormat('en-us', options);

  return formatter.format(amount / 100);
}

export default formatMoney;
