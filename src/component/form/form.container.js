import React, { useState, useEffect } from 'react'
import FormComponent from './form.component'

const Form = () => {
    const [amount, setAmount] = useState(0)
    const [value, setValue] = useState({
        mobileNumber: '',
        name: '',
        remark: ''
    })
    const [isFeildNotEmpty, setIsFeildNotEmpty] = useState(false)

    useEffect(() => {
        if (!(value.mobileNumber === '' || value.name === '')) {
            setIsFeildNotEmpty(false)
        } else {
            setIsFeildNotEmpty(true)
        }
    }, [value])

    const handleChange = (e) => {
        let amount = e.target.value
        amount = amount.toString();
        amount = Number(amount).toString();
        setAmount(amount)
        return amount;

    }

    const handleForm = (e) => {
        let inputName = e.target.name
        setValue({ ...value, [inputName]: e.target.value })
        // console.log(value)
    }
    return <FormComponent handleChange={handleChange} amount={amount} handleForm={handleForm} isFeildNotEmpty={isFeildNotEmpty} />
}

export default Form;