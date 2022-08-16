"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        const members = require("../db/members.json").map((el) => {
            el.status = "free";
            el.createdAt = new Date();
            el.updatedAt = new Date();

            return el;
        });
        await queryInterface.bulkInsert("Members", members);

        /**
         * Add seed commands here.
         *
         * Example:
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Members", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
    },
};
