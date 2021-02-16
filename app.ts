import dotenv from 'dotenv';
import Server from './models/server';

// set dotenv
dotenv.config();

const server = new Server();

server.listen();