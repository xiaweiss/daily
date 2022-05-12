<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import vtt from 'videojs-vtt.js'

import vttText from './test.vtt?raw'
import { onMounted } from 'vue';

const WebVTT = vtt.WebVTT
const VTTCue = vtt.VTTCue
const VTTRegion = vtt.VTTRegion

// console.log('vttText', vttText)

// const vttText = "WEBVTT\n\nID\n00:00.000 --> 00:20.000\nText"
const parser = new WebVTT.Parser(window, WebVTT.StringDecoder())
const cues = []
const regions = []
parser.oncue = function(cue) {
  // console.log('cue', cue)
  cues.push(cue)
};
// parser.onregion = function(region) {
//   console.log('region', region)
//   regions.push(region)
// }

parser.parse(vttText)
parser.flush()

var div = WebVTT.convertCueToDOMTree(window, cues[0].text);

onMounted(() => {
  // var divs = WebVTT.processCues(window, cues, document.getElementById("overlay"));
})

let cuePos = 0

const currentCueText = ref('')

function timeupdate(event) {
  if (cuePos > cues.length) {
    return false
  }

  const video = event.target
  const currentTime = video.currentTime
  console.log(currentTime, cuePos)

  if (currentTime >= cues[cuePos].endTime) {
    cuePos++
  }

  if (cues[cuePos].startTime <= currentTime && currentTime <= cues[cuePos].endTime) {
    currentCueText.value = cues[cuePos].text
  }

  // console.log('timeupdate', currentTime)
  // console.log(cues[0])

}

// console.log('cues', cues)

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <div>
    <video class="video" src="//player.alicdn.com/video/aliyunmedia.mp4" controls @timeupdate="timeupdate" />
  </div>

  <div>
    <div>subtitle</div>
    <!-- <div id="overlay" style="position: relative; height: 400px"></div> -->
    <div>{{currentCueText}}</div>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

.video {
  width: 100%;
}
</style>
