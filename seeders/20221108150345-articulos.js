'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('articulos', [


        {
          id_articulos: "1",
        },
        {
          id_articulos: "2",
        },
        {
          id_articulos: "3",
        },
        {
          id_articulos: "4",
        },
        {
          id_articulos: "5",
        },
        {
          id_articulos: "6",
        },
        {
          id_articulos: "7",
        },
        {
          id_articulos: "8",
        },
        {
          id_articulos: "9",
        },
        {
          id_articulos: "10",
        },
        {
          id_articulos: "11",
        },
        {
          id_articulos: "12",
        },
        {
          id_articulos: "13",
        },
        {
          id_articulos: "14",
        },
        {
          id_articulos: "15",
        },
        {
          id_articulos: "16",
        },
        {
          id_articulos: "17",
        },
        {
          id_articulos: "18",
        },
        {
          id_articulos: "19",
        },
        {
          id_articulos: "20",
        },
        {
          id_articulos: "21",
        },
        {
          id_articulos: "22",
        },
        {
          id_articulos: "23",
        },
        {
          id_articulos: "24",
        },
        {
          id_articulos: "25",
        },
        {
          id_articulos: "26",
        },
        {
          id_articulos: "27",
        },
        {
          id_articulos: "28",
        },
        {
          id_articulos: "29",
        },
        {
          id_articulos: "30",
        },
        {
          id_articulos: "31",
        },
        {
          id_articulos: "32",
        },
        {
          id_articulos: "33",
        },
        {
          id_articulos: "34",
        },
        {
          id_articulos: "35",
        },
        {
          id_articulos: "36",
        },
        {
          id_articulos: "37",
        },
        {
          id_articulos: "38",
        },
        

      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
