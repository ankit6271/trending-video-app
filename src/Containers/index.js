import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/action";
import HoverVideoPlayer from 'react-hover-video-player';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import VideoModal from "./VideoModal"
function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const [selectedVideo, setSelectedVideo] = useState("");
  const [boxState, setBoxState] = useState(false);

  const BoxHandler = (value) => {
    setBoxState(true)
    setSelectedVideo(value);
    console.log(selectedVideo);
  }
  const closeModal = () =>{
    setBoxState(false);
    setSelectedVideo(null);
  }
  const dataReceived = useSelector(state => state.data);
  console.log(dataReceived);
  return (
    <div className="container-fluid p-4">
      <div className="row ">
        {dataReceived?.map((value) => (
          <div className="col-md-3 col-sm-6 " onClick={() =>BoxHandler(value.assets.thumb_webm.url)}>
            <div style={{ border: "1px solid grey", borderRadius: "10px", boxShadow: "0px 0px 10px" }} className="p-2 m-1">
              <HoverVideoPlayer
                videoSrc={value.assets.thumb_webm.url}
                pausedOverlay={
                  <img src={value.assets.thumb_jpg.url} alt="" style={{ width: "100%" }} />
                }
              />
              <div style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis', marginTop: "10px"
              }}>{value.description}</div>
            </div>
          </div>
        ))
        }
        {boxState===true && <VideoModal open={boxState} closeModal={closeModal} video={selectedVideo} />}
      </div>
    </div>
  );
}

export default Home;