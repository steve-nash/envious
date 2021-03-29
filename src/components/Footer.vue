<template>
  <footer class="brit-footer">
    <div class="brit-container footer__info">
      <div class="flex flex-wrap -mx-8">
        <div class="w-full mb-8 md:w-2/5 md:mb-0 px-8">
          <h5>Brititish Council Registered</h5>
          <p> Britannia Student Services meets the standards for registration with the British Council as a provider of homestay, residential, hostel and independent self-catering accommodation for adults and under-18s for accredited providers in London </p>
          <h5>Find Us</h5>
          <p> 1 Rathbone Place, London, W1T 1HH <a href="/contact-us/" class="router-link-exact-active router-link-active" title="Contact Us" aria-current="page"><span>View Map</span></a><br><a href="mailto:info@britanniastudents.com" title="Email">info@britanniastudents.com</a><br><a href="tel:+44 020 7436 7738" title="Phone">+44 (0)20 7436 7738</a></p>
        </div>
        <div class="w-full md:w-1/5 px-8">
          <h5>Opening Times</h5>
          <ul>
            <li class=""><span>Monday</span> 9:30am – 6pm </li>
            <li class=""><span>Tuesday</span> 9:30am – 6pm </li>
            <li class=""><span>Wednesday</span> 9:30am – 6pm </li>
            <li class="isToday"><span>Thursday</span> 9:30am – 6pm </li>
            <li class=""><span>Friday</span> 9:30am – 6pm </li>
            <li class=""><span>Saturday</span> Closed </li>
            <li class=""><span>Sunday</span> Closed </li>
          </ul>
        </div>
        <div class="w-full md:w-1/5 md:block px-8">
          <h5>Accommodation</h5>
          <ul>
            <li><a href="/halls-of-residence/" class="" title=" Halls of Residence"> Halls of Residence </a></li>
            <li><a href="/homestays-private-homes/" class="" title="Homestays"> Homestays </a></li>
            <li><a href="/apartments-houseshares/" class="" title="Shared Apartments/Houses"> Shared Apartments/Houses </a></li>
            <li><a href="/groups-ground-handling/" class="" title="Groups"> Groups </a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/5 md:block px-8">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/about-us/" class="" title="About Us"><span>About Us</span></a></li>
            <li><a href="https://britanniastudents.com/blog" rel="noopener" target="_blank"><span>Blog</span></a></li>
            <li><a href="/policies-and-information/" class="" title="Policies &amp; Information"><span>Policies &amp; Information</span></a></li>
            <li><a href="/terms-and-conditions/" class="" title="Terms &amp; Conditions"><span>Terms &amp; Conditions</span></a></li>
          </ul>
        </div>
      </div><img src="@/assets/img/footer_landscape.svg" alt="London Landscape" class="footer__landscape">
    </div>
    <div class="footer__legal">
      <div class="brit-container">
        <div class="flex flex-wrap h-full -mx-2">
          <div class="w-full hidden sm:w-1/3 sm:flex px-2 items-center"><img src="@/assets/img/footer_logo.jpg" alt="Members logo" class="footer__members"></div>
          <div class="w-full sm:w-1/3 px-2 flex items-center justify-center"><span class="flex mb-6 flex-col items-center sm:mb-0">
              <div class="text-center my-2"> © 2021 Britannia Student Services. All rights reserved. </div>
              <div class="flex"><a href="/terms-of-service/" class="terms" title="Terms of Service">Terms of Service</a><a href="/sitemap/" class="terms" title="Sitemap">Sitemap</a></div>
            </span></div>
          <div class="w-full justify-center py-4 sm:w-1/3 px-2 flex items-center sm:justify-end"><span class="brit-social"><a href="//www.facebook.com/britanniastudentservices" target="_blank" title="Facebook" class="ml-3"><img alt="Facebook" src="@/assets/img/facebook_square.svg"></a><a href="//www.twitter.com/BritanniaSts" target="_blank" title="Twitter" class="ml-3"><img alt="Facebook" src="@/assets/img/twitter_square.svg"></a><a href="//www.instagram.com/britanniastudents/" target="_blank" title="Instagram" class="ml-3"><img alt="Instagram" src="@/assets/img/instagram_square.svg"></a><a href="//www.linkedin.com/company/britannia-student-services/" target="_blank" title="Linkedin" class="ml-3"><img alt="Linkedin" src="@/assets/img/linkedin_square.svg"></a></span></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">

</style>
