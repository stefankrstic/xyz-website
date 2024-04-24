import React from "react";
import { FaReact } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                    <a href="/" className="text-wxl font-semibold flex items-center space-x-3 text-primary">
                        <FaReact className="text-white" /> <span className="text-white">XYZ</span>
                    </a>
                    <p className="md:w-1/2">
                        A simple paragraph is comprised of three major comopnents. The first sentence, which is often a
                        declarative sentence.
                    </p>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
                        />
                        <input
                            type="submit"
                            value="Subscribe"
                            className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 itmes-start">
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Platform</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block hover:text-gray-300">
                                Overview
                            </a>
                            <a href="/" className="block hover:text-gray-300">
                                Features
                            </a>
                            <a href="/" className="block hover:text-gray-300">
                                About
                            </a>
                            <a href="/" className="block hover:text-gray-300">
                                Pricing
                            </a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Help</h4>
                        <ul className="space-y-3">
                            <a href="/" className="block hover:text-gray-300">
                                How does it works?
                            </a>
                            <a href="/" className="block hover:text-gray-300">
                                Where to ask question?
                            </a>
                            <a href="/" className="block hover:text-gray-300">
                                How to play?
                            </a>
                            <a href="/" className="block hover:text-gray-300">
                                What is needed for this?
                            </a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contacts</h4>
                        <ul className="space-y-3">
                            <p className="hover:text-gray-300">(011) 1234-567-890</p>
                            <p className="hover:text-gray-300">Street 123</p>
                            <p className="hover:text-gray-300">Country 123</p>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
                <p>&copy; {new Date().getFullYear()} XYZ</p>
                <div className="flex items-center space-x-5">
                    <FaFacebookSquare
                        size={28}
                        className="cursor-pointer hover:-translate-y-4 transition-all duration-300"
                    />
                    <FaInstagram
                        size={28}
                        className="cursor-pointer hover:-translate-y-4 transition-all duration-300"
                    />
                    <FaSquareXTwitter
                        size={28}
                        className="cursor-pointer hover:-translate-y-4 transition-all duration-300"
                    />
                    <CiLinkedin size={28} className="cursor-pointer hover:-translate-y-4 transition-all duration-300" />
                </div>
            </div>
        </div>
    );
}
