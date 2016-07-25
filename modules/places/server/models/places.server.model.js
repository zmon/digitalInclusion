'use strict';

var mongoose = require('mongoose'),
      Schema =     mongoose.Schema;

var PlaceSchema = new Schema({
  created: { type: Date, default: Date.now },
  title: { type: String, default: '', trim: true, required: 'Must provide title or place name for location' },
  caption: { type: String, default: '', trim: true },
  location: { type: Array },
  latlng: { type: Array },
  wifi: { type: Boolean },
  description: { type: String, default: '', trim: true },
  primaryCategory: { type: String, default: '', trim: true },
  categories:{ type: Array },
  url: { type: String, trim: true },
  locationType: { type: String },
  readableAddress: { type: String, default: '', trim: true, unique: true },
  address1: { type: String, default: '', trim: true },
  address2: { type: String, default: '', trim: true },
  hoursOpen: { type: Array },
  city: { type: String, default: '', trim: true },
  state: { type: String, default: 'MO', trim: true },
  zip: { type: Number },
  phone: { type: String, default: '', trim: true },
  courseSchedule: { type: Array },  
  contactName: { type: String, default: '', trim: true },
  contactEmail: { type: String, default: '', trim: true },
  user: { type: Schema.ObjectId, ref: 'User' },
  verified: { type: Boolean }
});

// PlaceSchema.index({location: '2dsphere'});

mongoose.model('Place', PlaceSchema);
