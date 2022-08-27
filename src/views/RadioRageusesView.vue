<template>
  <vue-iframe
    :src="src"
    frame-id="my-ifram"
    @load="onLoad"
    name="my-frame"
    width="150px"
    height="2000px"
  />
</template>

<script>
export default {
  name: "MyIframe",
  data: () => ({
    myIframe: null,
    src: "https://rebellyon.info/",
  }),
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow;
    },
  },
};
</script>
