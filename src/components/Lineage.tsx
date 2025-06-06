
const Lineage = () => {
  const lineageCards = [
    {
      name: "C.O.N.Q.U.E.R.",
      semester: "Spring '24",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "S.O.V.E.R.E.I.G.N.",
      semester: "Spring '23",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "E.M.P.I.R.E.",
      semester: "Fall '22",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "T.R.I.U.M.P.H.",
      semester: "Spring '22",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "L.E.G.A.C.Y.",
      semester: "Fall '21",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "V.I.C.T.O.R.Y.",
      semester: "Spring '21",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "P.O.W.E.R.",
      semester: "Fall '20",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "D.O.M.I.N.A.T.E.",
      semester: "Spring '20",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "E.X.C.E.L.",
      semester: "Fall '19",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop",
      status: "Open"
    },
    {
      name: "R.I.S.E.",
      semester: "Spring '19",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
      status: "Open"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
            Lineage
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {lineageCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3">
                  <img 
                    src={card.image}
                    alt={card.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2 tracking-wider">
                      {card.name}
                    </h2>
                    <p className="text-yellow-500 text-lg mb-6 font-light">
                      {card.semester}
                    </p>
                    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200 font-medium">
                      {card.status}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineage;
