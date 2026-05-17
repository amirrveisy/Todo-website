import photo from '../assets/1.png'

const HeroSection = () => {
  return (
    <section className="container-fluid py-5">
      <div className="row align-items-center min-vh-75 px-5">
        <div className="col-lg-5">
          <h1 className="display-1 fw-bold mb-4">
            Clarity, finally.
          </h1>

          <p className="fs-3 text-secondary mb-4">
            A simple Website to Show my Coding Skills
          </p>




        </div>

        <div className="col-lg-7 mt-5 mt-lg-0">
          <div className="hero-image-wrapper">
            <img
              src= {photo}
              alt="Todo app preview"
              className="img-fluid rounded-4 border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection