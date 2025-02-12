import React from 'react';

export const AppText = (): void | React.JSX.Element => {
  const a: number = 1;
  const b: number = 2;
  const add = (a: number, b: number) => {
    return a + b;
  };

  console.log(add(a, b));
  if (a === b) return <div>AppText</div>;
};
