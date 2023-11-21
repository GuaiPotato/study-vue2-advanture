<template>
    <div>
        <Person />
        <hr />
        <School />
    </div>
</template>

<script>

import Person from './components/Person'
import School from './components/School'

export default {
    name: 'App',
    components: {
        Person,
        School
    }
}
</script>

<style></style>