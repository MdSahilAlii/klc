import React from 'react';
import { FaStar } from 'react-icons/fa'; // You can use <i> if you prefer

const coursesData = [
    {
        title: "NEET Pinnacle 2027 - 2 Year Program",
        description: "A 2-year intensive program for NEET aspirants with expert faculty and comprehensive study material.",
        price: "₹19,999",
        originalPrice: "₹25,000",
        rating: 4.8,
        reviews: 1245,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
        title: "NEET UG Complete",
        description: "Comprehensive NEET preparation with NCERT focus and test series.",
        price: "₹17,999",
        originalPrice: "₹22,000",
        rating: 4.9,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "CBSE Class 12",
        description: "Board exam preparation with chapter-wise tests and sample papers.",
        price: "₹12,999",
        originalPrice: "₹15,000",
        rating: 5.0,
        reviews: 1520,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1422&q=80"
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">Our Popular Courses</h2>
                <p className="text-center text-gray-500 mb-10 text-lg max-w-xl mx-auto">
                    Learn from expert educators with structured programs tailored to your success.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {coursesData.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                        >
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{course.description}</p>

                                {/* Rating */}
                                <div className="flex items-center mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">
                                        {course.rating} ({course.reviews} reviews)
                                    </span>
                                </div>

                                {/* Price & Button */}
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <span className="text-sm line-through text-gray-400">{course.originalPrice}</span>
                                        <span className="text-lg font-bold text-blue-600 ml-2">{course.price}</span>
                                    </div>
                                    <a
                                        href="https://www.klc.live/courses/639277"
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-200"
                                    >
                                        Enroll Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
