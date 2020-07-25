import React from 'react';

const addClassname = (context) => {
  let className = "";

  switch (context) {
    case 'success':
      className = 'alert-success';
      break;
    case 'information':
      className = 'alert-info';
      break;
    case 'error':
      className = 'alert-danger';
      break;
    case 'warning':
      className = 'alert-warning';
      break;
  }
  return `alert media fade in ${className}`
}

function renderNotification(props) {
  if(props.show) {
    return(
      <div className={ addClassname(props.context) }  >
          <p>{ props.message }</p>
      </div>
    )
  } else {
    return null;
  }
}

const Notification = (props) => renderNotification(props)

export default Notification;
