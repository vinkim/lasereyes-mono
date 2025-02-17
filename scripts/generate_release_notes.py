import openai
import os
import sys

# Get the OpenAI API key from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

# Get the version from the script arguments
version = sys.argv[1]

# Read the git diff content from a file (generated in the GitHub Action)
with open('changes.diff', 'r') as f:
    diff_content = f.read()

# Step 1: Generate detailed release notes
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a release note generator. Create detailed release notes based on the git diff provided."},
        {"role": "user", "content": f"Version: {version}\n{diff_content}"}
    ]
)

# Extract the detailed release notes
detailed_release_notes = response['choices'][0]['message']['content'].strip()

# Write the detailed release notes to a file
with open('detailed_release_notes.md', 'w') as f:
    f.write(detailed_release_notes)

# Output to the console (for logs)
print(detailed_release_notes)
