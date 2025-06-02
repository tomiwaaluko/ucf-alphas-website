
const Greeting = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Greetings from the President
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=200&fit=crop&crop=face" 
              alt="Chapter President"
              className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400 object-cover"
            />
          </div>
          
          <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
            "Welcome to the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. As we continue the legacy 
            of excellence established by our founders, we remain committed to developing leaders, 
            promoting brotherhood, and serving our community. Our chapter stands as a beacon of 
            academic achievement, social responsibility, and unwavering dedication to the principles 
            that have guided Alpha Phi Alpha for over a century."
          </blockquote>
          
          <div className="text-yellow-400">
            <p className="font-semibold text-xl mb-2">Brother Marcus Johnson</p>
            <p className="text-gray-400">Chapter President, Xi Iota Chapter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
