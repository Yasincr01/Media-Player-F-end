import { Button,Modal,FloatingLabel,Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideoAPI } from '../services/allAPI'


const Add = ({setVideoUploadResponse}) => {
  const [isInvalidLink,setIsInvalidLink] = useState(false)
  const [videoDetails,setVideoDetials] =useState({
    caption:"",url:"",link:""
  })
  const [show,setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  console.log(videoDetails);

  const getEmbedLink=(YoutubeLink)=>{
    if(YoutubeLink.includes("v=")){
      const videoId = YoutubeLink.split("v=")[1].slice(0,11)
      // console.log(videoId);
      setVideoDetials({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
      setIsInvalidLink(false)
    }
    else{
      setIsInvalidLink(true)
      // console.log("Invalid Youtube Link");
      setVideoDetials({...videoDetails,link:""})
    }
  }

  const handleUploadVideo= async ()=>{
    const {caption,url,link} =videoDetails
    if(caption && url && link){
      // alert("api call")
      try{
        const response = await uploadVideoAPI(videoDetails)
        console.log(response);

        if(response.status>=200 && response.status<300){
          handleClose()
          setVideoDetials({...videoDetails,caption:"",url:"",link:""})
          setVideoUploadResponse(response.data)
          alert("Video Uploaded Successfully")
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      alert("Please fill the form")
    }

  }
  
  
  return (
    <>
    <div className='d-flex justify-content-between align-items-center'>
      <h5 className='d-flex align-items-center'>Upload New Video</h5>
      <Button className='btn btn-info rounded-circle ps-3 pe-3 fs-5 fw-bolder ms-2' onClick={handleShow}>+</Button>
    </div>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
        >
      <Modal.Header closeButton>
        <Modal.Title>Uploading Video Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="border rounded p-3">
        <FloatingLabel controlId="floatingPassword" label="Video Caption" className='mb-3'>
          <Form.Control onChange={e=>setVideoDetials({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Image URL" className='mb-3'>
          <Form.Control onChange={e=>setVideoDetials({...videoDetails,url:e.target.value})} type="text" placeholder="Image URL" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Youtube Link" className='mb-3'>
          <Form.Control onChange={e=>getEmbedLink(e.target.value)} type="text" placeholder="Youtube Link" />
        </FloatingLabel>
        {
          isInvalidLink && <div className="mt-3 text-danger fw-bolder">*Invalid YouTube URL</div>

        }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUploadVideo} className='btn btn-success'>Upload</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Add