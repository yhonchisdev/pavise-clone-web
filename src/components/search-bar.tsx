import Icons from '@/icons'
import { cn } from '@/lib/utils'

interface Props {
  show: boolean
  onClose: () => void
}

export function SearchBar({ show, onClose }: Props) {
  return (
    <div
      className={cn(
        'invisible absolute top-0 right-0 left-0 z-50 h-screen bg-black pt-4.5 pb-8.75 opacity-0 transition-all duration-300 lg:top-full lg:h-auto',
        {
          'visible opacity-100': show,
        },
      )}
    >
      <div className='mx-auto px-3.75 md:px-5 lg:px-7.5'>
        <div className='flex w-full items-center gap-5 lg:mx-auto lg:max-w-102.75 lg:gap-4'>
          <div className='relative flex-1'>
            <div className='absolute top-3 left-4.5 lg:top-2 lg:left-3'>
              <Icons.Search className='h-5 w-4 text-white' />
            </div>
            <input
              className='size-full h-11.25 rounded-[27px] border-2 border-white py-[1.87px] pr-2.5 pl-9.5 text-xs leading-[140%] outline-0 lg:h-9 lg:text-[15px]'
              type='text'
              placeholder='Search'
            />
          </div>
          <button className='cursor-pointer' onClick={onClose}>
            <Icons.Close className='size-3.5 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
