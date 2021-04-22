import React from 'react';
import Modal from 'react-modal';
function VideoModal(props) {
  return (
    <Modal isOpen={props.open} style={{
      overlay: {
        background: '#1F1F1F77',
        zIndex:'1000',
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        opacity: '1',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFFFFF',
        boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.09)',
        borderRadius: '8px',
      },
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-3 " style={{ backgroundColor: '#fff' }}>
            <div className="cancel-class">
              <iframe width="450" height="350"
                src={props?.video}>
              </iframe>
              <div className="feedback-btn text-center">
                <button type="button"
                  className="btn "
                  style={{border:"1px solid black",background:"#d8d1d1",padding:"10px"}}
                  onClick={() => props.closeModal()}
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default VideoModal;