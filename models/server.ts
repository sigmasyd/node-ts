import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connections';

class Server{
	private app: Application;
	private port: string;
	private apiPaths = {
		usuarios: '/api/usuarios'
	};

	constructor(){
		this.app = express();
		this.port = process.env.PORT || '8000';

		this.dbConnection();

		// metodos iniciales
		this.middlewares();

		// definir las rutas
		this.routes();
	}

	async dbConnection(){
		try{
			await db.authenticate;
			console.log('Database online');
		}catch(error){
			throw new Error(error);
		}
	}

	routes(){
		this.app.use(this.apiPaths.usuarios, userRoutes);
	}

	middlewares(){
		// CORS
		this.app.use( cors() );

		// Lectura del body - parsear el body
		this.app.use( express.json() );

		// Carpeta publica
		this.app.use( express.static('public') );
	}

	listen(){
		this.app.listen(this.port,()=>{
			console.log('Servidor corriendo en puerto '+ this.port);
		});
	}
}

export default Server;