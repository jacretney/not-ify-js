'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tracks', 'album', {
      type: DataTypes.STRING,
      allowNull: true,
      after: 'title',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tracks', 'album');
  }
};
