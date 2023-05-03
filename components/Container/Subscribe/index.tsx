export default function Subscribe () {
  return (
    <div className="container py-5">
      <div className="row pb-5 justify-content-center">
        <div className="col-lg-7">
          <div className="shadow py-5 px-2" style={subscribePlatter}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h4 className="bold text-capitalize text-dark mb-3">subscribe to our newsletter</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3 mb-md-0 col-md">
                  <input type="text" className="d-block w-100 p-3 border rounded-lg" placeholder="Enter your email..." />
                </div>
                <div className="col-12 col-md-auto">
                  <input type="submit" value="subscribe" className="bold border-0 rounded-lg px-5 py-3 bg-chocolate text-white text-capitalize" />
                </div>
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