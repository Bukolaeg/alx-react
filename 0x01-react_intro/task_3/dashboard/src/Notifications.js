import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
	  const handleCloseClick = () => {
		      console.log('Close button has been clicked');
		    };

	  return (
		      <div className="Notifications">
		        <button
		          style={{ position: 'absolute', right: 20, top: 20 }}
		          aria-label="Close"
		          onClick={handleCloseClick}
		        >
		          <img src={closeIcon} alt="close icon" />
		        </button>
		        <p>Here is the list of notifications</p>
		        <ul>
		          <li data-priority="default">New course available</li>
		          <li data-priority="urgent">New resume available</li>
		          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
		        </ul>
		      </div>
		    );
};

export default Notifications;
