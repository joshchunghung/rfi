<template>
  <div class="container">
    <LMap ref="map" :center="[23, 121]" :zoom="7">
      <!--layer-type="base" for LControlLayers  -->
      <LTileLayer
        v-for="mapState in mapStates"
        layer-type="base"
        minZoom="6"
        :key="mapState.name"
        :url="mapState.url"
        :attribution="mapState.attribution"
        :name="mapState.name"
        :maxZoom="mapState.maxZoom"
      />
      <LControlLayers />
      <LCircleMarker
        v-for="sta in batS"
        :key="sta.name"
        :lat-lng="[sta.lat, sta.lon]"
        :radius="3"
        color="red"
        fillOpacity="0.5"
      >
        <LPopup>
          {{ sta.name }}<br />
          lat: {{ sta.lat }}<br />
          lon:{{ sta.lon }}
        </LPopup>
      </LCircleMarker>
    </LMap>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LControlLayers,
  LCircleMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import { tileProviders } from "../../public/data/mapUrl";
import axios from "axios";
export default defineComponent({
  name: "twMap",
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LCircleMarker,
    LPopup,
  },
  setup() {
    let mapStates = ref(tileProviders);
    let batS = ref({});
    axios.get("/data/bats.json").then((res) => {
      batS.value = res.data;
    });
    return {
      mapStates,
      batS,
    };
  },
});
</script>

<style scoped>
.container {
  height: 500px;
}
</style>
