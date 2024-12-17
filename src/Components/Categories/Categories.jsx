import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "Cloud Computing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Data Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Cybersecurity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "DevOps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Blockchain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-orange">Different Categories</h2>
        <p className="text-lg text-white mt-4">
          Communities join together to prep for their interview
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 place-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-purple5 rounded-3xl shadow-lg p-4 flex flex-col items-center "
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-orange mt-4">
                {category.title}
              </h3>
              {/* Category Description */}
              <p className="text-white mt-2 text-sm text-center">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
