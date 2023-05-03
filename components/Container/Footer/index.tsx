export default function Footer () {
  return (
    <footer className='bg-light border-top py-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src="/images/amaze.png" width='200' style={footerImage} />
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