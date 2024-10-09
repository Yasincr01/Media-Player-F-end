import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { getAllVideoAPI, removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({displayData,setDeleteVideoResponse,insideCategory}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = async () => {
    setShow(true);
  //  call save history api
  // videoDetails to be stored history
    const {caption,link} = displayData
    const today  = new Date()
    const timeStamp = today.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails = {caption,link,timeStamp}
    await saveHistoryAPI(videoDetails)
  }
  
const deleteVideo = async (id)=>{
  const result = await removeVideoAPI(id)
  setDeleteVideoResponse(result)
}

const videoDragStart = (e,videoId)=>{
  // console.log(`video with Id ${videoId} has Started dragging....`);
  e.dataTransfer.setData("id",videoId)
}

  return (
    <>
    <Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} style={{ height:'250px',marginTop:'20px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.url} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p className='mt-2'>{displayData?.caption}</p>
          { !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)}  className='btn'><i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
                  <iframe width="100%" height="400" src={`${displayData?.link}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard