<template>
    <div class="inputField" :style="divStyle">

        <label v-if="label" class="inputLabel"><i v-if="icon" :class="icon"></i> {{ label }}</label>
        <input :style="(textColor ? 'color:' + textColor + ';' : '')" :class="`inputValue ${search ? 'search' : ''}  ${required ? 'required' : ''}`" :type="computedType" :maxlength="maxLength" :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" :required="required" />
        <div v-if="type == 'password'" class="passwordButtons">
            <i v-if="!passwordVisible" class="fa-solid fa-eye" @click="togglePasswordVisibility(true)"></i>
            <i v-else class="fa-solid fa-eye-slash" @click="togglePasswordVisibility(false)"></i>
        </div>
        <span class="bar"></span>
    </div>
</template>

<script>
export default {
    name: 'aInput',

    data: () => ({
        passwordVisible: false
    }),
    props: {
        modelValue: [Number, String],
        type: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String,
            default: ''
        },
        maxLength: {
            type: Number,
        },
        label: {
            type: String,
            default: ''
        },
        textColor: {
            type: String,
            default: ''
        },
        wid: {
            type: [Number, String],
            default: 3
        },
        placeholder: {
            type: String,
            default: ''
        },
        search: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
    },

    methods: {
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        }
    },


    computed: {
        computedWidth() {
            if (this.wid > 0 && this.wid < 13)
                return (this.wid * 8.3);
        },
        divStyle() {
            return {
                width: `${this.computedWidth}%`
            };
        },
        computedType() {
            return this.passwordVisible && this.type === 'password' ? 'text' : this.type;
        }
    }
}
</script>