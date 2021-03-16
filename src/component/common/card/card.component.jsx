import React from 'react';
import payment from '../../../assets/payment.svg';
import Path from '../../../assets/Path 25988.svg';
import Group from '../../../assets/Group 15945.svg';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './card.scss'

export default function CardComponent(props) {
    const { handelDetail, isDetailClicked } = props
    return (
        <div className='root'>

            <div className='borderBox' >
                <div className='cardContent'>
                    <h3 className='hondaCity'>Honda City</h3>
                    <h6 className='post'>Posted at 1 Nov, 9.30 AM</h6>
                </div>
                <div >

                    <ul style={{ listStyleType: 'none', padding: '0 0 0 20px', }}>

                        <li className='specification'><img src={Group} alt='spec01' className='specification1'></img>Specification 01</li>
                        <li className='specification'><img src={Path} alt='spec02' className='specification2'></img>Specification 02</li>
                        <li className='specification'><img src={payment} alt='spec03' className='specification3'></img>Specification 03</li>
                    </ul>
                </div >

                {
                    isDetailClicked ?
                        <>
                            <h5 className='textPara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolorum optio a distinctio nesciunt dolores ullam doloremque sit itaque aliquam odit, temporibus repellat veniam inventore facere aperiam assumenda recusandae perferendis.</h5>
                            <h4 className='moreDetail' onClick={handelDetail}><span style={{ color: 'blue' }}>Hide Details</span>
                                <ExpandLessIcon />
                            </h4>

                        </>

                        : <h4 className='moreDetail' onClick={handelDetail}> <span style={{ color: 'blue' }}> More Details</span><ExpandMoreIcon /></h4>
                }
                <div className='memberDetailsWrapper'>

                    <img src="img_avatar2.png" alt="Avatar" />

                    <div>
                        <h3>Rohan Sharma</h3>
                        <p className='moreDetailsWrapperPlace'>Bengaluru, Karnataka</p>
                    </div>

                </div>
            </div>
        </div >
    );
}