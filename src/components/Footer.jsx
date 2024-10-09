import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between">
          <div style={{width:'400px'}} className='intro'>
            <h5 style={{fontWeight:'600',fontFamily:'"Oswald", system-ui'}}>
            <i className='fa-solid fa-music me-2'></i> Media Player</h5>
            <p>Designed and Built with all Love in the World by
               the Luminar Team with the Help of our
                Contributors.</p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>
          <div className="d-flex flex-column">
            <h5 className='fw-bolder'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Home Page</Link>
            <Link to={'/history'} style={{textDecoration:'none',color:'white'}} >Watch History Page</Link>
          </div>
          <div className="d-flex flex-column">
            <h5 className='fw-bolder'>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
            <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
            <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
          </div>
          <div className="d-flex flex-column">
          <h5 className='fw-bolder'> Contact Us </h5>
          <div className='d-flex mt-2'>
            <input placeholder='Enter Your Email Here...' type='text' className='form-control' />
            <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right '></i></button>      
          </div>
            <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-solid fa-phone'></i></a>

            </div>
          </div>
      </div>
      <p className='text-center mt-3'>CopyRight &copy; June 2024 Batch, Media Player.Built with React</p>
    </div>
  )
}

export default Footer