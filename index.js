const Notification = (props) => {
  //  Write your code here.
  const {className,icon,message}=props;
  const containerClassName={`notification-container ${className}`}
  return (
  <div className={containerClassName}>
     <img className="icon" src={iconUrl}/>
     <p className="message">{message}</p> 
  </div>
  )
};

const element = (
  //  Write your code here.
  <div className="notifications-app-container">
  
    <h1 className="heading">Notifications</h1>
    <div className="notification-container-list">
  
  <Notification 
  className="primary-bg" 
  iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" 
  message="Information Message"/>
  <Notification 
  className="success-bg" 
  iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" 
  message="Success Message"/>
  <Notification 
  className="warning-bg" 
  iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" 
  message="Warning Message"/>
  <Notification 
  className="danger-bg" 
  iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" 
  message="Error Message"/>
  </div>
  </div>

);

ReactDOM.render(element, document.getElementById("root"));
