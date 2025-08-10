interface Props {
  photo: string
  title: string
}

export function ArticleCard({ photo, title }: Props) {
  return (
    <div className='flex w-53 min-w-53 shrink-0 basis-auto flex-col gap-4 lg:w-55.75 lg:min-w-55.75'>
      <div className='group relative aspect-[212/154] cursor-pointer overflow-hidden rounded-[8px] lg:aspect-[223/172]'>
        <img
          className='absolute inset-0 size-full object-cover'
          src={photo}
          alt='Articlef Photo'
          loading='lazy'
        />
        <div className='absolute inset-0 flex size-full items-center justify-center bg-black/60 p-1 opacity-0 transition-opacity group-hover:opacity-100'>
          <button className='cursor-pointer border-2 border-white px-10 py-2.25 text-center text-[15px] leading-[140%] font-semibold text-white transition-colors duration-250 hover:bg-white hover:text-black'>
            Read More
          </button>
        </div>
      </div>
      <span className='cursor-pointer text-[13px] leading-[140%] font-semibold text-white md:text-[15px]'>
        {title}
      </span>
    </div>
  )
}
