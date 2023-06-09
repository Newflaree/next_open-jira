import { model, models, Schema } from 'mongoose';

const entrySchema = new Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
  },
  status: {
    type: String,
    enum: {
      values: [ 'pending', 'in-progress', 'finished' ],
      message: '{VALUE} no es un estado permitido'
    },
    default: 'pending'
  }
});

const EntryModel = models.Entry || model( 'Entry', entrySchema )

export default EntryModel;
