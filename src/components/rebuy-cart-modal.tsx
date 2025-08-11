import Icons from '@/icons'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'

interface Props {
  show: boolean
  onClose: () => void
}

export function RebuyCartModal({ show, onClose }: Props) {
  return createPortal(
    <>
      <div
        className={cn(
          'fixed top-0 -right-full z-50 flex h-screen w-125 max-w-full flex-col bg-black transition-(--transition-rebuy-cart) md:w-136.5',
          {
            'right-0': show,
          },
        )}
      >
        <div className='px-3.75 pt-2.5 pb-1.75 lg:px-7.5 lg:pb-4.5'>
          <div className='flex items-center justify-between'>
            <div className='flex-1 pt-2.75 pb-0.75 lg:pt-6.5 lg:pb-1.5'>
              <h2 className='text-[25px] leading-[110%] lg:text-[26px] lg:leading-[120%]'>
                You Cart
              </h2>
            </div>
            <button onClick={onClose} className='cursor-pointer'>
              <Icons.Close className='size-4' />
            </button>
          </div>
          <div className='mt-2 h-1.5 w-full overflow-hidden rounded-[30px] bg-gray-600 lg:h-2.25 xl:h-3'>
            <div className='h-full w-[10%] bg-(image:--gradient-progress) transition-all duration-250' />
          </div>
          <div className='mt-1.5 text-[13px] leading-[130%] lg:mt-2.25 lg:text-[15px] lg:leading-[140%]'>
            You are S/. 3.58 away from a free UV Indicator Card!
          </div>
        </div>
        <div className='h-full overflow-y-auto px-3.75 lg:px-7.5'>
          <div className='mb-5 flex items-start gap-4 rounded-[8px] border-2 border-blue-600 px-3.75 py-5 md:mb-4.5 md:rounded-[12px] lg:rounded-[20px] lg:px-5.5 xl:rounded-[15px]'>
            <div className='size-5 shrink-0 rounded-full bg-blue-600' />
            <p className='text-[13px] leading-[130%] lg:text-[15px] lg:leading-[140%]'>
              For a limited time, you’ll receive a complimentary UV Indicator
              Card in every order.
            </p>
          </div>
          <div className='px-4 pb-10'>
            <h3 className='text-[18px] leading-[110%] md:text-[20px] md:leading-[120%] lg:text-[22px] lg:leading-[120%] xl:text-[26px] xl:leading-[120%]'>
              Your cart is empty
            </h3>
          </div>
        </div>
        <div className='flex flex-col gap-1.5 border-t border-t-white px-3.75 py-5 md:pb-4 lg:px-7.5 lg:pb-6.75 xl:pb-5.5'>
          <div className='flex items-center justify-between'>
            <span className='text-[18px] leading-[140%] md:text-[20px] md:leading-[120%] lg:text-[22px] lg:leading-[120%] xl:text-[26px] xl:leading-[120%]'>
              Subtotal
            </span>
            <span className='text-[18px] leading-[140%] md:text-[20px] md:leading-[120%] lg:text-[22px] lg:leading-[120%] xl:text-[26px] xl:leading-[120%]'>
              S/. 0.00
            </span>
          </div>
          <span className='text-[13px] leading-[130%] text-gray-500 lg:text-[15px] lg:leading-[140%]'>
            Taxes & shiping calculated at checkout
          </span>
          <div className='mt-1.5 flex flex-col gap-2'>
            <button className='cursor-pointer rounded-[4px] border-2 border-white bg-white px-3.75 py-2.5 text-center text-[13px] font-semibold text-black transition-colors hover:bg-black hover:text-white'>
              Check out
            </button>
            <button className='cursor-pointer rounded-[4px] border-2 border-indigo-500 bg-indigo-500 px-3.75 py-2.5 text-white transition-colors hover:bg-indigo-600'>
              <Icons.ShopPay className='mx-auto h-5 w-21.25' />
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'invisible fixed inset-0 z-40 size-full bg-black/70 opacity-0 transition-opacity duration-250',
          {
            'visible opacity-100': show,
          },
        )}
      />
    </>,
    document.body,
  )
}
