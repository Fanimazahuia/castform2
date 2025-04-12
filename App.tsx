import React from 'react';
import { ChevronDown, Anchor, Car, Plane, Book, Users, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Luxury Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-7xl text-forest mb-8 fade-in">
              Welcome to Castform.<br />
              <span className="text-gold">Legacy isn't inherited — it's built.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-700 mb-12 fade-in">
              Join an exclusive circle of visionaries crafting generational wealth and timeless success.
            </p>
            <button className="btn-primary fade-in">
              Begin Your Legacy
            </button>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-forest opacity-50" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-8">The Art of Lasting Wealth</h2>
              <p className="text-lg opacity-90 mb-6">
                Castform isn't just another investment course. It's a comprehensive philosophy of wealth creation, preservation, and growth spanning generations.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-center gap-4">
                  <Anchor className="w-8 h-8 text-gold" />
                  <span>Strategic Investment</span>
                </div>
                <div className="flex items-center gap-4">
                  <Car className="w-8 h-8 text-gold" />
                  <span>Asset Management</span>
                </div>
                <div className="flex items-center gap-4">
                  <Plane className="w-8 h-8 text-gold" />
                  <span>Global Networks</span>
                </div>
                <div className="flex items-center gap-4">
                  <Book className="w-8 h-8 text-gold" />
                  <span>Legacy Planning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80"
                alt="Luxury Interior"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">Circle of Excellence</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl mb-8">Join the Circle</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-12">
            Take the first step towards building your legacy. Limited memberships available.
          </p>
          <button className="btn-primary bg-gold hover:bg-[#b39754] text-navy flex items-center gap-2 mx-auto">
            Request Membership
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-forest text-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-playfair text-2xl mb-2">Castform</h3>
              <p className="text-sm opacity-75">Est. 2025 • Building Generational Success</p>
            </div>
            <div className="flex gap-12">
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const testimonials = [
  {
    quote: "Castform's approach to wealth building transformed not just my portfolio, but my entire perspective on legacy.",
    name: "Shadow",
    position: "Chess Noob",
    image: "/src/assets/Screenshot 2025-04-12 183737.png"
  },
  {
    quote: "The network and knowledge I've gained through Castform are invaluable. This isn't just a course, it's an initiation into excellence.",
    name: "Saiyan",
    position: "Morocco boy",
    image: "/src/assets/Screenshot 2025-04-12 183848.png"
  },
  {
    quote: "In a world of get-rich-quick schemes, Castform stands apart with its sophisticated, time-tested approach to wealth creation.",
    name: "Johan",
    position: "My mic sucks",
    image: "/src/assets/Screenshot 2025-04-12 183932.png"
  }
];

export default App;