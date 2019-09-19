class MediaPlayer {
    public media: HTMLMediaElement;
    private plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    
    private initPlugins() {
        const player = this;
        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }
    
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        this.media.muted ? this.unmute() : this.mute();
    }
}

export default MediaPlayer;