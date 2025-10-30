import Logo from "./logo";

const Footer = () => {
  return (
    <div className="bottom-0 flex items-center justify-center flex-col mb-10 mt-5">
      <Logo />
      <div className="flex text-sm font-bold gap-x-2">
        <div className="text-primary">Contact:</div>
        <div>my.hayuke@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
