import React, { useState } from 'react';
import Dragula from 'react-dragula';
import { Input } from 'antd';
import './App.scss';

const App = (props) => {
  const [disabled, setDisabled] = useState(true);

  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      console.log(componentBackingInstance);
      Dragula([componentBackingInstance], options);
    }
  };
  const onChange = (e) => {
    console.log(e);
  };

  const handlehandleFocus = () => {
    setDisabled(false);
  };
  console.log(disabled);
  return (
    <div className='container' ref={dragulaDecorator}>
      <div className='sub-container'>asdasd</div>
      <div className='sub-container_1'>
        <div className='d_none'>
          <button>Edit</button>
          <button>Setting</button>
          <button>Move</button>
        </div>
        <div className='textArea_container' onClick={handlehandleFocus}>
          <form>
            <Input
              onChange={onChange}
              onBlur={() => setDisabled(true)}
              defaultValue={
                'Swap them aroundSwap them aroundSwap them aroundSwap them aroundSwaphem aroundSwap them aroundSwap them aroundSwap them around'
              }
              disabled={disabled}
            />
          </form>
        </div>
        <p>
          Swap them aroundSwap them aroundSwap them aroundSwap them aroundSwap
          them aroundSwap
        </p>
        <p>
          Swap them aroundSwap them aroundSwap them aroundSwap them aroundSwap
          them aroundSwap
        </p>
      </div>
      <div className='sub-container'>Swap them around</div>
      <div className='sub-container'>Swap us around</div>
      <div className='sub-container'>Swap things around</div>
      <div className='sub-container'>Swap everything around</div>
    </div>
  );
};

export default App;
