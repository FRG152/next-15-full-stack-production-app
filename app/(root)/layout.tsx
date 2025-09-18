import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-work-sans">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
