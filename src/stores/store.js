import {writable} from 'svelte/store'

export const menus = [
    {
        id:1,
        name:'Dashboard', 
        icon:"home", 
        code:'dashboard', 
        kategori:'dashboard', 
        idOpen:false, 
        child:[], 
        ket:'Halman Dashboard'},
    {   
        id:2,
        name:'Manajemen data siswa', 
        icon:"tasks",
        code:'',
        kategori:'',
        isOpen:false, 
        child:[
            {name:'Data Siswa', code:'datasiswa',kategori:'Manajemen data siswa', ket:'Halaman Untuk Mengolah Data Siswa'},
            {name:'Walikelas', code:'walikelas',kategori:'Manajemen data siswa', ket:'Halaman Untuk Mengolah Data Walikelas'},
            {name:'Walikelas Siswa', code:'walikelassiswa',kategori:'Manajemen data siswa', ket:'Halaman Untuk Mengolah Data Walikelas Siswa'},
            {name:'Pengaturan Kenaikan kelas', code:'pengaturankenaikankelas',kategori:'Manajemen data siswa', ket:'Halaman Untuk Mengolah Data Pengaturan Kenaikan kelas'},
            {name:'Pengaturan Kelulusan', code:'pengaturankelulusan',kategori:'Manajemen data siswa', ket:'Halaman Untuk Mengolah Data Pengaturan Kelulusan'},
        ],
        ket:'',
    },
    {   
        id:3,
        name:'Buku Pantau', 
        icon:"book",
        code:'bukupantau',
        kategori:'Buku Pantau',
        isOpen:false, 
        child:[],
        ket:'Halaman Untuk Mengolah Data Buku Pantau'
    },
    {   
        id:4,
        name:'Pembinaan siswa', 
        icon:"user-graduate",
        code:'',
        kategori:'',
        isOpen:false, 
        child:[
            {name:'Pendidikan Karakter', code:'pendidikankarakter',kategori:'Pembinaan siswa', ket:'Halaman Untuk Mengolah Pendidikan karakter'},
            {name:'Ekstrakurikuler', code:'ekstrakurikuler',kategori:'Pembinaan siswa', ket:'Halaman Untuk Mengolah Ekstrakurikuler'},
            {name:'Olimpiade', code:'olimpiade',kategori:'Pembinaan siswa', ket:'Halaman Untuk Mengolah Olimpiade'},
        ],
        ket:''
    },
    {   
        id:5,
        name:'Riwayat siswa', 
        icon:"street-view",
        code:'',
        kategori:'',
        isOpen:false, 
        child:[
            {name:'Riwayat kesehatan', code:'riwayatkesehatan',kategori:'Riwayat siswa', ket:'Halaman Untuk Mengolah Riwayat kesehatan'},
            {name:'Riwayat prestasi', code:'riwayatprestasi',kategori:'Riwayat siswa', ket:'Halaman Untuk Mengolah Riwayat prestasi'},
            {name:'Riwayat konseling', code:'riwayatkonseling',kategori:'Riwayat siswa', ket:'Halaman Untuk Mengolah Riwayat konseling'},
        ],
        ket:''
    },
    {   
        id:6,
        name:'Laporan', 
        icon:"clipboard",
        code:'',
        kategori:'',
        isOpen:false, 
        child:[
            {name:'Absensi siswa', code:'absensisiswa',kategori:'Laporan', ket:'Halaman Untuk Mengolah Absensi siswa'},
            {name:'Rekap buku pantau', code:'rekapbukupantau',kategori:'Laporan', ket:'Halaman Untuk Mengolah Rekap buku pantau'},
            {name:'Lap Kenaikan kelas', code:'lapkenaikankelas',kategori:'Laporan', ket:'Halaman Untuk Mengolah Lap Kenaikan kelas'},
            {name:'Lap Kelulusan', code:'lapkelulusan',kategori:'Laporan', ket:'Halaman Untuk Mengolah Lap Kelulusan'},
        ],
        ket:''
    }
]
const menuStoreFn = () => {
    // const selectedMenu = {name:'Dashboard', icon:"home", code:'dashboard',ket:'Halman Dashboard'}
    const selectedMenu = {name:'Data Siswa', code:'datasiswa',kategori:'Manajemen data siswa', ket:'Halaman Untuk Mengolah Data Siswa'}
    const {subscribe, set} = writable(selectedMenu)
    const selectMenu = (menu) => set(menu)
    return {
        subscribe,
        selectMenu
    }
} 

const toogleSidebarStoreFn = () => {
    let status = true;
    const {subscribe, set,update} = writable(status)
    const openMenu = () => set(status = true)
    const closeMenu = () => set(status = false)
    return {
        subscribe,
        openMenu,
        closeMenu
    }
}

const statusSieberFn = () => {
    let status = true;
    const {subscribe, set,update} = writable(status)
    const statusTrue = () => set(status = true)
    const statusFalse = () => set(status = false)
    return {
        subscribe,
        statusTrue,
        statusFalse
    }
}

const toogleSidebarStoreMiniFn = () => {
    let status = false;
    const {subscribe, set,update} = writable(status)
    const openMenu = () => set(status = true)
    const closeMenu = () => set(status = false)
    return {
        subscribe,
        openMenu,
        closeMenu
    }
}

export let sidebarStore = toogleSidebarStoreFn()
export let sidebarStoreMini = toogleSidebarStoreMiniFn()
export let statusSieber = statusSieberFn()
export let menuStore = menuStoreFn()