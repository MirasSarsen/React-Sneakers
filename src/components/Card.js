import React, { useState } from 'react';

function Card({
    onFavorite,
    imageUrl,
    title,
    price,
    onPlus,
    cartItems // Передайте список товаров в корзине
}) {
    const [isAdded, setIsAdded] = useState(false);


    const onClickPlus = () => {
        if (cartItems.some(item => item.imageUrl === imageUrl && item.title === title)) {
            alert("Товар уже добавлен в корзину.");
        } else {
            onPlus({
                imageUrl,
                title,
                price
            });
            setIsAdded(true);
        }
    };    

    return (
        <div className="card mb-25">
            <div className="favorite" onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} />
            <h5>{title}</h5>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className="plus"
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="Plus"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
}

export default Card;