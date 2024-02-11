import './AlertDismissable'
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible(props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(props.show);
  }, [props.show])

  return (
    <div className='alertDiv'>
      <Alert show={show} variant="danger">
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>
            {props.text}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-light">
            Ok
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default AlertDismissible;