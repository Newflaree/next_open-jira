import mongoose from 'mongoose';


const mongoConection = {
  isConnected: 0
}

export const connect = async () => {
  if ( mongoConection.isConnected === 1 ) {
    console.log( 'Ya estábamos conectados' );
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

  await mongoose.connect( process.env.MONGO_LOCAL_CNN || '' );
  mongoConection.isConnected = 1;
  console.log( 'Conectado a MongoDB', process.env.MONGO_LOCAL_CNN );
}

export const disconnect = async () => {
  if ( process.env.NODE_ENV === 'development' ) return;
  if ( mongoConection.isConnected === 0 ) return;

  await mongoose.disconnect();
  console.log( 'Desconectado de MongoDB' );
}
