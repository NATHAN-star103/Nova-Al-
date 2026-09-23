export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Nova AI is running!");
    }

    const { message } = await request.json();

    const result = await env.AI.run(
      "@cf/google/gemma-4-26b-a4b-it",
      {
        messages: [
          {
            role: "system",
            content: "You are Nova AI. Answer clearly and helpfully."
          },
          {
            role: "user",
            content: message
          }
        ]
      }
    );

    return Response.json(result);
  }
};
