import Image from 'next/image'
import type { PostProps } from './__types'

export default function Post ({url, title, description, urlToImage}: PostProps) {
  return (
    <div className="col-12 col-md-6 mb-5 pb-5">
      <a href={url} className='d-inline-block'>
        <Image
          width={180}
          height={100}
          style={postImg}
          alt={`[Image]: ${title}`}
          src={urlToImage || '/images/amaze.png'}
          className="d-block shadow-sm bg-light mb-3"
        />
      </a>
      <h5 className="bold text-dark">{title}</h5>
      <h5 className="text-muted text-justify mb-4">{description}</h5>
      <a href={url} target="blank" className="h5 text-white bg-chocolate text-capitalize p-2 rounded-lg">read more</a>
    </div>
  )
}

const postImg: {} = {
  borderRadius: '10px',
  objectFit: 'contain',
  backdropFilter: 'grayscale(2px)'
}