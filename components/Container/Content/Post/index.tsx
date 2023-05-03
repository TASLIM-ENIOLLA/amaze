import Image from 'next/image'

type PostProps = {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  publishedAt: {id: string, name: string},
  title: string,
  url: string,
  urlToImage: string
}

export default function Post ({url, title, description, urlToImage}: PostProps) {
  return (
    <div className="col-12 col-md-6 mb-5 pb-5">
      <a href={url}>
        <Image
          width={180}
          height={100}
          style={postImg}
          src={urlToImage}
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