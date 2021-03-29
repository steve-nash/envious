<template>
<div>
  <div class="brit-container">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col class="col-md-6">
          <div>
            <header class="codrops-header uk-flex uk-flex-center">
              <h1 class="uk-text-center">
                Welcome to {{ $store.getters.appName }}
              </h1>
            </header>
            <div class="form">
              <div class="form__item">
                <label class="form__label" for="email">Email Address</label>
                <input
                  class="form__input"
                  type="email"
                  v-model="email"
                  id="email"
                />
              </div>
              <div class="form__item">
                <label class="form__label" for="password">Password</label>
                <div class="form__input-wrap">
                  <input
                    class="form__input"
                    type="password"
                    v-model="password"
                    id="password"
                  />
                  <p class="form__password-strength" id="strength-output"></p>
                </div>
              </div>
              <div class="form__item form__item--actions">
                <button-spinner ref="loadingButton" @click="login()"
                  >Log in</button-spinner
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="auth-page loading">
      <main>
        
      </main>
    </div>
  </div>
</div>
</template>

<script>
import { AUTH_REQUEST } from "@/store/actions/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "johndoe@example.com",
      password: "securepassword"
    };
  },
  methods: {
    login() {
      this.$refs.loadingButton.startLoading();
      const { email, password } = this;
      this.$store
        .dispatch(AUTH_REQUEST, { email, password })
        .then(() => {
          // this.$refs.loadingButton.stopLoading();
          this.$router.push("/api-test");
        })
        .catch(error => {
          // this.$refs.loadingButton.stopLoading();
          this.$snack.danger({
            text: error.message
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../styles/auth-styles";
</style>
