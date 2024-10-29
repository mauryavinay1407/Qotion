import Navbar from "./_components/Navbar";

const LandingPageLayout = ({
    children
} :{
    children: React.ReactNode;
}) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar/>
        <main className="h-full pt-24"> 
          {children}
        </main>
    </div>
  )
}

export default LandingPageLayout;