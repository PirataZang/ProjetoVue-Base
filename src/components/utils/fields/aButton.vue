<template>
    <div class="buttonField">
        <button :class="`${disabled ? 'disabled' : 'buttonValue'} ${save ? 'save' : ''}`" :value="modelValue" @click="updateValue" :disabled="disabled">{{ text }}</button>
    </div>
</template>
<script>
export default {
    name: 'aButton',

    props: {
        modelValue: [Number, String],
        text: {
            type: String,
            default: ''
        },
        save: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        updateValue(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>