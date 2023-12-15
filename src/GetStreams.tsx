
export const getStreams: (game_id:number)=>NonNullable<Promise<User>> = async (game_id:number): NonNullable<Promise<User>>=> {
    try {
      const response = await fetch(
        `https://api.twitch.tv/helix/streams?game_id=${game_id}`,
        {
          method: "GET",
          headers: {
            "Client-ID":import.meta.env.VITE_ID,
            Authorization: `Bearer ${localStorage.getItem(
              "twitch_access_token"
            )}`,
          },
        }
      );
      return await response.json() as User;
    } catch (err) {
      console.log(err);
      return {data: []}
    }
  };
export interface User{
  data: {user_name:string;}[];
}