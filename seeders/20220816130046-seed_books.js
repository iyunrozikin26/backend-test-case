"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        const books = require("../db/books.json").map((el) => {
            el.status = "free";
            el.createdAt = new Date();
            el.updatedAt = new Date();
            return el;
        });
        await queryInterface.bulkInsert("Books", books);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Books", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
    },
};
