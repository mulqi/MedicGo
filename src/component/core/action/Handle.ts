import { useState } from 'react';

interface HandleProps {
  initialOrder: number;
}

export const Handle = ({ initialOrder }: HandleProps) => {
  const [order] = useState<number>(initialOrder);

  return {
    order,
  };
};
