const PackageSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-24">
        <h1 className="text-6xl font-bold text-center">Package Section</h1>
      <div className="grid gap-12 grid-cols-3 text-center mt-12">
        <div className="border h-40">
          <h1 className="py-4">Maximum 5 employees $5</h1>
          
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
         
        </div>
        <div className="border">
          <h1 className="py-4">Maximum 10 employees $8</h1>
          <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
        </div>
        <div className="border">
          <h1 className="py-4">Maximum 20 employees $15</h1>
          <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
