import {Sequelize} from 'sequelize';

const db = new Sequelize('nodets','root','root',{
	host: 'localhost',
	dialect: 'mysql',
	//logging: false, //true en prd
});

export default db;