import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mr-2 mb-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-meetie-gray-20 text-meetie-gray-75 ',
        secondary: 'border-transparent bg-[#FFE5F0] text-[#D43477] ',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
