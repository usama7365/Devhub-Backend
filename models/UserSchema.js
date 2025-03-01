const mongoose = require('mongoose');
const { USER_ROLES } = require('../constants/enums/user');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatar_url: { type: String }, // will change to the mini schema which will have the url and the name of the image and it's size as well name size file type
    number: { type: String }, // will change to the mini schema which will have the country code and the number
    bio: { type: String },
    password: { type: String, required: true },
    github_username: { type: String },
    github_id: { type: String },
    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.USER,
    }, // will change with enums in the future enum based on the roles
    badges: [
      {
        type: { type: String }, // Seprate schema for the badge for better handling
        awarded_at: { type: Date, default: Date.now },
      },
    ],
    social_links: {
      // have to decide if we need this or not
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      instagram: { type: String },
    },
    settings: {
      notification_preferences: { type: Map, of: Boolean },
      privacy_settings: {
        type: Map,
        of: Boolean,
        default: { profileVisible: true, emailVisible: false },
      }, // Added privacy settings --> github profie
    },
    interests: [{ type: String }], // Array of user interests
    reputation: { type: Number, default: 0, min: 0 }, // User reputation according the the upvotes and badges and verified answers
    last_login: { type: Date },
    is_active: { type: Boolean, default: true }, // user server socket --> will be used to check if the user is online or not
    refresh_token: { type: String },
    fcm_token: { type: String }, // firebase notification base token
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // will be changed to the mini schema
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // will be changed to the mini schema
    skills: [{ type: String }], // will be changed to the mini schema
    is_deleted: { type: Boolean, default: false }, // soft delete
    isEmailVerified: { type: Boolean, default: false },
    otp: { type: String, expires: 300 }, // otp will expire in 5 minutes
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('User', UserSchema);
