import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

interface Props {
  onClick?: () => void
  querySize?: boolean
  active?: boolean
}

export function MenuItem({
  onClick,
  children,
  querySize,
  active,
}: PropsWithChildren<Props>) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'cursor-pointer bg-(image:--gradient-link-item) bg-size-(--size-link-item) bg-position-(--position-link-item) bg-no-repeat pb-1.25 text-[15px] leading-[1.4] font-semibold transition-(--transition-link-item) hover:bg-size-(--size-link-item-active)',
        {
          'lg:text-base xl:text-[18px]': querySize,
          'bg-size-(--size-link-item-active) hover:bg-size-(--size-link-item)':
            active,
        },
      )}
    >
      {children}
    </span>
  )
}
