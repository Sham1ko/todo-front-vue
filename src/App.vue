<template>
  <div>
    <Navbar/>
    <router-view class="container mx-auto"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>


<style>

</style>
