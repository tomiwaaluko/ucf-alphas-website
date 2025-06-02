
const Eboard = () => {
  const officers = [
    {
      name: "Marcus Johnson",
      position: "President",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Williams", 
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Davis",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      position: "Treasurer", 
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Robert Brown",
      position: "Chaplain",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anthony Taylor",
      position: "Social Chair",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="eboard" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Executive Board
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders of Xi Iota Chapter who guide our brotherhood 
            with integrity, vision, and unwavering commitment to our principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <img 
                  src={officer.image}
                  alt={officer.name}
                  className="w-48 h-48 mx-auto object-cover mb-6 group-hover:opacity-90 transition-opacity"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{officer.name}</h3>
                <p className="text-yellow-400 font-semibold text-lg">{officer.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eboard;
