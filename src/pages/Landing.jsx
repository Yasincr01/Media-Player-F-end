import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music_player.gif'
import { Card } from 'react-bootstrap'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'



const Landing = () => {
  return (
    <div style={{ paddingTop: '80px' }} className='container'>
      {/* Landing head*/}
      <div className="row align-items-center mt-5">
        <div className='col-lg-5'>
          <h1>Welcome To<span className='text-warning'> Media Player</span></h1>
          <p style={{ textAlign: 'justify' }} className='mt-3'>
            Media Player will allow user to add or remove their
            uploaded videos from youtube and also allow them to
            arrange it in different categories by drag and drop.
            User can also have the Provision To manage their watch
            history as well.What are you waiting for,let starts exploring our site!!!
          </p>
          <Link to={'/home'} className='btn btn-info' >Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5 mt-5' src={LandingImg} alt="" />

        </div>
      </div>
      {/* features */}
      <div className='my-5'>
        <h2 className='text-center'>Features</h2>
        <div className='row mt-5  ms-5 ps-4'>
          <div className='col-lg-4'>
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Play Everything </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem adipisci placeat officia illum nesciunt soluta porro alias fuga expedita officiis saepe cum, eius sapiente quaerat tempore dignissimos mollitia?
          </p>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Categorise Videos </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem adipisci placeat officia illum nesciunt soluta porro alias fuga expedita officiis saepe cum, eius sapiente quaerat tempore dignissimos mollitia?
          </p>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Managing History </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui praesentium dolorem adipisci placeat officia illum nesciunt soluta porro alias fuga expedita officiis saepe cum, eius sapiente quaerat tempore dignissimos mollitia?
          </p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <iframe width="600" height="400" src="https://www.youtube.com/embed/hOHKltAiKXQ" title="Hanumankind – Big Dawgs | Ft. Kalmi (Official Music Video) | Def Jam India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>

    </div>
  )
}

export default Landing