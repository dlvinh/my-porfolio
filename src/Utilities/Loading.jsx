import Spinner from 'react-bootstrap/Spinner';


function Loading() {
  return <div className='loading-animation '>
  <Spinner animation="border"  variant="info" size="md" style={{marginTop:"25%"}} />
  <p className='text-info font-weight-bold'>Sending Message</p>
  </div>

}

export default Loading;