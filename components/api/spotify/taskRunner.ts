import { ITaskRunnerProps, TaskRunner } from "components/utils/musicTaskRunner";


export class SpotifyTaskRunner extends TaskRunner {
    constructor(init: ITaskRunnerProps) {
      super(init);
      // this.apiName = init.apiName || this.apiName;
      // this.getSong = init.getSong || this.getSong;
      // this.getPlaylist = init.getPlaylist || this.getPlaylist;
      // this.createPlaylist = init.createPlaylist || this.createPlaylist;
      // this.playSong = init.playSong || this.playSong;
      // this.shareSong = init.shareSong || this.shareSong;
    }
  
    // @override
    // getPlaylist = async (token: string, endpoint: string, id?: string) => {
    //   const blah: ISpotifyGetPlaylist = await this.getPlaylist(token, endpoint, id)
    //   return blah
    // }
  
}