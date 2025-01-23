addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const allowedDomain = "gyanigurus.info";
  
  // Extract the hostname from the request URL
  const url = new URL(request.url);
  const hostname = url.hostname;

  if (hostname !== allowedDomain) {
      console.warn("Unauthorized usage detected!");
      
      // Redirect to the original site
      return Response.redirect('https://gyanigurus.info', 301);
  }
  
  // If the domain is correct, you can continue with your logic
  return new Response('Authorized domain: ' + hostname, {
    headers: { 'content-type': 'text/plain' },
  });
}
