const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2] 
// password = viix6PPKvtvfmwEx


const url = `mongodb+srv://harishaa827:${password}@cluster0.5ls4u.mongodb.net/noteApp?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  // .then((result) => {
  //   console.log('connected')

  //   const note = new Note({
  //     content: 'More notes here',
  //     date: new Date(),
  //     important: false,
  //   })

  //   return note.save()
  // })
  // .then(() => {
  //   console.log('note saved!')
  //   return mongoose.connection.close()
  // })
  Note.find({important: true}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
  .catch((err) => console.log(err))


  sum = 0
  function clac(arr, n1, n2){
    for (var i = n1; i<=n2; i++){
      sum+=arr[i]
    }
  }