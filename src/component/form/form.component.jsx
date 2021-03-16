import React from 'react'
import moneySimble from '../../assets/₹.svg'
import Button from '../common/button/button.container'
import CustomInput from '../common/input/input.container';
import './form.scss'

const FormComponent = (props) => {
    const { handleChange, amount, handleForm, isFeildNotEmpty } = props
    return (
        <>
            <div className="formWrapper" >
                <div className='headingWrapper' >
                    <h2 className="oldCar">
                        Place your Load Bid
               </h2>
                </div>
                <div className="heading">
                    <div className="underBar"></div>
                </div>
                <div className='amountWrapper'>
                    <img src={moneySimble} alt='money' style={{ width: '30px', height: '40px', paddingTop: '5px' }} />
                    <input
                        id="standard-adornment-weight"
                        value={amount}
                        onChange={handleChange}
                        style={{
                            fontSize: '40px', border: 'none', width: 'auto', opacity: amount === 0 ? 0.5 : 1,
                            display: 'flex',
                            width: '16%'
                        }}
                    />


                </div>
                <div className='buttonWrapper' style={{ marginBottom: '20px', display: 'flex' }}>
                    <Button text='Fixed Price' style={{ borderRadius: '18px', backgroundColor: 'transparent', color: 'black', height: '40px' }}></Button>
                    <Button text='Rate Negiotable' style={{ borderRadius: '18px', backgroundColor: 'transparent', color: 'black', height: '40px' }}></Button>
                </div>
                {amount > 0 &&
                    <div>
                        <hr />
                        <div>
                            <CustomInput label="Enter your mobile number*" name='mobileNumber'
                                onChange={handleForm}
                                style={{
                                    margin: '30px',
                                    height: '50px',
                                    borderRadius: '6px',
                                    border: '1px solid #ccc',
                                    width: '100%'
                                }} />
                            <CustomInput label="Enter your name*" name='name'
                                onChange={handleForm}
                                style={{
                                    margin: '30px',
                                    height: '50px',
                                    borderRadius: '6px',
                                    border: '1px solid #ccc',
                                    width: '100%'
                                }} />
                            <CustomInput label="Enter Remarks(optional)" name='remark'
                                onChange={handleForm}
                                style={{
                                    margin: '30px',
                                    height: '50px',
                                    borderRadius: '6px',
                                    border: '1px solid #ccc',
                                    width: '100%'
                                }} />
                        </div>
                    </div>
                }
            </div >
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Button text='Bid Now' style={{
                    backgroundColor: isFeildNotEmpty ? '#EDF0F7' : 'blue', color: isFeildNotEmpty ? '#2355FC' : 'black',
                    opacity: '60%',
                    margin: '20px',
                    height: '48px',
                    width: '100%'
                }} />
            </div>

        </>
    )
}

export default FormComponent;