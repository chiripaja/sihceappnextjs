import "bootstrap/dist/css/bootstrap.min.css";
export default function publicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (    
    <>
        {children}
    </>
  );
}