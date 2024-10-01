import ollama from 'ollama'

console.log('Running LLM request (it might take some time)...')

const response = await ollama.chat({
  model: 'llama3.1',
  messages: [{
    role: 'user',
    content: 'Why is the sky blue?'
  }],
})

console.log(response.message.content)