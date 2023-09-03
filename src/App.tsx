import React, { FC, Suspense, lazy } from "react";
import { Navbar } from "./components";
import Loading from "./components/Loading";

const Home = lazy(() => import("./container/Home"));
const Projects = lazy(() => import("./container/Projects"));
const Experiences = lazy(() => import("./container/Experiences"));
const About = lazy(() => import("./container/About"));
const Skills = lazy(() => import("./container/Skills"));
const Contact = lazy(() => import("./container/Contact"));

const App: FC = () => {

    return (
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Home />
        <Projects />
        <Experiences />
        <About />
        <Skills />
        <Contact />
      </Suspense>
    );

};
export default App;
