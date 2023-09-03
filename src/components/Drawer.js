function Drawer({onClose, items }) {

  return (
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
          </h2>
        <div>
        <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex aling-center p-20 mb-20">
                  <img src={obj.imageUrl} className="cardItemImg"/>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
              </div>
            ))}
          </div>

        </div>

        <div className="cardTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>24 000 руб.</b>
              </li>
              <li>
                <span>Налог: 5%</span>
                <div></div>
                <b>1425 руб.</b>
              </li>
            </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>
      </div>
  )
}

export default Drawer;