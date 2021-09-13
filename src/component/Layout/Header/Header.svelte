<script>
	import { sidebarStore,statusSieber,sidebarStoreMini } from './../../../stores/store.js';
	let isMenuProfile = false

	const clickHandlerBar = () =>{
		if ($sidebarStore == false){
			sidebarStore.openMenu()
			sidebarStoreMini.openMenu()
			statusSieber.statusTrue()
		}else{
			statusSieber.statusFalse()
			sidebarStore.closeMenu()
			sidebarStoreMini.closeMenu()
		}
	}

	const clickHandlerBarMini = () =>{
		if ($sidebarStoreMini == false){
			sidebarStoreMini.openMenu()
		}else{
			sidebarStoreMini.closeMenu()
		}
	}
</script>

<header class="sticky top-0 bg-indigo-800">
	<nav class="bg-blue-400">
		<div class="max-full mx-auto px-4 sm:px-4 lg:px-4">
			<div class="relative flex items-center justify-between h-14">
				<div class="absolute inset-y-0 left-0 flex items-center">
					<!-- Web menu button-->
					<button on:click="{clickHandlerBar}" type="button" class="hidden lg:block inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-600 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
						<span class="sr-only">Open main menu</span>

						<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>

					<!-- Mobile menu button-->
					<button on:click="{clickHandlerBarMini}" type="button" class="block lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
						<span class="sr-only">Open main menu</span>

						<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<p class="text-white ml-2">Admin</p>
				</div>
				<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-2">
	
					<!-- Profile dropdown -->
					<div class="ml-3 relative">
						<div on:mouseenter="{()=>isMenuProfile = true}">
							<button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
								<span class="sr-only">Open user menu</span>
								<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</button>
						</div>
						{#if isMenuProfile}
						<div on:mouseleave="{()=>isMenuProfile = false}" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
							<!-- Active: "bg-gray-100", Not Active: "" -->
							<a href="#0" class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
							<a href="#0" class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
							<a href="#0" class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
						</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>