import Navbar from "./Navbar";

const FixedUI = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default FixedUI;
