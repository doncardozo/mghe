import { Sequelize } from 'sequelize'
import db from '../config/database.js'

const { DataTypes } = Sequelize 

const Post = db.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
    /*,createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    }*/
}, {
    timestamps: true
});

export default Post