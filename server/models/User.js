const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    foods: [{
      type: Schema.Types.ObjectId,
      ref:  'Food',
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  try {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.isCorrectPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    return false;
  }
};

// Virtual field to count foods
userSchema.virtual('foodCount').get(function () {
  return this.foods.length;
});

const User = model('User', userSchema);

module.exports = User;
