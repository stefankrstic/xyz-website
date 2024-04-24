import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Home() {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
            <div className="gradientBg rounded-xl rounded-br-[90px] md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <img src="https://bucket.webdevamin.com/blogging.svg" className="lg:h-[386px]"></img>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="md:w-3/5"
                    >
                        <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                            Develop your skills without diligence
                        </h2>
                        <p className="text-2xl mb-8 text-[#EBEBEB]">
                            A good example of a paragraph contains a topic sentence, details and a conclusion. There are
                            many diffrent kinds of animals that live in forest.
                        </p>
                        <div className="space-x-5 space-y-4">
                            <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                                Get Started
                            </button>
                            <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                                Discount
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
