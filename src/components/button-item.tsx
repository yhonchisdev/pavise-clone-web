import type { PropsWithChildren } from 'react'

interface Props {
  onClick?: () => void
}

export function ButtonItem({ onClick, children }: PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className='w-fit cursor-pointer border-2 border-white px-10 py-2.25 text-center text-[15px] leading-[140%] font-semibold text-white transition-colors duration-250 hover:bg-white hover:text-black'
    >
      {children}
    </button>
  )
}
