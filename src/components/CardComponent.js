import '../styles/components/CardComponent.css';

export const Card = () => {
  return (
    <div className="container">
      <div className="content-container">
        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="stats-container">
          <p>
            <span>10k+</span>
            COMPANIES
          </p>
          <p>
            <span>314</span>
            TEMPLATES
          </p>
          <p>
            <span>12M+</span>
            QUERIES
          </p>
        </div>
      </div>

      <div
        className="bg-img"
        style={{
          background: 'url(./images/image-header-desktop.jpg) no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="overlay">
          <div className="overlay-2"></div>
        </div>
      </div>
    </div >
  )
}