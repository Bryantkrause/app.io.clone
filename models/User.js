module.exports = (model, Schema) => {

  const User = new Schema({

    uid: String,
    title: {
      type: String,
      uppercase: true,
    },
    photo: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    location: String,
    timezone: String,
    company: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    board: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
  }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' } })

  return model('User', User)
}