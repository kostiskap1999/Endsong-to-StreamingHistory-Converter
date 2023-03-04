import { Track } from "./Track"

export function Conversion(endsong) {
    var filenum = 0 // number of files
    var streamingHistoryFiles = []
    var file = []
    var tc = 0 //trackcount

    for(let i=0; i<endsong.length; i++) {
        if (endsong[i].master_metadata_album_artist_name != null && endsong[i].master_metadata_track_name != null && endsong[i].ms_played != null && endsong[i].ts != null){
            file[tc] = new Track(endsong[i].ts, endsong[i].master_metadata_album_artist_name, endsong[i].master_metadata_track_name, endsong[i].ms_played)
            tc++
        }

        if (tc == 2800 && i != endsong.length-1){ //last.fm can only accept 2800 daily scrobbles so more files will be needed. Checking i because of file assignment after loop.
            streamingHistoryFiles[filenum] = file
            filenum++
            tc = 0
        }
    }
    streamingHistoryFiles[filenum] = file
    return streamingHistoryFiles
}
  
export default Conversion;
  