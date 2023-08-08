import React from 'react';
import LeftSidebar from '@/components/LeftSideBar';
import MainComponent from '@/components/MainComponent';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
      </div>
    </div>
  );
};

export default Home;
