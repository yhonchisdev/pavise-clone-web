interface Photo {
  default: string
  preview: string
}

interface Props {
  photo: Photo
  title: string
}

export function ProductCard({ photo, title }: Props) {
  return (
    <div className='w-full max-w-80.75'>
      <div className='group flex flex-col gap-2 lg:gap-3.5'>
        <div className='relative aspect-square cursor-pointer'>
          <div className='relative size-full overflow-hidden rounded-[8px] border-2 border-gray-400 md:rounded-[15px]'>
            <img
              className='absolute inset-0 size-full object-cover'
              src={photo.default}
              alt='Product Photo'
              loading='lazy'
            />
            <img
              className='absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
              src={photo.preview}
              alt='Product Photo'
              loading='lazy'
            />
          </div>
          <div className='absolute bottom-0 hidden w-full p-4 opacity-0 transition-opacity group-hover:opacity-100 lg:block lg:p-2.5'>
            <button className='w-full cursor-pointer border-2 border-white bg-black px-10 py-2.25 text-center text-[15px] leading-[140%] font-semibold text-white transition-colors duration-250 hover:border-black hover:bg-white hover:text-black'>
              ADD TO CART
            </button>
          </div>
        </div>
        <span className='cursor-pointer text-[10px] leading-[140%] font-semibold text-white md:text-[18px]'>
          {title}
        </span>
      </div>
    </div>
  )
}
