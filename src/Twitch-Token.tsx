export const twitchAuth: ()=>  NonNullable<Promise<Auth>>= async (): NonNullable<Promise<Auth>> => {
    console.log('Started');
    console.log(import.meta.env.VITE_ID);
    console.log(import.meta.env.VITE_SECRET);
    console.log("Done");
    try {
        const response = await fetch(
            `https://id.twitch.tv/oauth2/token?client_id=${import.meta.env.VITE_ID}&client_secret=${import.meta.env.VITE_SECRET}&grant_type=client_credentials`,
            {
              method: "POST",
              headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
              },
            }
          );
      return await response.json() as Auth;
    } catch (err) {
        console.log("Fallo");
      console.log(err);
      return {access_token: ""}};
    
  };

  export interface Auth{
    access_token:string
  }