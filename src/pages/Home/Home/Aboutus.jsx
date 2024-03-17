

const Aboutus = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-center text-6xl font-bold p-12">About us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea itaque magnam aliquam beatae iure minus dicta nam maxime, adipisci quia minima voluptates laborum culpa sunt? Labore molestiae assumenda et quis.</p>
           
            <h1 className="text-xl font-bold pt-4">Our Mission:</h1>
            <div className="grid grid-cols-2 gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio facere animi nobis nesciunt minima distinctio nostrum delectus quidem ullam nisi esse expedita consequatur qui ad, obcaecati in temporibus omnis.</p>
            <img className="rounded-xl" src="https://i.ibb.co/wrrDbPN/josh-eckstein-Yl-Vw-K5-E0f-Yk-unsplash.jpg" alt="" />
            </div>

            <div className="grid grid-cols-2 gap-4 py-8">
            <img className="rounded-xl" src="https://i.ibb.co/JrTcsjS/jhon-jim-5-BIb-Tw-Xb-TWk-unsplash.jpg" alt="" />
            <div>
            <h1 className="text-xl font-bold pt-4">Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad distinctio omnis molestiae! Veniam dolorum, veritatis sequi omnis repudiandae dolores aperiam cumque pariatur nobis at ad totam minus sapiente officia quos.</p>
            </div>
            </div>
        </div>
    );
};

export default Aboutus;