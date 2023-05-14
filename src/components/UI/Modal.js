import ReactDOM  from "react-dom";
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.backdropClickHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  )
}

function Modal(props){
  const portalTarget = document.getElementById('overlay');
  return (
    <>
      {ReactDOM.createPortal(<Backdrop backdropClickHandler={props.onClose}/>, portalTarget)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalTarget)}
    </>
  )
}

export default Modal;