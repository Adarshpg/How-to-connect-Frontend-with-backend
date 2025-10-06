import express from 'express';
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//get 5 jokes
app.get('/api/jokes', (req, res)=>{
    const jokes=[
  {
    id: 1,
    title: "Programmer's Coffee",
    content: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25."
  },
  {
    id: 2,
    title: "Bug Hunter",
    content: "Why did the developer go broke? Because he used up all his cache."
  },
  {
    id: 3,
    title: "Debugging",
    content: "Debugging is like being the detective in a crime movie where you are also the murderer."
  },
  {
    id: 4,
    title: "AI Humor",
    content: "I asked my AI assistant to tell me a joke… it just replied: 'Sorry, I cannot compute humor.'"
  },
  {
    id: 5,
    title: "Keyboard Problem",
    content: "Why was the computer cold? Because it left its Windows open."
  }
]
res.send(jokes)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
