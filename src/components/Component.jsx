






const Component = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-20 rounded-t-xl bg-gradient-to-r from-white via-gray-500 to-white py-50">
        <div className="col-span-1 text-center">
          <button className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-10">
        <div className="flex flex-col justify-center px-5">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            feugiat mauris. Duis nec sem in nulla tincidunt vulputate. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Sed id eros id nibh lobortis finibus eu a dolor. Sed
            at eros lorem.
          </p>
        </div>
        <img
          src="../app/info/01.jpeg"
          alt="Our Story Image"
          className="w-full rounded-md shadow-md xl:w-auto"
        />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-10 rounded-b-xl bg-gray-200 py-10">
        <img
          src="path/to/programmer-image.jpg"
          alt="Programmer Image"
          className="w-48 rounded-full shadow-md mx-auto xl:w-auto xl:mx-0"
        />
        <div className="flex flex-col justify-center px-5">
          <h2 className="text-xl font-bold mb-4">About the Programmer</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vestibulum volutpat nisi. Maecenas molestie dolor et urna
            bibendum hendrerit. Morbi tempus nisi eros, quis mattis lorem
            consectetur non. Nulla elementum erat felis, ut consectetur ex
            consectetur at. Duis interdum sed diam nec finibus.
          </p>
        </div>
      </section>
    </>
  );
};

export default Component;
