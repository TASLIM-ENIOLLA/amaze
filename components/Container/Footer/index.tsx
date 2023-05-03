import Image from 'next/image'

export default function Footer () {
  return (
    <footer className='bg-light border-top py-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Image
              width={200}
              height={200}
              style={footerImage}
              src="/images/amaze.png"
              alt="Amaze ministries logo"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerImage: {} = {
  objectFit: 'contain'
}

const socialIcons = {
  fontSize: '18px'
}