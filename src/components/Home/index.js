// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = props => {
  const {homeDetails} = props
  console.log(homeDetails)

  return (
    <div>
      <Header />
      <div className="home-bg-container">
        <div>
          <h1 className="home-h1">Clothes That Get YOU Noticed</h1>
          <div className="img-display">
            <img
              className="home-img1"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
          <p className="home-p1">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time.Clothes have always been a marker of era and we
            are in a revolution. Your fashion makes you have been seen and heard
            that way you are.So clearly, celebrate the seasons new and exciting
            fashion in your way.
          </p>
          <div className="btn-con">
            <button className="home-btn" type="button">
              Shop Now
            </button>
          </div>
        </div>
        <div className="home-display1">
          <img
            className="home-img1"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
