import mongoose from "mongoose";
import mongoose from 'mongoose';

const mongoConection = {
  isConnected: 0
}

export const connect = async () => {
  if ( mongoConection.isConnected === 1 ) {
    console.log( 'Ya estamos conectados' );
    return;
  }

  if ( mongoose.connection.length > 0 ) {
    mongoConection.isConnected = mongoose.connections[0].readyState;

    if ( mongoConection.isConnected === 1 ) {
      console.log( 'Usando conexión anterior' );
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect( '...' );
  mongoConection.isConnected = 1;
  console.log( 'Conectado a MongoDB', '...' );
}

export const disconnect = async () => {
  if ( mongoConection.isConnected !== 0 ) return;

  await mongoose.disconnect();
  console.log( 'Desconectado de MongoDB' );
}
