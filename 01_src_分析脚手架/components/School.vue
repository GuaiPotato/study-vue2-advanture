<template>
    <div>
        <h2>{{ schoolName }}</h2>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
        return {
            schoolName: "NJUIT",
        };
    },
};
</script>
