const url = new URL(import.meta.url)
console.log(`Hello, ${url.search.substring(1)}!`)
