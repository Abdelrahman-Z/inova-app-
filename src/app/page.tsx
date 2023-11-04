import Course from "./components/course/course";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main className="">
        <Course/>
      </main>
      <Footer/>
    </>
  )
}
