import Alert from 'react-bootstrap/Alert';

const AlertComponent = ({ error, succes }) => {
  return (
    <>
      {error.length > 0 && <Alert variant="danger">{error}</Alert>}
      {succes.length > 0 && <Alert variant="success">{succes}</Alert>}
    </>
  )
}

export default AlertComponent