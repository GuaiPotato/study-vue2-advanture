<template>
    <div>
        <Person name="tyler" :age="18" />
    </div>
</template>

<script>

import Person from './components/Person'

export default {
    name: 'App',
    components: {
        Person
    }
}
</script>

<style></style>