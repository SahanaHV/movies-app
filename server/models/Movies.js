const { Sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    // sequelize.define('string,{object},arg) it accept 3 arguments
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        freezeTableNmae: true,
        timestamps: true,
        underscored: true,
        tableName: 'movies',
        schema: 'public'
    }
    );

    return Movie;
};