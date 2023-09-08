export default {
  host: '0.0.0.0',
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!")
  }
}