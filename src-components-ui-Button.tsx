import { clsx } from 'clsx';
import { forwardRef } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'primary', ...rest }, ref) => (
    <button
      ref={ref}
      className={clsx(
        'px-4 py-2 rounded-md font-semibold transition',
        variant === 'primary' && 'bg-brand-800 text-white hover:bg-brand-900',
        variant === 'outline' && 'border border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white',
        className
      )}
      {...rest}
    />
  )
);
Button.displayName = 'Button';