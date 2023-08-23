import './index.css';
import D1 from './components/d1';
import Img30 from './assets/30icon.png';
import newTask from './assets/newtsk.png';
import Profie from './assets/profile1.png';
import Feedback from './assets/feedback.png';
import Task from './assets/complete.png';
import Update from './assets/update.png';
import Follow from './assets/follow.png';


import Img29 from './assets/29icon.png';
import Meet from './assets/meet.png';
import Chat from './assets/chat.png';
import Delay from './assets/delay.png';
import Finish from './assets/time.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <D1 
          day="WED"
          month="JUL"
          imgSrc={Img30}
          tasks={[
            { time: '11:30 AM', icon: newTask, title: 'New task assigned to you', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Feedback, title: 'New feedback received for Task_Name', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Task, title: 'Task marked completed by you', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Update, title: 'Task Name updated for journey jourey_name', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Follow, title: 'Follow up on feedback for Task_name completed on Date', profile: Profie, name: "Shella O'Riley" },
          ]}
          />
        </div>
        <div className="horizontal-line" />
        <div>
          <D1 day="THU"
          month="JUL"
          imgSrc={Img29}
          tasks={[
            { time: '11:30 AM', icon: Meet, title: 'Meeting with Bobby Charlie', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Chat, title: 'Chat about Design Mentorship', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Delay, title: 'Critical delay observed in time line adherence', profile: Profie, name: "Shella O'Riley" },
            { time: '11:30 AM', icon: Finish, title: 'Finish project documnetation for review (1-1 chekin)', profile: Profie, name: "Shella O'Riley" },
          ]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
