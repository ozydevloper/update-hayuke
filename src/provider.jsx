import { Theme } from "@radix-ui/themes";

const Provider = ({ children }) => {
  return (
    <>
      <Theme
        appearance="light"
        accentColor="blue"
        grayColor="gray"
        radius="large"
      >
        {children}
      </Theme>
    </>
  );
};
export default Provider;
