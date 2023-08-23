import React from 'react';
import '../index.css';

const D1 = ({ day, month, imgSrc, tasks }) => {
    return (
        <div className='divD1'>
            <div className='heading'>
                <div className='head1'>
                    <h4>{day}</h4>
                    <p>{month}</p>
                </div>
                <div className='imgDiv'>
                    <img src={imgSrc} alt="30" />
                </div>
            </div>
            <div className='vertical-line' />
            <div className='lists'>
                <ul>
                    {/* <li>
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
                    </li> */}
                    {tasks.map((task, index) => (
                        <li key={index}>
                        <div className='lid1'>
                            <div className='content'>
                            <div className='time'>{task.time}</div>
                            <div className='icon'><img src={task.icon} alt={task.title} /></div>
                            <div className={`title ${index === 0 && day === 'WED' ? 'blue-title' : 'black-title'}`}>
                                <div className='t1'>{task.title}</div>
                                <div className='profilediv'>
                                <div className='vertical-line-pro' />
                                <div>
                                    <img src={task.profile} alt='profile' />
                                </div>
                                <div className='name'>{task.name}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
                {/* <div className='vertical-line' /> */}
            </div>
        </div>
    )
}

export default D1