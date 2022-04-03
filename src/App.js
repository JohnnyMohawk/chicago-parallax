import React, {useState} from 'react';
import './App.css';
import img1 from './images/mountain1.png';
import img2 from './images/mountain2.png';
import text from './images/text.png';


function App() {

  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)


  return (
    <div className="App">
      <div className='zoom'>
        <img src={img1} alt="" id="img1"
          style={{left: `-${10 + offset * 0.3 + '%'}`, width: (100 + offset * 0.3) + '%'}}
        />
        <img src={img2} alt="" id="img2" 
          // style={{width: (100 + offset * 0.3) + '%'}}
          style={{right: `-${10 + offset * 0.3 + '%'}`, width: (100 + offset * 0.3) + '%'}}
        />
        <img src={text} alt="" id="text"
          style={{top: `-${10 + offset * 0.3 + '%'}`}}
        />
      </div>

    <div className='content'>
      <h2>Chicago Parallax Attempt</h2>
      <p>Proident incididunt non voluptate cillum ex deserunt ad ullamco. Elit non in ullamco exercitation veniam. Ullamco quis irure id cillum est ad dolore anim duis labore irure aute duis tempor.</p>
    </div>

    </div>
  );
}

export default App;
