import {db} from "@/database";
import {Entry} from "@/models";

export default function handler( req, res ) {
  switch ( req.method ) {
    case 'GET':
      return getEntries( res )

    default:
      return res.status( 400 ).json({
        message: 'Endpoint no existe'
      });
  }
}

const getEntries = async ( res ) => {
  await db.connect();

  const entries = await Entry.find().sort({ createdAt: 'ascending' });

  await db.disconnect();

  res.status( 200 ).json({
    ok: true,
    entries
  });
}
