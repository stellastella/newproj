module.exports = (sequelize, DataTypes) => {
const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  TodoItem.associate = (models) => {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey : 'TodoId',
      onDelete : 'CASCADE',
    })
  };

  return TodoItem;
};