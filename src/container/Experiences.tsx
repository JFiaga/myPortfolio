import Zoom from 'react-reveal/Zoom';

type Props = {};

const Experiences = (props: Props) => {
  return (
    <section className="w-[100vw] flex justify-center bg-secondBlack text-white" id="experiences">
      <div className="max-w-[1400px] w-full flex items-center justify-center">
        <Zoom>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white  ">
            My<span className="text-mainGreen"> Experiences</span>{" "}
          </h2>
        </Zoom>
      </div>
    </section>
  );
};

export default Experiences;
