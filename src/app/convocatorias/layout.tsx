import "bootstrap/dist/css/bootstrap.min.css";
export default function ConvocatoriasLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50">
      {children}
    </div>
  );
}