<template>
	<div id="appx">
		Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">Increment if odd</button>
		<button @click="incrementAsync">Increment async</button>
	</div>
</template>

<script src="./index.js" />
<style lang="scss" src="./index.scss" />
