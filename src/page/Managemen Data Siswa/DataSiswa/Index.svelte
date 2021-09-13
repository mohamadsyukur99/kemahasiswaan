<svelte:head>
    <title>{$menuStore.name}</title>
</svelte:head>
<script>
	import { FormFilter, tabelHeader, tabelData, FormEditor } from './config.js';
	import Filter from '../../../component/Filter/Filter.svelte';
    import Table from './Table.svelte';
    import PageHeading from '../../../component/PageHeading/PageHeading.svelte';
    import FormUser from './Form.svelte';
    import { menuStore } from './../../../stores/store';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getNotificationsContext } from 'svelte-notifications';

    const { addNotification } = getNotificationsContext();

    const Notification  = (text, type) =>{
        addNotification({
            text: text,
            type: type,
            position: 'top-right',
            removeAfter: 4000,
        })
    }

    let isForm = false;
    let isFilter = true;
    let dataFilter = {noinduk:"",nama:"",tanggal:"",tanggal2:""}
    let dataEditor = {noinduk:"d",nama:"c",tanggal:"2021-01-01",tanggal2:"2021-01-01 to 2021-01-02",coutry:"1",hobby:['1','2'],gender:"2"}

    const submitFormEditor = async (e) =>{
        // let res = await axios.post("http://localhost/upload-file/api-file-upload.php", e.detail);
        // console.log(res.data);
    } 

    onMount(()=>{
        Notification('tes notif','success')
    })
</script>
<div>
    <PageHeading/>
    <!-- <div class="p-7 w-full  h-full bg-grsay-100">
        {#if isForm}
            <FormUser 
                values={dataEditor}
                config={FormEditor}
                on:onClose={()=>isForm = !isForm}
                on:submit={submitFormEditor}
            />
        {:else}
            {#if isFilter}
            <div transition:fade>
                <Filter 
                    config ={FormFilter}
                    values={dataFilter}
                    on:onClose={()=>isFilter =  !isFilter}
                    on:submit={(e)=>dataFilter = {...dataFilter, ...e.detail}}
                />
            </div>
            {/if}
            <Table 
                headers={tabelHeader}
                data={tabelData}
                on:onFilter={()=>isFilter =  !isFilter}
                on:onForm={()=>isForm = !isForm}
            />
        {/if}
    </div> -->
</div>