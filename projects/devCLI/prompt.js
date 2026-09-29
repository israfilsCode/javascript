import fs from 'node:fs';

function prompt(question) {
    // Print the question to the terminal
    process.stdout.write(question);
    
    // Read up to 1024 bytes from standard input synchronously
    const buffer = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, buffer, 0, 1024, null);
    
    // Convert the buffer to a string and trim newlines (\n or \r\n)
    return buffer.toString('utf8', 0, bytesRead).trim();
}

export default prompt;