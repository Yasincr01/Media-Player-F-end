import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI, uploadVideoAPI } from '../services/allAPI'
import Category from './Category'


const View = ({ videoUploadResponse, removeVideoResponseFromCategory,setRemoveVideoResponseFromView }) => {
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    getAllVideos()
  }, [videoUploadResponse, deleteVideoResponse, removeVideoResponseFromCategory])

  const getAllVideos = async () => {
    try {
      const response = await getAllVideoAPI()
      console.log(response);
      setAllVideos(response.data)
    }
    catch (err) {

    }
  }
  // console.log(allVideos);

  const dragOverview = (e) =>{
    e.preventDefault()
  }

  const CategoryVideoDrop = async (e) =>{
    const {categoryId,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(`video id:${video.id} from category id:${categoryId} dropped in view component`);
    // remove from category
    // get category details from where we have to remove
    const {data} = await getSingleCategoryAPI(categoryId)
    // update category after removing video
    const updatedAllVideos = data?.allVideos?.filter(item=>item.id!=video?.id)
    const updateCategoryDetails = {id:categoryId,categoryName:data.categoryName,allVideos:updatedAllVideos}
    const response = await updateCategoryAPI(categoryId,updateCategoryDetails)
    // pass response to category
    setRemoveVideoResponseFromView(response)
    // video must be inserted to allVideos - call uploadvideo API
    await uploadVideoAPI(video)
    getAllVideos()
  }



  return (
    <div>
      <Row droppable="true" onDragOver={dragOverview} onDrop={e=>CategoryVideoDrop(e)}>
        {
          allVideos.length ?
            allVideos?.map(video => (
              <Col key={video?.id} sm={12} md={6} lg={4}>
                <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video} />
              </Col>
            ))
            :
            <div className="text-danger fw-bolder">No Videos are uploaded yet!!!</div>
        }
      </Row>
    </div>
  )
}

export default View