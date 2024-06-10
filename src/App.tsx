import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5_2 from './components/HelloWorld5_2';
import HelloWorld6 from './components/component6/HelloWorld6';
import HelloWorld7 from './components/component7/HelloWorld7';
import HelloWorld8 from './components/HelloWorld8';


const App: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 h-12 flex justify-center items-center">
        <HelloWorld8 />
      </div>
      <div className="bg-orange-300 h-48 flex justify-center items-center">
        <HelloWorld />
      </div>
      <div className="bg-red-100 h-48 flex justify-center items-center">
        <HelloWorld2 surname='Ujunwa' />
      </div>
      <div className="bg-indigo-100 h-48 sm:flex justify-center items-center">
        <div className='bg-yellow-100 flex h-full w-full p-6'>
          <HelloWorld3 name="Mary" />
        </div>
        <div className='bg-green-300 h-full w-full p-6'>
          <HelloWorld4 />
        </div>
      </div>
      <div className="bg-red-100 h-48 flex justify-center items-center">
        <HelloWorld5_2 name='Ujunwa' />
      </div>
      <div className="bg-indigo-100 h-screen sm:flex justify-center items-center">
        <div className="bg-yellow-100 flex h-full w-full p-6">
          <HelloWorld6 name='Ujunwa' />
        </div>
        <div className="bg-green-100 h-full w-full p-6">
          <HelloWorld7 name='Pius' />
        </div>
      </div>
    </>
  );
}
export default App;
