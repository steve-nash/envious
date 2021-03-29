<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col class="col-md-5">
        <div class="brit-container" id="table">
          <ApiTestAccommodation />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import ApiTestAccommodation from "@/components/ApiTestAccommodation";

export default {
  name: "ApiTest",
  components: {
    ApiTestAccommodation
  }
};
</script>
