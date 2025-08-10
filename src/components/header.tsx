import { useState } from 'react'
import Icons from '@/icons'
import { NavItem } from './nav-item'
import { cn } from '@/lib/utils'
import { MenuItem } from './menu-item'
import { ButtonItem } from './button-item'
import { ProductCard } from './product-card'
import { ArticleCard } from './article-card'

export function Header() {
  const [menuType, setMenuType] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const handleActive = (type: string) => {
    setMenuType(type)
  }

  return (
    <div className='relative bg-black'>
      <div className='sticky mx-auto grid w-full max-w-400 grid-cols-3 items-center p-3.75 md:px-5 lg:px-7.5 lg:py-5 2xl:px-10'>
        <div>
          <button className='block cursor-pointer lg:hidden'>
            <Icons.Menu className='h-3 w-4.5 text-gray-200' />
          </button>
          <div className='invisible absolute opacity-0 lg:visible lg:static lg:opacity-100'>
            <div className='flex items-center gap-7 lg:gap-1.5 xl:gap-7'>
              <div
                onMouseOver={() => handleActive('SHOP')}
                onMouseLeave={() => handleActive('')}
              >
                <NavItem
                  label='SHOP'
                  active={menuType === 'SHOP'}
                  disabled={menuType !== 'SHOP' && !!menuType}
                />
                <div
                  className={cn(
                    'absolute top-full left-0 max-h-0 w-full overflow-hidden bg-black px-10 transition-all duration-700',
                    {
                      'max-h-124': menuType === 'SHOP',
                    },
                  )}
                >
                  <div className='flex justify-between gap-13 pt-13.5 pb-20'>
                    <div className='flex w-full max-w-72.5 flex-col gap-5.5 lg:gap-6'>
                      <div className='mb-auto flex flex-col items-start gap-5 lg:gap-3'>
                        <MenuItem>Skincare</MenuItem>
                        <MenuItem>Bundles</MenuItem>
                        <MenuItem>Refills</MenuItem>
                        <MenuItem>UV Camera</MenuItem>
                      </div>
                      <ButtonItem>SHOP ALL</ButtonItem>
                    </div>
                    <div className='flex w-full gap-5.75 lg:items-start lg:justify-end'>
                      <ProductCard
                        photo={{
                          default: '/products/product-1-first.webp',
                          preview: '/products/product-1-second.webp',
                        }}
                        title='DYNAMIC AGE DEFENSE'
                      />
                      <ProductCard
                        photo={{
                          default: '/products/product-2-first.webp',
                          preview: '/products/product-2-second.webp',
                        }}
                        title='PRECISION EYE LIFT'
                      />
                      <ProductCard
                        photo={{
                          default: '/products/product-3-first.webp',
                          preview: '/products/product-3-second.webp',
                        }}
                        title='DYNAMIC AGE DEFENSE'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseOver={() => handleActive('SCIENCE')}
                onMouseLeave={() => handleActive('')}
              >
                <NavItem
                  label='SCIENCE'
                  active={menuType === 'SCIENCE'}
                  disabled={menuType !== 'SCIENCE' && !!menuType}
                />
                <div
                  className={cn(
                    'absolute top-full left-0 max-h-0 w-full overflow-hidden bg-black px-10 transition-all duration-700',
                    {
                      'max-h-25.25': menuType === 'SCIENCE',
                    },
                  )}
                >
                  <div className='flex snap-x snap-mandatory items-center justify-center gap-16.75 pt-9.75 pb-9.25'>
                    <MenuItem querySize>Our biotechnology</MenuItem>
                    <MenuItem querySize>Safety</MenuItem>
                    <MenuItem querySize>Scientific team</MenuItem>
                  </div>
                </div>
              </div>
              <div
                onMouseOver={() => handleActive('IN THE LAB')}
                onMouseLeave={() => handleActive('')}
              >
                <NavItem
                  label='IN THE LAB'
                  active={menuType === 'IN THE LAB'}
                  disabled={menuType !== 'IN THE LAB' && !!menuType}
                />
                <div
                  className={cn(
                    'absolute top-full left-0 max-h-0 w-full overflow-hidden bg-black px-10 transition-all duration-700',
                    {
                      'max-h-109': menuType === 'IN THE LAB',
                    },
                  )}
                >
                  <div className='flex snap-x snap-mandatory flex-row items-center justify-center pt-13.75 pb-12'>
                    <div className='flex flex-col lg:flex-row lg:justify-center'>
                      <div className='flex flex-col-reverse gap-5.75 lg:flex-col lg:border-r lg:border-gray-400 lg:pr-8'>
                        <div>
                          <p className='text-[15px] leading-[140%] font-semibold text-white lg:text-base xl:text-[18px]'>
                            Browse by Category
                          </p>
                          <div className='mt-5.5 mb-11.25 flex flex-col items-start justify-center gap-5.5 lg:mt-3.75 lg:gap-2.5'>
                            <MenuItem active>ROS & Skin Aging</MenuItem>
                            <MenuItem active>Science & Technology</MenuItem>
                            <MenuItem active>
                              Industry Guidelines & Regulations
                            </MenuItem>
                          </div>
                        </div>
                        <div className='mt-auto'>
                          <ButtonItem>Read all articles</ButtonItem>
                        </div>
                      </div>
                      <div className='lg:grow lg:pl-16'>
                        <p className='text-[15px] leading-[140%] font-semibold text-white lg:text-base xl:text-[18px]'>
                          Highlights
                        </p>
                        <div className='mt-4.25 flex gap-2.5 pb-6 lg:mt-6 lg:gap-4.5 lg:pb-0'>
                          <ArticleCard
                            photo='/articles/article-1.webp'
                            title='UNDERSTANDING ROSACEA: CAUSES, SYMPTOMS, AND BREAKTHROUGH TREATMENTS'
                          />
                          <ArticleCard
                            photo='/articles/article-2.webp'
                            title='HORMONAL SHIFTS AND SKIN AGING: UNDERSTANDING MENOPAUSES IMPACT ON THE SKIN'
                          />
                          <ArticleCard
                            photo='/articles/article-3.webp'
                            title='THE MOLECULAR INTERSECTION OF DIABETES AND SKIN RESILIENCE'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto'>
          <img
            className='h-auto w-full max-w-16.75 lg:max-w-23.25'
            src='/pavise.webp'
            alt='Pavise'
            loading='lazy'
          />
        </div>
        <div className='flex items-baseline justify-end'>
          <a href='/' className='hidden lg:block'>
            <MenuItem>PARTNER LOCATOR</MenuItem>
          </a>
          <button
            className='hidden md:ml-1.5 lg:ml-5 lg:block'
            onClick={() => setShowSearch(!showSearch)}
          >
            <MenuItem>SEARCH</MenuItem>
          </button>
          <a href='/' className='hidden md:ml-1.5 lg:ml-5 lg:block'>
            <MenuItem>ACCOUNT</MenuItem>
          </a>
          <button className='md:ml-1.5 lg:ml-4'>
            <MenuItem>CART(0)</MenuItem>
          </button>
        </div>
      </div>
      <div
        className={cn(
          'invisible absolute top-0 right-0 left-0 z-50 h-screen bg-black pt-4.5 pb-8.75 opacity-0 transition-all duration-300 lg:top-full lg:h-auto',
          {
            'visible opacity-100': showSearch,
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
            <button
              onClick={() => setShowSearch(false)}
              className='cursor-pointer'
            >
              <Icons.Close className='size-3.5 text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
