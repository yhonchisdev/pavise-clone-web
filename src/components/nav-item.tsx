import Icons from '@/icons'
import { cn } from '@/lib/utils'

interface Props {
  label: string
  active?: boolean
  disabled?: boolean
}

export function NavItem({ label, active = false, disabled = false }: Props) {
  return (
    <span
      className={cn(
        'flex cursor-pointer gap-1.5 text-[13px] leading-[130%] font-semibold text-white transition-colors lg:text-[15px] lg:leading-[140%]',
        {
          'text-gray-500': disabled,
        },
      )}
    >
      {label}
      <Icons.ArrowDown
        className={cn('h-auto w-2.25 text-white transition-transform', {
          'rotate-180': active,
        })}
      />
    </span>
  )
}
