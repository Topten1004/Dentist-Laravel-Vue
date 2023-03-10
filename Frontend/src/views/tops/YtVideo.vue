<template>
  <div>
    <iframe
      :width="width"
      :height="height"
      :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 1280,
    },
    height: {
      type: Number,
      default: 720,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
};
</script>