import Image from 'next/image'
import { useMemo } from 'react'

export default function Banner ({type}) {
	const message = useMemo((): any => {
		switch (type) {
			case 'undefined': return 'Loading...'
			case 'empty': return 'Empty posts returned!'
			case 'null': return 'Oops, an error occured!'
		}
	}, [type])

	return (
		<div className="container py-5">
      <div className="row pb-5 justify-content-center">
        <div className="col-lg-7">
          <div className=" bg-light py-5 px-2" style={subscribePlatter}>
            <div className="container-fluid">
              <div className="row text-center">
                <div className="col-12 mb-4">
                  <Image
                    width={100}
                    height={100}
                    alt={message}
                    src="/images/amaze-ministries.png"
                  />
                </div>
                <div className="col-12 mb-4">
                  <h5 className="bold text-muted mb-0">{message}</h5>
                </div>
                {(['undefined', 'null'].includes(type) && (
                	<div className="col-12">
	                  <a href="" className="h5 text-white bg-chocolate text-capitalize p-2 rounded-lg">reload</a>
	                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

const subscribePlatter = {
  borderRadius: '15px'
}