let token = null;

export const GetAuthorizationHeader = async () => {
  if (token === null) {
    const { access_token } = await FetchAuthorizatedToken()
    token = access_token;
  }
  return {
    "authorization": "Bearer " + token,
    "Accept-Encoding": "br,gzip",
  };
}

const FetchAuthorizatedToken = async () => {
  const auth_url = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', process.env.PTX_API_ID);
  params.append('client_secret', process.env.PTX_API_KEY);

  try {
    const response = await fetch(auth_url, {
      method: 'POST',
      headers: {
        'Accept-Encoding': 'br,gzip',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: params.toString(),
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}