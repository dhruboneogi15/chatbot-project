import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }
  */
  const time =dayjs().valueOf();
  const time_str=dayjs(time).format('h:mma');
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        <p className="msg-para">{message}</p>
        <p className="time-para">{time_str}</p>
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile-user" />
      )}
    </div>
  );
}