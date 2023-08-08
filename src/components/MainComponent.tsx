import { cookies, headers } from 'next/headers';
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { IoShareOutline, IoStatsChart } from 'react-icons/io5';

const MainComponent = async () => {
  return (
    <main className=" flex w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        <input
          type="text"
          name="tweet"
          className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
          placeholder="What's happening?"
        />
        <div className="w-full justify-between items-center flex">
          <div></div>
          <div className="w-full max-w-[100px]">
            <button
              type="submit"
              className="rounded-full bg-twitterColor px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold"
            >
              Tweet
            </button>
            <button className="invisible" type="reset"></button>
          </div>
        </div>
      </div>

      <div className="w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b-[0.5px]  border-gray-600 p-2 flex space-x-4 w-full"
          >
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Club of Coders</div>
                  <div className="text-gray-500">@clubofcoderscom</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base w-full cursor-pointer hover:bg-white/5 transition-all">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur, fuga nam voluptatibus autem recusandae eum
                distinctio, minima dolorem, odit quos praesentium illo
                voluptates? Quisquam, vero cum! Nostrum asperiores corrupti
                officia, quam odit voluptatum vero. Praesentium omnis tenetur
                dolorum expedita a minima architecto magni ut. Rem nobis harum a
                fuga laudantium, delectus adipisci aliquam, saepe reiciendis
                aspernatur sequi dignissimos minima modi blanditiis quasi at
                corporis est accusamus in illum unde? Doloribus eaque sit autem
                eligendi totam fugiat voluptatem tempore dolores veritatis quos
                recusandae dignissimos qui quia, aperiam odit dicta placeat sed
                sequi, repellendus ipsam temporibus velit maiores. Dignissimos
                sunt eum facilis?
              </div>
              {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div> */}
              <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
