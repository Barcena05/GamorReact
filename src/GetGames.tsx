
export const getTopGames: ()=>NonNullable<Promise<Game>> = async (): NonNullable<Promise<Game>>=> {
    try {
      const response = await fetch(
        `https://api.twitch.tv/helix/games/top?first=100`,
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
      return await response.json() as Game;
    } catch (err) {
      console.log(err);
      return {data:[{name:"", id:""}]};
    }
  };

  export interface Game
  {
    data: {name:string, id:string;}[];
  }