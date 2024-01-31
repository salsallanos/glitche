(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8888],{1296:function(e,t,r){var a,l,i=Object.create,s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,n=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__copyProps=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of p(t))d.call(e,l)||l===r||s(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},__publicField=(e,t,r)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>Vidyard}),e.exports=__copyProps(s({},"__esModule",{value:!0}),u);var y=(l=null!=(a=r(2265))?i(n(a)):{},__copyProps(a&&a.__esModule?l:s(l,"default",{value:a,enumerable:!0}),a)),h=r(4117),c=r(5087);let Vidyard=class Vidyard extends y.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",h.callPlayer),__publicField(this,"mute",()=>{this.setVolume(0)}),__publicField(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),__publicField(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,config:r,onError:a,onDuration:l}=this.props,i=e&&e.match(c.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,h.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then(e=>{this.container&&(e.api.addReadyListener((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},i),e.api.renderPlayer({uuid:i,container:this.container,autoplay:t?1:0,...r.options}),e.api.getPlayerMetadata(i).then(e=>{this.duration=e.length_in_seconds,l(e.length_in_seconds)}))},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){let{display:e}=this.props;return y.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},y.default.createElement("div",{ref:this.ref}))}};__publicField(Vidyard,"displayName","Vidyard"),__publicField(Vidyard,"canPlay",c.canPlay.vidyard)}}]);