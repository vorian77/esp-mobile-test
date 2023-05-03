<!-- header -->
<nav class="level navbar-top is-fixed-top m-4">
	<div class="level-item">
		<div class="tabs is-toggle is-toggle-rounded">
			<ul>
				<li>
					<a>
						<span>Sign up</span>
					</a>
				</li>
				<li class="is-active">
					<a>
						<span>Log in</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot />

<!-- Footer -->
<nav class="navbar is-fixed-bottom navbar-footer">
	<div class="navbar-item">
		<p class="text-footer">
			By continuing you agree to the City of Baltimore's
			<a href="https://www.baltimorecity.gov/terms-of-use">Terms of Use</a>
			and
			<a href="https://www.baltimorecity.gov/privacy-policy">Privacy Policy</a>
		</p>
	</div>
</nav>

<style>
	.navbar-footer {
		border-top: 1px solid rgb(218, 214, 214);
		text-align: center;
	}
	.text-footer {
		font-size: 0.7rem;
		text-align: center;
		padding: 8px;
	}
</style>
