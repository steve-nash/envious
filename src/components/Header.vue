<template>
  <div>
    <div class="brit-topbar">
      <div class="container">
        <div class="brit-topbar__contactInfo hidden lg:flex">
          <a href="tel:+44 020 7436 7738" title="Phone">+44 (0)20 7436 7738</a>
          <a href="mailto:info@britanniastudents.com" title="Email">info@britanniastudents.com</a>
          <a @click="logout()"
              ><span
                class="uk-margin-small-right"
                uk-icon="icon: sign-out"
              ></span>
              Logout</a
            >
        </div>
        <ul class="brit-topbar__actions justify-between w-full lg:w-auto">
          <li class="px-0">
            <a href="//www.facebook.com/britanniastudentservices" target="_blank" title="Facebook" class="ml-3">
              <img alt="Facebook" src="@/assets/img/facebook_square.svg">
            </a>
            <a href="//www.twitter.com/BritanniaSts" target="_blank" title="Twitter" class="ml-3">
              <img alt="Facebook" src="@/assets/img/twitter_square.svg">
            </a>
            <a href="//www.instagram.com/britanniastudents/" target="_blank" title="Instagram" class="ml-3">
              <img alt="Instagram" src="@/assets/img/instagram_square.svg">
            </a>
            <a href="//www.linkedin.com/company/britannia-student-services/" target="_blank" title="Linkedin" class="ml-3">
              <img alt="Linkedin" src="@/assets/img/linkedin_square.svg">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <header class="brit-header__light brit-header">
      <div class="container"><a href="/" class="brit-header__logo router-link-active" title="Britannia"><img alt="Britannia logo" src="@/assets/img/britannia_logo.svg"></a>
        <!---->
        <nav class="brit-header__nav">
          <ul>
            <li><a href="/about-us/" class="" title="About Us"><span>About Us</span></a></li>
            <li><a href="/halls-of-residence/" class="" title="Halls of Residence"><span>Halls of Residence</span></a></li>
            <li><a href="/homestays-private-homes/" class="" title="Homestays"><span>Homestays</span></a></li>
            <li><a href="/apartments-houseshares/" class="" title="Shared Apartments/Houses"><span>Shared Apartments/Houses</span></a></li>
            <li><a href="/groups-ground-handling/" class="" title="Groups"><span>Groups</span></a></li>
            <li><a href="https://britanniastudents.com/blog" rel="noopener" target="_blank"><span>Blog</span></a></li>
            <li><a href="/contact-us/" class="router-link-exact-active router-link-active" title="Contact" aria-current="page"><span>Contact</span></a></li>
            <!---->
          </ul>
        </nav>
        <div class="brit-header__actions">
          <a href="/become-a-partner/" class="brit-header__actions_button partner" title="Become a Partner">Become a Partner</a>
          <a href="/become-a-host/" class="brit-header__actions_button homestay" title="Become a Host">Become a Host</a></div>
      </div>
    </header>
    <div class="brit-about">
      <div class="brit-header__page" :style="{backgroundImage: 'url('+require('@/assets/img/bg.jpg')+')'}">
        <div class="brit-container brit-header__title">
          <p class="sub-title">About Britannia</p>
          <h1>Why Trust Us?</h1><span class="section-separator"></span>
          <div class="header-sec-link">
            <span><img src="@/assets/img/chevrons_down.svg" alt="Scroll Down"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "@/store/actions/auth";
export default {
  name: 'Header',
  methods: {
    logout() {
      window.UIkit.offcanvas(this.$refs.offcanvasMenu).hide();
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  }
}
</script>

<style lang="scss">
</style>
