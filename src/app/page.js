import Image from "next/image";
import Header from "./Layout/Header";
import Homepage from "./components/Homepage/Homepage";

export default function Home() {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}
