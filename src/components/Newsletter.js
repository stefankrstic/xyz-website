import React from "react";

export default function Newsletter() {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <div className="gradientBg rounded-xl rounded-br-[90px] md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <div>
                        <img
                            src="https://assets-global.website-files.com/6031c35f3bcd264f525899cc/603afbc8f4f45c67a65347cf_undraw_Feeling_of_joy_re_cqko.svg"
                            className="lg:h-[386px]"
                        ></img>
                    </div>
                    <div className="md:w-3/5">
                        <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                            Each student an share their discount code for friends
                        </h2>
                        <p className="text-2xl mb-8 text-[#EBEBEB]">
                            A simple paragraph is comprised of three major comopnents. The first sentence, which is
                            often a declarative sentence, is called the "topic sentence"
                        </p>
                        <div className="space-x-5 space-y-4">
                            <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                                I have a code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
