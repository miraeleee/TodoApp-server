const Todo = function (Sequelize,Database){
    return Sequelize.define(
        "Todo",
        {
            id:{
               type: Database.INTEGER,
               allowNull: false,
               primaryKey: true,
               audoIncreament:true
            },
            title:{
                type: Database.STRING(100),
                allowNull: false
            },
            done:{
                type: Database.BOOLEAN,
                allowNull: false
            }
        },
        {
            //테이블옵션
            tableName: "todo",
            freezeTableName: true,
            timestams: false,
        }
    )
}
module.exports=Todo