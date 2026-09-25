const email = "israfil@example.com";

const atIndex = email.indexOf("@") + 1;

const domain = email.slice(atIndex);

console.log(domain);