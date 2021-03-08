import React from 'react';
import { Grid, Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './card.style'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import payment from '../../../assets/payment.svg';
import Path from '../../../assets/Path 25988.svg';
import Group from '../../../assets/Group 15945.svg';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './card.scss'

export default function CardComponent(props) {
    const classes = useStyles();
    const { handelDetail, isDetailClicked } = props
    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <Typography className='hondaCity'>Honda City</Typography>
                <Typography className='post'>Posted at 1 Nov, 9.30 AM</Typography>
            </CardContent>
            <CardActions>
                <ul style={{ listStyleType: 'none', padding: '0 0 0 10px', }}>

                    <li style={{ marginBottom: '10px' }}><img src={Group} style={{ marginRight: '14px' }}></img>Specification 01</li>
                    <li style={{ marginBottom: '10px' }}><img src={Path} style={{ marginRight: '10px' }}></img>Specification 02</li>
                    <li style={{ marginBottom: '10px' }}><img src={payment} style={{ marginRight: '12px' }}></img>Specification 03</li>
                </ul>
            </CardActions >

            {isDetailClicked ?
                <>
                    {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolorum optio a distinctio nesciunt dolores ullam doloremque sit itaque aliquam odit, temporibus repellat veniam inventore facere aperiam assumenda recusandae perferendis.</Typography> */}
                    <Typography className={classes.moreDetail} onClick={handelDetail}>Hide Details <ExpandLessIcon /></Typography>
                </>

                : <Typography className={classes.moreDetail} onClick={handelDetail}>More Details <ExpandMoreIcon /></Typography>}
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} >
                        R
                    </Avatar>
                }
                title="Rohan Sharma"
                subheader="Bengaluru, Karnataka"
            />
        </Card >
    );
}