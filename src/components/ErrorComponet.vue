<template>
    <div class="w-4/5 mx-auto bg-white rounded-xl  overflow-hidden md:flex md:max-w-2xl lg:max-w-6xl py-32">
    <div class="md:shrink-0 md:w-1/3">
        <img class="h-48 w-full object-cover md:h-full" src="../assets/undraw_Around_the_world_re_rb1p.png" alt="Modern building architecture">
    </div>
    <div class="p-8 md:flex-1">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Uh-Oh, Something Went Wrong!</div>
        <a class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Something’s Not Right, But We’re On It!</a>
        <p class="mt-2 text-slate-500">
        Oops! It seems something went wrong while trying to load this page. Our servers might be taking a short break, or there could be a hiccup with your connection. We're working on getting things back on track.
    
        Please refresh the page or check back in a few moments. If the problem persists, you might want to try clearing your cache or checking your network settings. We appreciate your patience and apologize for the inconvenience.
        </p>
    </div>
    </div>

</template>

<script lang="ts">
export default {
    name:'Error'
}
</script>

<style>

</style>