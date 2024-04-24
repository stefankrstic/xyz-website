import React from "react";

export default function About() {
    return (
        <>
            <div className="md:px-14 p-4 max-w-s max-auto space-y-10" id="about">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <img src="https://ecocix.com/static/media/GirlReading.36b735af4c8b051d12099388f0f8b6b8.svg"></img>
                    </div>
                    <div className="md:w-2/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                            We have been improving our product <span className="text-secondary">for many years.</span>
                        </h2>
                        <p className="text-tartiary text-lg mb-7">
                            A good example of a paragraph contains a topic conclusion. There are many diffrent kinds of
                            animals that live in forest.
                        </p>
                        <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <img src="https://i0.wp.com/kartaca.com/wp-content/uploads/2023/03/Untitled-design-2.png?w=1180&ssl=1"></img>
                    </div>
                    <div className="md:w-2/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                            You can Pracrice at any <span className="text-secondary">time convinent for you.</span>
                        </h2>
                        <p className="text-tartiary text-lg mb-7">
                            A good example of a paragraph contains a topic conclusion. There are many diffrent kinds of
                            animals that live in forest.
                        </p>
                        <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
