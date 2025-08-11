import { useState } from 'react'
import Icons from '@/icons'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'
import { SearchBar } from './search-bar'
import { MenuItem } from './menu-item'
import { ButtonItem } from './button-item'
import { ProductCard } from './product-card'

interface Props {
  show: boolean
  onClose: () => void
}

export function MenuModal({ show, onClose }: Props) {
  const [showSearch, setShowSearch] = useState(false)

  const handleShowSearch = () => {
    setShowSearch(true)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
  }

  return createPortal(
    <>
      <div
        className={cn(
          'no-scrollbar fixed top-0 -left-full z-50 flex h-screen w-full flex-col overflow-y-auto bg-black transition-(--transition-rebuy-cart)',
          {
            'left-0': show,
          },
        )}
      >
        <div className='grid grid-cols-3 items-center p-3.75'>
          <div className='flex items-end gap-1.25'>
            <Icons.User className='h-auto w-3.25' />
            <span className='cursor-pointer text-[13px] leading-[130%] underline underline-offset-2'>
              Sign In
            </span>
          </div>
          <div className='mx-auto'>
            <img
              className='h-auto w-full max-w-16.75 lg:max-w-23.25'
              src='/pavise.webp'
              alt='Pavise'
              loading='lazy'
            />
          </div>
          <button className='ml-auto cursor-pointer' onClick={onClose}>
            <Icons.Close className='size-3.5' />
          </button>
        </div>
        <div className='mt-1.75 mb-3.25 px-3.75 md:px-5'>
          <button
            className='relative w-full cursor-pointer'
            onClick={handleShowSearch}
          >
            <div className='absolute top-3.5 left-4.5'>
              <Icons.Search className='h-5 w-4' />
            </div>
            <div className='flex h-11.25 w-full items-center rounded-[56px] border-[1.5px] border-white pr-5 pl-11 text-[13px] leading-[130%] font-semibold'>
              Search
            </div>
          </button>
        </div>
        <div className='px-3.75 pt-1.75 pb-6'>
          <div className='flex flex-col items-start gap-5'>
            <MenuItem>Skincare</MenuItem>
            <MenuItem>Bundles</MenuItem>
            <MenuItem>Refills</MenuItem>
            <MenuItem>UV Camera</MenuItem>
          </div>
          <div className='no-scrollbar my-5.5 flex snap-x snap-mandatory items-center gap-2.5 overflow-x-auto'>
            <ProductCard
              photo={{
                default: '/products/product-1-first.webp',
                preview: '/products/product-1-second.webp',
              }}
              title='DYNAMIC AGE DEFENSE'
              slideCard
            />
            <ProductCard
              photo={{
                default: '/products/product-2-first.webp',
                preview: '/products/product-2-second.webp',
              }}
              title='PRECISION EYE LIFT'
              slideCard
            />
            <ProductCard
              photo={{
                default: '/products/product-3-first.webp',
                preview: '/products/product-3-second.webp',
              }}
              title='DYNAMIC AGE DEFENSE'
              slideCard
            />
          </div>
          <ButtonItem fullWidth>SHOP ALL</ButtonItem>
        </div>
        <div className='divide-y divide-white border-y border-y-white'>
          <button className='flex w-full cursor-pointer items-center justify-between gap-2 px-3.75 pt-4.25 pb-3.5'>
            <span className='text-[18px] leading-[110%] md:text-[20px] md:leading-[120%]'>
              SCIENCE
            </span>
            <Icons.ArrowRight className='size-3.5' />
          </button>
          <button className='flex w-full cursor-pointer items-center justify-between gap-2 px-3.75 pt-4.25 pb-3.5'>
            <span className='text-[18px] leading-[110%] md:text-[20px] md:leading-[120%]'>
              IN THE LAB
            </span>
            <Icons.ArrowRight className='size-3.5' />
          </button>
        </div>
        <div className='flex flex-col items-start gap-2 px-4 pt-3.75 sm:pt-13.5'>
          <div className='flex cursor-pointer items-center gap-1.75'>
            <Icons.Location className='h-auto w-3.5' />
            <span className='text-xs leading-[130%] underline'>
              Partner Locator
            </span>
          </div>
          <div className='flex cursor-pointer items-center gap-1.75'>
            <Icons.Faq className='h-auto w-3.5' />
            <span className='text-xs leading-[130%] underline'>FAQ</span>
          </div>
        </div>
        <div className='mt-7.5 flex items-center justify-start gap-10.5 px-3.5 pb-5'>
          <Icons.Instagram className='size-5' />
          <Icons.Facebook className='size-5' />
        </div>
      </div>
      <SearchBar show={showSearch} onClose={handleCloseSearch} />
    </>,
    document.body,
  )
}
