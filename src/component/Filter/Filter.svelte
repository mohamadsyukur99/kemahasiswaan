<script>
	import {createEventDispatcher} from 'svelte'	
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	export let config = [];
	export let values={};
	let data = values
	let formData = new FormData();

	const dispatch = createEventDispatcher();
	const submitHandler = () => {
		for (const [key, value] of Object.entries(data)) {
			// console.log(`${key}: ${value}`);
			formData.append(`${key}, ${value}`);
		}
		dispatch('submit', data)

	}
	const inputHandler = (e) =>{
		if (e.target == null){
			const val = e.detail[1]
			const name = e.detail[2].element.name
			data = {...data, [name] : val}
		}else{
			const val = e.target.value
			const name = e.target.name	
			data = {...data, [name] : val}
		}
	}

</script>

<div class="mt-10 sm:mt-0 mb-4">
	<div class="md:grid md:grid-cols-2 md:gap-6">
	  	<div class="mt-5 md:mt-0 md:col-span-2">
			<form action="#" method="POST">
		  		<div class="shadow overflow-hidden sm:rounded-md">
					<div class="flex justify-between bg-white shadow border-b">
						<div class="px-4 py-3  text-left sm:px-6">
							<h2 class="text-xl font-bold  text-gray-600">
								Filter Data
							</h2>
						</div>
						<div class="px-4 py-3 bg-white text-right sm:px-6">
							<button on:click="{()=>dispatch('onClose','')}"   
								type="button"	
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Close
							</button>
						</div>
					</div>
					<form on:submit|preventDefault={submitHandler}>
						<div class="px-4 py-5 bg-white sm:p-6">
							<div class="grid grid-cols-6 gap-6">
								{#each config as field (field.name)}
									{#if field.type != 'date'}
									<div class="col-span-6 sm:col-span-3">
										<label for="name" class="h-6 block text-sm font-medium text-gray-700">{field.label}</label>
										<input 
											placeholder="Masukan {field.label}" 
											type="{field.type}" 
											name={field.name}
											class="h-10 w-full focus:outline-none inline-flex items-center px-3 rounded-md border border-gray-300 border-gray-300 text-gray-500 text-sm"
											value={values[field.name]}
											on:input="{inputHandler}"
										/>
									</div>
									{:else}
									<div class="col-span-6 sm:col-span-3">
										<label for="country" class="block text-sm font-medium text-gray-700">Date</label>
										<Flatpickr placeholder ="Select Date...." 
													options={field.option[0]} 
													class="mt-1 focus:outline-none h-10 w-full inline-flex items-center px-3 rounded-md border border-gray-300 border-gray-300 text-gray-500 text-sm"
													on:change="{inputHandler}"
													name="{field.name}" 
													/>	
									</div>
									{/if}
								{/each}	
							</div>
						</div>
						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Filter
							</button>
						</div>
					</form>
		  		</div>
			</form>
	  	</div>
	</div>
</div>