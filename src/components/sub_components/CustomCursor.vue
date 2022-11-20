<template>
  <div>
    <div data-lg-cursor>
      <div data-lg-cursor-pointer></div>
      <!-- <div data-lg-cursor-trail></div> -->
    </div>
  </div>
</template>

<style>
.lg-cursor-pointer:before {
  margin: -5px 0 0 -5px;
  width: 10px;
  height: 10px;

  background-color: cyan;
  border-radius: 50%;
}
</style>

<script>
import luge from "@waaark/luge";
luge.settings({
  cursor: {
    inertia: 0.9,
  },
});
</script>
