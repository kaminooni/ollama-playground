import ollama

print('Running LLM request (it might take some time)...')

response = ollama.chat(
    model='llama3.1',
    messages=[{
        'role': 'user',
        'content': 'Why is the sky blue?',
    }]
)

print(response['message']['content'])