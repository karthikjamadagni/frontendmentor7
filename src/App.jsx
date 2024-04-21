import './App.css';
import images from '../src/assets/index.js';

const App = () => {
  return <>
  <div className="w-full h-screen flex flex-col md:flex md:flex-row md:justify-center md:items-center">
    <div className="lg:text-sm text-s w-full h-45p weight-700 rounded-b-3xl flex flex-col justify-evenly gradient-light-dark-blue lg:w-1/4 lg:rounded-2xl py-2 lg:h-200">
        <div className="w-full flex flex-row justify-center items-center h-fit text-xl text-light-lavender">Your Result</div>
        <div className="w-36 h-36 rounded-full gradient-cirle mx-auto flex flex-col justify-center items-center gap-1 px-0.5">
          <span className="text-6xl text-center text-white">76</span>
          <span className="text-xm text-center weight-500 text-green-teal">of 100</span>
        </div>
        <div className="text-2xl text-center text-white">Great</div>
        <div className="flex flex-col w-full h-fit mt-2">
          <span className="text-xm text-light-lavender text-center weight-500">You scored higher than 65% of the</span>
          <span className="text-xm text-light-lavender text-center weight-500">people who have taken these tests</span>
        </div>
    </div>
    <div className="w-full h-65p flex flex-col justify-start px-6 pt-4 gap-2 md:w-1/4 lg:h-auto">
      <span className="text-xl weight-800 text-dark-gray-blue w-full flex flex-row justify-start items-center mb-2">Summary</span>
      <div className="w-full p-3 flex flex-row items-center justify-between bg-light-red bg-opacity-10 rounded">
        <div className="flex flex-row gap-1">
          <img src={images.icon_reaction} alt="" />
          <span className="text-xm text-light-red">Reaction</span>
        </div>
        <div className=""> <span className="weight-800">80</span>  /  100</div>
      </div>

      <div className="w-full p-3 flex flex-row items-center justify-between bg-orangey-yellow bg-opacity-10 rounded">
        <div className="flex flex-row gap-2">
          <img src={images.icon_memory} alt="" />
          <span className="text-xm weight-800 text-orangey-yellow">Memory</span>
        </div>
        <div className=""> <span className="weight-800">92</span>  /  100</div>
      </div>


      <div className="w-full p-3 flex flex-row items-center justify-between bg-green-teal bg-opacity-10 rounded">
        <div className="flex flex-row gap-2">
          <img src={images.icon_verbal} alt="" />
          <span className="text-xm weight-800 text-green-teal">Verbal</span>
        </div>
        <div className=""> <span className="weight-800">62</span>  /  100</div>
      </div>

      <div className="w-full p-3 flex flex-row items-center justify-between bg-cobalt-blue bg-opacity-10 rounded">
        <div className="flex flex-row gap-2">
          <img src={images.icon_visual} alt="" />
          <span className="text-xm weight-800 text-cobalt-blue">Visual</span>
        </div>
        <div className=""> <span className="weight-800">72</span>  /  100</div>
      </div>

      <div className="w-full h-fit py-4 bg-dark-gray-blue text-white flex flex-row justify-center items-center rounded-6xl hover:cursor-pointer hover:bg-bg-light-royal-blue">Continue</div>
    </div>
    </div>
  </>
}
 
export default App;