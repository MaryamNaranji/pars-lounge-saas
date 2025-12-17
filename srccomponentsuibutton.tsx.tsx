import * as React from 'react';
import { clsx } from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'px-4 py-2 rounded-md font-semibold transition',
          variant === 'primary' &&
            'bg-brand-800 text-white hover:bg-brand-900',
          variant === 'outline' &&
            'border border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
