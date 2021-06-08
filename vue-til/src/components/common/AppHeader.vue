<template>
	<header class="header">
		<div class="container">
			<div class="wrap">
				<router-link class="logo" to="/">
					<img src="@/assets/logo.png" alt="Logo image" />
					<strong>TIL</strong>
				</router-link>
				<nav class="gnb">
					<h2 class="visually-hidden">GNB</h2>
					<ul class="router-list">
						<li class="router-item">
							<router-link class="router-link" to="/login">Login</router-link>
						</li>
						<li class="router-item">
							<router-link class="router-link" to="/signup">Signup</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	background-color: #fff;
	border-bottom: 1px solid #ececec;
	z-index: 2;
}

.wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: calc(50px - 1px);
}

.logo {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.logo img {
	display: block;
	margin-right: 6px;
	width: 24px;
	height: 24px;
}

.logo,
.router-link {
	padding: 14px;
}

.logo strong,
.router-link {
	color: #37474f;
	font-weight: 700;
}

.router-list {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.router-item:not(:last-child) {
	margin-right: 8px;
}

.router-link {
	font-size: 14px;
}

.router-link:active {
	opacity: 0.4;
}

@media screen and (min-width: 768px) {
	.router-link {
		font-size: 16px;
		transition: opacity 300ms ease-in-out;
	}

	.router-link:hover {
		opacity: 0.4;
	}
}
</style>
