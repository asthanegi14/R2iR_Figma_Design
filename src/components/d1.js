import React from 'react';
import '../index.css';
import Img30 from '../assets/30icon.png';
import newTask from '../assets/newtsk.png';
import Profie from '../assets/profile1.png';
import Feedback from '../assets/feedback.png';
import Task from '../assets/complete.png';
import Update from '../assets/update.png';
import Follow from '../assets/follow.png';

const D1 = () => {
    return (
        <div className='divD1'>
            <div className='heading'>
                <div className='head1'>
                    <h4>WED</h4>
                    <p>Jul</p>
                </div>
                <div className='imgDiv'>
                    <img src={Img30} alt="30" />
                </div>
            </div>
            <div className='vertical-line' />
            <div className='lists'>
                <ul>
                    <li>
                        <div className='lid1'>
                            <div className='content'>
                                <div className='time'>11:30 AM</div>
                                <div className='icon'><img src={newTask} alt="new task" /></div>
                                <div className='title'>
                                    <div className='t1'>
                                        New task assigned to you
                                    </div>
                                    <div className='profilediv'>
                                        <div className='vertical-line-pro' />
                                        <div>
                                            <img src={Profie} alt="profile" />
                                        </div>
                                        <div className='name'>
                                            Shella O'Riley
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='lid1'>
                            <div className='content'>
                                <div className='time'>11:30 AM</div>
                                <div className='icon'><img src={Feedback} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        New feedback received for Task Name
                                    </div>
                                    <div className='profilediv'>
                                        <div className='vertical-line-pro' />
                                        <div>
                                            <img src={Profie} alt="profile" />
                                        </div>
                                        <div className='name'>
                                            Shella O'Riley
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='lid1'>
                            <div className='content'>
                                <div className='time'>11:30 AM</div>
                                <div className='icon'><img src={Task} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Task marked completed by you
                                    </div>
                                    <div className='profilediv'>
                                        <div className='vertical-line-pro' />
                                        <div>
                                            <img src={Profie} alt="profile" />
                                        </div>
                                        <div className='name'>
                                            Shella O'Riley
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='lid1'>
                            <div className='content'>
                                <div className='time'>11:30 AM</div>
                                <div className='icon'><img src={Update} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Task Name updated for journey journey Name
                                    </div>
                                    <div className='profilediv'>
                                        <div className='vertical-line-pro' />
                                        <div>
                                            <img src={Profie} alt="profile" />
                                        </div>
                                        <div className='name'>
                                            Shella O'Riley
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='lid1'>
                            <div className='content'>
                                <div className='time'>11:30 AM</div>
                                <div className='icon'><img src={Follow} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Follow up on feedback for Task_Name completed on Date
                                    </div>
                                    <div className='profilediv'>
                                        <div className='vertical-line-pro-diff' />
                                        <div>
                                            <img src={Profie} alt="profile" />
                                        </div>
                                        <div className='name'>
                                            Shella O'Riley
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='vertical-line' />
            </div>
        </div>
    )
}

export default D1