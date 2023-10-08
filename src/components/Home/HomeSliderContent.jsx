import MyContainer from "../shared/MyContainer";

const HomeSliderContent = ({ img, text }) => {
  return (
    <div>
      <div
        className="w-full h-[530px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div>
          <MyContainer>
            {" "}
            <div className="text-black">
              <h1 className="text-[50px] drop-shadow-lg p-0 m-0">
                {text?.title}
                <span className="block m-0 p-0 leading-none">
                  {text?.titleSpan}
                </span>
              </h1>
              <p className="pt-5 text-[20px] opacity-70">{text?.description}</p>
              <button className="mt-8 px-8 py-3 btn-1 hover:bg-black text-white font-semibold drop-shadow-lg rounded-full transition">
                Read More
              </button>
            </div>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderContent;
