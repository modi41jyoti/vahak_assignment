import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './form.style';
import Input from '@material-ui/core/Input';
import moneySimble from '../../assets/₹.svg'
import Button from '../common/button/button.container'
import CustomInput from '../common/input/input.container';

const FormComponent = (props) => {
    const { handleChange, amount, handleForm, isFeildNotEmpty } = props
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.wrapper} style={{ borderRadius: 4 }} >
                <Grid container justify='center' >
                    <Typography variant='h6' className={classes.oldCar}>
                        Place your Load Bid
               </Typography>
                </Grid>
                <Grid container justify='center' className={classes.heading}>
                    <div className={classes.underBar}></div>
                </Grid>
                <Grid container justify='center'>
                    <Grid ><img src={moneySimble} alt='money' /></Grid>


                    <Input
                        id="standard-adornment-weight"
                        value={amount}
                        onChange={handleChange}
                        style={{ fontSize: '20px', marginBottom: '20px' }}
                    />


                </Grid>
                <Grid container justify='center' style={{ marginBottom: '20px' }}>
                    <Button text='Fixed Price' style={{ borderRadius: '18px', backgroundColor: 'transparent', color: 'black' }}></Button>
                    <Button text='Rate Negiotable' style={{ borderRadius: '18px', backgroundColor: 'transparent', color: 'black' }}></Button>
                </Grid>
                {amount > 0 &&
                    <>
                        <Divider />
                        <CustomInput label="Enter your mobile number*" name='mobileNumber'
                            onChange={handleForm}
                            style={{
                                marginBottom: '20px', width: '90%'
                            }} />
                        <CustomInput label="Enter your name*" name='name'
                            onChange={handleForm}
                            style={{
                                marginBottom: '20px', width: '90%'
                            }} />
                        <CustomInput label="Enter Remarks(optional)" name='remark'
                            onChange={handleForm}
                            style={{
                                marginBottom: '20px', width: '90%'
                            }} />
                    </>
                }
            </Grid >
            <Grid container>
                <Button text='Bid Now' style={{ backgroundColor: isFeildNotEmpty ? '#EDF0F7' : 'blue', color: isFeildNotEmpty ? '#2355FC' : 'black', opacity: '60%', width: '100%', marginBottom: '30px', marginTop: '30px' }} />
            </Grid>
        </>
    )
}

export default FormComponent;