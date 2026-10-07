import * as React from 'react';

import { cn } from '@/lib/utils';

function Avatar({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative flex size-10 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground',
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<'img'>) {
  return (
    <img
      className={cn('aspect-square size-full object-cover', className)}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
};