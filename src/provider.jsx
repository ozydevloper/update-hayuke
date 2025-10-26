import { Theme } from "@radix-ui/themes";

const Provider = ({ children }) => {
  return (
    <>
      <Theme
        appearance="dark"
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
