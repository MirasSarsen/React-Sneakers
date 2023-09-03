import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [CartItems, setCartItems] = React.useState([
  ]);
  const [cartOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64f33cf9edfa0459f6c66c23.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="Wrapper clear">
    {cartOpened && <Drawer items={CartItems} onClose={() => setCardOpened(false)} />}
    <Header onClickCart={() => setCardOpened(true)} />
          <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
              <h1>Все кроссовки</h1>
              <div className="search-block d-flex">
                <img src="./img/search.svg" alt="Search"/>
                <input placeholder="Поиск..." />
              </div>
            </div>
         <div className="d-flex mb-20 flex-wrap">

          {items.map((item) => (
             <Card 
             title= {item.title} 
             price={item.price} 
             imageUrl={item.imageUrl}
             onFavorite={() => console.log('Добавили в закладки')}
             onPlus={(obj) => onAddToCart(obj)}
             cartItems={CartItems} 
             />
          ))}
        </div>
    </div>
  </div>
  );
}

export default App;