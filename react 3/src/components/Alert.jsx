import Alert from 'react-bootstrap/Alert';

const AlertComponent = ({ error, succes }) => {
  return (
    <>
      {error.length > 0 && <Alert variant="danger" className='my-2'>{error}</Alert>}
      {succes.length > 0 && <Alert variant="success" className='my-2'>{succes}</Alert>}
    </>
  )
}

export default AlertComponent