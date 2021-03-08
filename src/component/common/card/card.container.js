import React, { useState } from 'react';
import CardComponent from './card.component';

const Card = () => {
    const [isDetailClicked, setISDetailClicked] = useState(false)

    const handelDetail = () => {
        setISDetailClicked(!isDetailClicked)

    }
    return (
        <CardComponent handelDetail={handelDetail} isDetailClicked={isDetailClicked} />
    );
};

export default Card;
