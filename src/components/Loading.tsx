import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function Loading() {
  return (
    <SpinnerContainer>
      {' '}
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        <p>Loadig ...</p>
      </Spinner>
    </SpinnerContainer>
  );
}

export default Loading;

const SpinnerContainer = styled.div`
  width: 100%;
  text-align: center;
  p {
    padding-top: 40px;
  }
`;
