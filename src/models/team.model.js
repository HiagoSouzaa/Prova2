module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    estado: DataTypes.STRING,
    website: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true
  })

  return Team
}