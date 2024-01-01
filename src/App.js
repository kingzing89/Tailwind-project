import logo from './logo.svg';
import './App.css';
import Slider from './Slidercomponent';

function App() {
  return (
    <div className='back'>
      <div className="md:container px-4 lg:mx-auto flex flex-col justify-center items-center  text-5xl self-stretch">
        <p className='txt'>Angle Brackets Mobile App</p>
        <p className='txt-2 pt-4 tracking-wide'>development experts</p>
      </div>
      <div class="md:container px-4 lg:mx-auto flex flex-col justify-center items-center  text-5xl self-stretch">
        <p className='sub-txt'>Angle Brackets will quickly assemble a team of Front-end developers for your needs</p>
      </div>
      <Slider/>
    </div>

  );
}

export default App;
