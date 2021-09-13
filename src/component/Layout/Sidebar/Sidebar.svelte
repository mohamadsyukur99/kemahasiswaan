<script>
	import {menuStore,menus } from '.../../../stores/store.js';
    import { slide } from 'svelte/transition';
    
    let dataLama = menus;
	let dataMenu = menus;
	let idLama = '';
    let isOverflow = false

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

<div class="w-64 mr-12">
    <div class="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div class="border-r border-gray-300 fixed -mt flex flex-col pt-5 left-0 w-64 bg-white h-full">
            <div on:mouseenter="{()=>isOverflow = true}" on:mouseleave="{()=>isOverflow = false}" class="{isOverflow == true? "overflow-y-auto":"overflow-y-hidden"} -mt-4 overflow-x-hidden flex-grow">
                {#each dataMenu as menu }
                {#if menu.child.length > 0}
                <div>
                    <button on:click="{()=>handlerOpenMenu(menu.id)}" class="h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
                        <span class="flex items-center ml-6 text-gray-500">
                            <i class="fa fa-{menu.icon}"></i>
                            <span class="ml-5 text-sm tracking-wide truncate">{menu.name}</span>
                        </span>
                        
                        <span class="text-gray-500">
                            <i class="fa fa-chevron-{menu.isOpen == true?"down":"right"}"></i>
                        </span>
                    </button>
                    {#if menu.isOpen == true}
                    {#each menu.child as childMenu}
                    <div class="flex w-full bg-gray-50 hover:border-indigo-500 hover:bg-indigo-50 border-l-4 {childMenu.code == $menuStore.code ? Active+"  ":""}" transition:slide>
                        <button on:click="{()=>menuHandlerClick(childMenu)}" class=" pl-54 py-2 h-10 px-14 block text-sm text-gray-600  text-gray-600 hover:text-gray-800  border-transparent   pr-4">
                            <span class=" text-sm tracking-wide truncate">{childMenu.name}</span>
                        </button>
                    </div>
                    {/each}
                    {/if}
                </div>
                {:else}
                <div on:click="{()=>menuHandlerClick(menu)}" class="cursor-pointer flex flex-col space-y-1">
                    <button  class="{menu.code == $menuStore.code ? Active:""} h-11 w-full flex justify-between items-center text-gray-600 cursor-pointer hover:bg-indigo-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-4 focus:outline-none">
                        <span class="flex items-center ml-6 text-gray-500">
                            <i class="fa fa-{menu.icon}"></i>
                            <span class="ml-5 text-sm tracking-wide truncate">{menu.name}</span>
                        </span>
                    </button>
                </div>
                {/if}
                {/each}
            </div>
        </div>
    </div>
</div>