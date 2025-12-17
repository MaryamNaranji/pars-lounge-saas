import { clsx } from 'clsx';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'w-full rounded-md border border-brand-300 bg-white px-3 py-2 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-600',
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = 'Input';