<template>
  <button class="uk-button uk-button-secondary" v-on="$listeners">
    <span v-if="loading" uk-spinner="ratio: 0.7"></span>
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    startLoading() {
      this.loading = true;
    },
    stopLoading() {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
  .form__input:focus {
    border-color: #003fb2 !important;
    border: 1px solid #003fb2 !important;
  }
  .uk-button-secondary {
    background-color: #003fb2;
    box-shadow: 0 6px 12px 0 rgba(0, 63, 178, .3);
    transition: all ease .5s;
  }
  .uk-button-secondary:hover, .uk-button-secondary:focus {
    background-color: #fd4841;
    box-shadow: 0 6px 12px 0 rgba(253, 72, 65, .3);
  }
</style>
