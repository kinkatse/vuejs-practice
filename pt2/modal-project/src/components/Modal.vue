<template>
    <!-- <div class="backdrop" @click="toggleModal"> -->
    <!-- The .self event modifier is so that only clicking on this element,
    not any element within, will trigger the click event listener -->
    <div class="backdrop" @click.self="closeModal">
        <!-- The below errored out because of :class needing "" around it so I need single quotes -->
        <!-- <div class="modal" :class="{ day: theme === "day", night: theme === "night"}"> -->
        <!-- <div class="modal" :class="{ day: theme === 'day', night: theme === 'night'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <h3>{{ list[0] }}</h3>
            <h3>{{ list[1] }}</h3>
            <button @click="toggleTheme">Change Theme</button>
        </div> -->

        <div class="modal" :class="{ day: theme === 'day', night: theme === 'night'}">
            <!-- Slots useful in that we can pass different content and use them in
            different spots. This might be useful for something like a login/signup modal -->
            <!-- default content inside the slot only shows if there is no previous content -->
            <slot>default</slot>
            <div class="actions">
                <slot name="links"></slot>
                <slot name="colors"></slot>
            </div>
            <button @click="toggleTheme">Change Theme</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'list', 'theme', 'toggleTheme', 'toggleModal'],
    methods: {
        closeModal() {
            // This will target any close event listener (@close) and trigger that event
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    h1 {
        color: blue;
    }
    .day {
        background: white;
    }
    .night {
        background: rgb(57, 57, 57);
    }
</style>