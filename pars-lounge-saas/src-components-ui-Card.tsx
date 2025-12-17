import { clsx } from 'clsx';
import { forwardRef } from 'react';

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx('rounded-lg border border-brand-200 bg-white p-6 shadow-sm', className)}
      {...rest}
    />
  )
);
Card.displayName = 'Card';