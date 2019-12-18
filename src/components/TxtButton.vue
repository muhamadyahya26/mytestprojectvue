<template>
  <div>
    <label class="lbl-txt">{{ label }}</label>
    <button class="btn-action" @click.prevent="changeText">Contoh tombol</button>
  </div>
</template>

<script>
export default {
  name: 'TxtButton',
  data() {
    return {
      label: 'Hai',
    }
  },
  methods: {
    changeText() {
      this.label = 'Hello';
    }
  }
}
</script>
