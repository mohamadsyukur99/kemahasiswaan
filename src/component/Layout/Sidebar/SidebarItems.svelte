<script>
    import {menuStore,menus,headerStore } from '.../../../stores/store.js';
    import { slide } from 'svelte/transition';
    
    let dataLama = menus;
	let dataMenu = menus;
	let idLama = '';

	const handlerOpenMenu = (id) =>{
		if (id != idLama){
			dataMenu = dataLama
		}
		const menuIndex = dataMenu.findIndex(menu => menu.id == id )
		let newArray = [...dataMenu]
		newArray[menuIndex] = {...newArray[menuIndex], isOpen: !newArray[menuIndex].isOpen}
		dataMenu = newArray
		idLama = id;
	}
    const Active = "bg-indigo-50 border-indigo-500 text-gray-800"

    const menuHandlerClick = (menu) =>{
        menuStore.selectMenu(menu)
    }
</script>
<!-- {#each dataMenu as menu }
    {#if menu.child.length > 0}
    <div>
        <button on:click="{()=>handlerOpenMenu(menu.id)}" class="h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
            <span class="flex items-center ml-4 text-gray-500">
                <i class="fa fa-{menu.icon}"></i>
                <span class="ml-4 text-sm tracking-wide truncate">{$headerStore == true ?menu.name:""}</span>
            </span>
            
            {#if $headerStore == true}
            <span class="text-gray-500">
                <i class="fa fa-chevron-{menu.isOpen == true?"down":"right"}"></i>
            </span>
            {/if}
        </button>
        {#if menu.isOpen == true && $headerStore == true}
        {#each menu.child as childMenu}    
        <div>
            <div class="bg-gray-50">
                <a on:click="{()=>menuHandlerClick(childMenu)}" class="{childMenu.code == $menuStore.code ? Active+" pl-49 ":""}pl-51 py-2 h-10 px-16 block text-sm text-gray-600 hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500  pr-4" href="#">{$headerStore==true?childMenu.name:""}</a>
            </div>
        </div>
        {/each}
        {/if}
    </div>
    {:else}
    <div >
        <button on:click="{()=>menuHandlerClick(menu)}" class="{menu.code == $menuStore.code ? Active:""} h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
            <span class="flex items-center ml-4 text-gray-500">
                <i class="fa fa-{menu.icon}"></i>
                <span class="ml-4 text-sm tracking-wide truncate">{$headerStore==true?menu.name:""}</span>
            </span>
        </button>
    </div>
    {/if}
{/each} -->

<div class="bg-gray-200 font-sans fixed">
    <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="{$headerStore == true ?"w-64":"w-60px"} h-screen bg-white">
        <!-- <div class="w-64 h-screen bg-white"> -->
            <nav class="mt-4">
                {#each dataMenu as menu }
                {#if menu.child.length > 0}
                <div>
                    <button on:click="{()=>handlerOpenMenu(menu.id)}" class="h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
                        <span class="flex items-center ml-4 text-gray-500">
                            <i class="fa fa-{menu.icon}"></i>
                            <span class="ml-4 text-sm tracking-wide truncate">{$headerStore == true ?menu.name:""}</span>
                        </span>
                        
                        {#if $headerStore == true}
                        <span class="text-gray-500">
                            <i class="fa fa-chevron-{menu.isOpen == true?"down":"right"}"></i>
                        </span>
                        {/if}
                    </button>
                    {#if menu.isOpen == true && $headerStore == true}
                    {#each menu.child as childMenu}    
                    <div>
                        <div transition:slide class="bg-gray-50">
                            <a on:click="{()=>menuHandlerClick(childMenu)}" class="{childMenu.code == $menuStore.code ? Active+" pl-50 ":""}pl-51 py-2 h-10 px-16 block text-sm text-gray-600 hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500  pr-4" href="#0">{$headerStore==true?childMenu.name:""}</a>
                        </div>
                    </div>
                    {/each}
                    {/if}
                </div>
                {:else}
                <div >
                    <button on:click="{()=>menuHandlerClick(menu)}" class="{menu.code == $menuStore.code ? Active:""} h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
                        <span class="flex items-center ml-4 text-gray-500">
                            <i class="fa fa-{menu.icon}"></i>
                            <span class="ml-4 text-sm tracking-wide truncate">{$headerStore==true?menu.name:""}</span>
                        </span>
                    </button>
                </div>
                {/if}
            {/each}
            </nav>
        </div>
    </div>
</div>