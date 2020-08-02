import React, { useState, Fragment, FC } from 'react';
import './App.css';
import Modal from './Modal';

const App: FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isModal2Opened, setIsModal2Opened] = useState(false);

  return (
    <Fragment>
      <header className="header">
        <h1>React Modal</h1>
      </header>
      <div className="container">
        <button className="btn" onClick={() => setIsModalOpened(true)}>Open modal 1</button>
        <button className="btn" onClick={() => setIsModal2Opened(true)}>Open modal 2</button>
      </div>

      {isModalOpened && 
        <Modal title="Modal title" duration={500} onClose={() => setIsModalOpened(false)} showCloseBtn>
          <p>Lorem ipsum dolor sit amet.</p>
        </Modal>
      }
      {isModal2Opened && 
        <Modal title="Modal title" duration={500} onClose={() => setIsModal2Opened(false)}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum labore aperiam. Recusandae culpa similique pariatur facere, deserunt vitae dignissimos facilis, minus non magnam consectetur harum dicta odio ab laborum illo est, exercitationem delectus dolores nam excepturi consequuntur! Distinctio fugit earum vero! Nostrum corrupti quisquam beatae similique repellat. Architecto, voluptates.</p>
        </Modal>
      }
    </Fragment>
  );
}

export default App;
