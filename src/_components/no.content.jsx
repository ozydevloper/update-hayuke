const NoContent = ({ message = "Tunggu update Agenda dari kami" }) => {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="text-sm font-bold text-primary">{message}</div>
    </div>
  );
};
export default NoContent;
