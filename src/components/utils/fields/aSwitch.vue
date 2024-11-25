<template>
    <div class="aSwitchField">
        <input class="aSwitch" type="checkbox" name="switch" id="switch" :checked="modelValue" :required="required"
            @change="updateValue" />
        <label class="aSwitchButton" for="switch"></label>
        <span class="aSwitchText">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'aSwitch',
    props: {
        modelValue: {
            type: [String, Number, Boolean], // expects a String, Number, or Boolean
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
    },

    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.checked);
        }
    }
}
</script>
