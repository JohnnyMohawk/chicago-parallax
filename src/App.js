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
      <p>Officia consectetur nulla cupidatat aliquip. Labore consectetur esse fugiat Lorem anim ea velit voluptate anim elit aliquip. Est est ipsum nulla occaecat fugiat sit consectetur laboris officia quis minim esse deserunt. Id aliqua reprehenderit sint duis et id occaecat cupidatat non magna. Irure ut laborum mollit ex in. Mollit amet amet ad esse nisi nostrud officia. Aliquip aute aute do anim labore irure officia eiusmod excepteur pariatur veniam esse proident.

Dolore est consequat culpa consectetur ex eu aute ex culpa deserunt minim duis et. Non culpa ea cillum amet reprehenderit laboris eu. Do officia do consequat cillum officia non ullamco irure. Sunt voluptate ullamco minim anim. Veniam eu sit nostrud consectetur occaecat aute sit ea aliqua veniam laboris pariatur. Dolore anim quis fugiat ut consectetur sint mollit sint nisi enim sit occaecat minim cillum. Irure duis ullamco consectetur sunt consequat magna excepteur magna quis ipsum deserunt reprehenderit.

Velit mollit et deserunt nostrud sit laborum. Ipsum Lorem est id eiusmod elit consectetur do nulla commodo est. Ipsum deserunt quis ut ea ad reprehenderit. Fugiat aute duis aliqua irure tempor Lorem non aliquip eiusmod. Velit commodo aliqua nisi cupidatat fugiat ad occaecat consectetur labore officia. Officia quis sit do ea in reprehenderit ea est magna. Do velit culpa nisi officia non quis ut amet Lorem nostrud aliqua ex nulla.

Amet culpa Lorem reprehenderit elit. Est excepteur laborum sit enim qui irure mollit nisi sint cillum ullamco cillum. Deserunt nulla reprehenderit sint labore eiusmod exercitation fugiat est. Reprehenderit et ut sunt nisi sunt.</p>
    </div>

    </div>
  );
}

export default App;
