<template>
    <button class="button-33" role="button"><slot/></button>
</template>

<script>
export default {

}
</script>

<style>
    
.button-33 {
  background-color: #ffc0cb;
  border-radius: 100px;
  box-shadow: rgba(219, 112, 147, .2) 0 -25px 18px -14px inset,rgba(219, 112, 147, .15) 0 1px 2px,rgba(219, 112, 147, .15) 0 2px 4px,rgba(219, 112, 147, .15) 0 4px 8px,rgba(219, 112, 147, .15) 0 8px 16px,rgba(219, 112, 147, .15) 0 16px 32px;
  color: #db7093;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: rgba(219, 112, 147,.35) 0 -25px 18px -14px inset,rgba(219, 112, 147,.25) 0 1px 2px,rgba(219, 112, 147,.25) 0 2px 4px,rgba(219, 112, 147,.25) 0 4px 8px,rgba(219, 112, 147,.25) 0 8px 16px,rgba(219, 112, 147,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

</style>