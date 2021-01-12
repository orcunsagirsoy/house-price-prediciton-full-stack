module.exports = (sequelize, Sequelize) => {
    const House = sequelize.define("house", {
      name: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      roomNumber: {
        type: Sequelize.NUMBER
      },
      area: {
        type: Sequelize.NUMBER
      }
    });
  
    return House;
  };