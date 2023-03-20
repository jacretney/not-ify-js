import { DataTypes } from "sequelize";
import db from '../../infrastructure/database/db.js';

const Track = db.define('Track', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },

    artist: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    album: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    file: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

export default Track;