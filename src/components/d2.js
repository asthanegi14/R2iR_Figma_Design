import React from 'react';
import '../index.css';
import Img29 from '../assets/29icon.png';
import Meet from '../assets/meet.png';
import Profie from '../assets/profile1.png';
import Chat from '../assets/chat.png';
import Delay from '../assets/delay.png';
import Finish from '../assets/time.png';

const D2 = () => {
    return (
        <div className='divD1'>
          <div className='vertical-line' />
            <div className='heading'>
                <div className='head1'>
                    <h4>THU</h4>
                    <p>Jul</p>
                </div>
                <div className='imgDiv'>
                    <img src={Img29} alt="30" />
                </div>
            </div>
            <div className='vertical-line' />
            <div className='lists'>
                <ul>
                    <li>
                        <div className='lid1'>
                            <div className='content'>
                                <div className='time'>11:30 AM</div>
                                <div className='icon'><img src={Meet} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Meeting with Bobby Charlie
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
                                <div className='icon'><img src={Chat} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Chat about Design Mentorship
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
                                <div className='icon'><img src={Delay} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Critical delay observed in time line adherence
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
                                <div className='icon'><img src={Finish} alt="new task" /></div>
                                <div className='title'>
                                    <div>
                                        Finish project documnetation for review (1-1 chekin)
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
                </ul>
            </div>
        </div>
    )
}

export default D2