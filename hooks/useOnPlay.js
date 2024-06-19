const { default: useAuthModel } = require("./useAuthModal");
const { default: usePlayer } = require("./usePlayer");
const { useUser } = require("./useUser");

const useOnPlay= (songs) => {
    const player = usePlayer();
    const authModal = useAuthModel();
    const { user } = useUser();

    const onPlay = (id) => {

        // THIS CODE WILL PREVENT USER WHO DO NOT LOGGED IN TO PLAY SONGS
        // if(!user) {
        //     return authModal.onOpen();
        // }

        player.setId(id);
        player.setIds(songs.map((song) => song.id))
    }
    return onPlay
}
export default useOnPlay