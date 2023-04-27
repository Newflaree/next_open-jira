import mongoose from "mongoose";
import { db } from "@/database";
import { Entry } from "@/models";


export default function handler( req, res ) {
  const { id } = req.query;

  if ( !mongoose.isValidObjectId( id ) ) {
    return res.status( 400 ).json({
      ok: false,
      msg: 'El id no es un ID válido de mongo'
    });
  }

  switch ( req.method ) {
    case 'GET':
      return getEntryById( res, id )

    case 'PUT':
      return updateEntryById( req, res, id )

    case 'DELETE':
      return deleteEntryById( req, res, id )

    default:
      return res.status( 400 ).json({
        message: 'Endpoint no existe'
      });
  }
}

const getEntryById = async ( res, id ) => {
  try {
    await db.connect();
    const currentEntry = await Entry.findById( id );
    await db.disconnect();

    if ( !currentEntry ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'No existe un usuario con ese id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      currentEntry
    });

  } catch ( error ) {
    await db.disconnect();
    console.log( `${ '[CONTROLLER.GET-ENTRY-BY-ID]'.bgRed }: ${ error }`  );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong'
    });
  }
}

const updateEntryById = async ( req, res, id ) => {
  try {
    await db.connect();
    const entryExists = await Entry.findById( id );

    if ( !entryExists ) {
      await db.disconnect();
      return res.status( 400 ).json({
        ok: false,
        msg: 'No hay entradas con ese id'
      });
    }

    const {
      description = entryExists.description,
      status = entryExists.status
    } = req.body;
    
    const entryUpdated = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { new: true, runValidators: true }
    );

    await db.disconnect();

    res.status( 200 ).json({
      ok: true,
      entryUpdated
    });

  } catch ( error ) {
    await db.disconnect();
    console.log( `${ '[CONTROLLER.UPDATE-ENTRY-BY-ID]'.bgRed }: ${ error }`  );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong'
    });
  }
}

const deleteEntryById = async ( req, res, id ) => {
  try {
    await db.connect();
    const currentEntry = await Entry.findById( id )
    await db.disconnect();

    res.status( 200 ).json({
      ok: true,
      currentEntry
    });


  } catch ( error ) {
    await db.disconnect();
    console.log( `${ '[CONTROLLER.GET-ENTRY-BY-ID]'.bgRed }: ${ error }`  );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong'
    });
  }
}
