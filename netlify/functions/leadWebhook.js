const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const webhookUrl = 'https://hooks.zapier.com/hooks/catch/19030450/2um8b4l/';
  const headers = { 'Content-Type': 'application/json' };

  try {
    // Parse the incoming request body
    const payload = JSON.parse(event.body);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error in serverless function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error forwarding request', details: error.message })
    };
  }
};