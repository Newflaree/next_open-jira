import { db } from "@/database";
import { Entry } from "@/models";

export default function handler( req, res ) {
  switch ( req.method ) {
    case 'GET':
      return getEntries( res )

    case 'POST':
      return createEntry( req, res )

    case 'PUT':
      return updateEntry( req, res )

    default:
      return res.status( 400 ).json({
        message: 'Endpoint no existe'
      });
  }
}

const getEntries = async ( res ) => {
  try {
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    res.status( 200 ).json({
      ok: true,
      entries
    });

  } catch ( error ) {
    db.disconnect();
    console.log( `${ '[CONTROLLER.GET-ENTRIES]'.bgRed }: ${ error }`  );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong'
    });
  }
}

const createEntry = async ( req, res ) => {
  const { description = '' } = req.body;
  console.log( Date.now() );

  const entryData = {
    description,
    createdAt: Date.now(),
  }

  const newEntry = new Entry( entryData );

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();

    res.status( 201 ).json({
      ok: true,
      newEntry
    });

  } catch ( error ) {
    db.disconnect();
    console.log( `${ '[CONTROLLER.CREATE-ENTRY]'.bgRed }: ${ error }`  );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong'
    });
  }
}
