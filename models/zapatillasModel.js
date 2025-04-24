let products = [
    {
      id: 1,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 2,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 3,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 4,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 5,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 6,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 7,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 8,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    },
    {
      id: 9,
      img: "/Slider Destacados/zapatilla-slider.png",
      name: "Nike SB Dunk Low Pro Premium",
      description: "Zapatillas de Moda para Hombre",
      price: 249000
    }
  ];
  
  module.exports = {
    getAll: () => products,
    getById: (id) => products.find(p => p.id === id),
    create: (product) => {
      const newProduct = { id: Date.now(), ...product };
      products.push(newProduct);
      return newProduct;
    },
    update: (id, updated) => {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) {
        products[index] = { ...products[index], ...updated };
        return products[index];
      }
      return null;
    },
    delete: (id) => {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) {
        return products.splice(index, 1)[0];
      }
      return null;
    }
  };
  