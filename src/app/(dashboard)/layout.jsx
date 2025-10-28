import DashboardLayout from "./_components/dashboard.layout";

const Layout = ({ children }) => {
  return (
    <DashboardLayout>
      top side
      {children}
    </DashboardLayout>
  );
};

export default Layout;
