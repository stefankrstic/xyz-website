import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function About() {
    return (
        <>
            <div className="md:px-14 p-4 max-w-s max-auto space-y-10" id="about">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="md:w-1/2"
                    >
                        <img
                            src="https://www.touchsms.com.au/wp-content/uploads/2022/03/touchSMS_blog-step-by-step-guide.jpg"
                            alt=""
                        ></img>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="md:w-2/5"
                    >
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
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="md:w-1/2"
                    >
                        <img
                            src="https://i0.wp.com/kartaca.com/wp-content/uploads/2023/03/Untitled-design-2.png?w=1180&ssl=1"
                            alt=""
                        ></img>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="md:w-2/5"
                    >
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                            You can practice at any <span className="text-secondary">time convenient for you.</span>
                        </h2>
                        <p className="text-tartiary text-lg mb-7">
                            A good example of a paragraph contains a topic conclusion. There are many diffrent kinds of
                            animals that live in forest.
                        </p>
                        <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                            Get Started
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
