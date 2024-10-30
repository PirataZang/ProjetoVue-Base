<template>
    <div class="aSwitchField">
        <input class="aSwitch" type="checkbox" name="switch" id="switch" :value="modelValue" :required="required">
        <label class="aSwitchButton" for="switch"></label>
        <span class="aSwitchText">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'aSwitch',
    props: {
        modelValue: {
            type: [String, Number, Boolean], // Espera um String ou Number
            required: true
        },
        value: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>