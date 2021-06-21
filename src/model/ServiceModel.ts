import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
  },
  hourlyValue: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

export default mongoose.model('Services', ServicesSchema);