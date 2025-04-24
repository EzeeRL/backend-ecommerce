let jackets = [
    {
      id: 1,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Nike Windrunner",
      description: "Campera deportiva para Hombre",
      price: 179000
    },
    {
      id: 2,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Adidas Tiro",
      description: "Campera urbana para uso diario",
      price: 165000
    },
    {
      id: 3,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera The North Face Venture 2",
      description: "Campera impermeable outdoor",
      price: 210000
    },
    {
      id: 4,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Columbia Horizons Pine",
      description: "Campera acolchada para frío extremo",
      price: 230000
    },
    {
      id: 5,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Puma Essentials",
      description: "Campera con capucha y bolsillos",
      price: 155000
    },
    {
      id: 6,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Reebok Training",
      description: "Campera ligera para entrenamiento",
      price: 145000
    },
    {
      id: 7,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Patagonia Nano Puff",
      description: "Campera técnica aislante",
      price: 225000
    },
    {
      id: 8,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Under Armour Storm",
      description: "Campera con repelente al agua",
      price: 195000
    },
    {
      id: 9,
      img: "/Slider Destacados/campera-slider.png",
      name: "Campera Nike Sportswear Tech Fleece",
      description: "Campera moderna con estilo deportivo",
      price: 205000
    }
  ];
  
  module.exports = {
    getAll: () => jackets,
    getById: (id) => jackets.find(j => j.id === id),
    create: (jacket) => {
      const newJacket = { id: Date.now(), ...jacket };
      jackets.push(newJacket);
      return newJacket;
    },
    update: (id, updated) => {
      const index = jackets.findIndex(j => j.id === id);
      if (index !== -1) {
        jackets[index] = { ...jackets[index], ...updated };
        return jackets[index];
      }
      return null;
    },
    delete: (id) => {
      const index = jackets.findIndex(j => j.id === id);
      if (index !== -1) {
        return jackets.splice(index, 1)[0];
      }
      return null;
    }
  };
  