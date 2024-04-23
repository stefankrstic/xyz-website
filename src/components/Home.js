import React from "react";

export default function Home() {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
            <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <div>
                        <img src="https://bucket.webdevamin.com/blogging.svg" className="lg:h-[386px]"></img>
                    </div>
                    <div className="md:w-3/5">
                        <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                            Develop your skills without dillgence
                        </h2>
                        <p className="text-2xl mb-8 text-[#EBEBEB]">
                            A good example of a paragraph contains a topic sentence, details adn a conclusion. There are
                            many diffrent kinds of animals that live in China.
                        </p>
                        <div className="space-x-5 space-y-4">
                            <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                                Get Started
                            </button>
                            <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                                Discount
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
