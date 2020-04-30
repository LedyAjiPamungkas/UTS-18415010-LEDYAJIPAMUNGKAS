<template>
 <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Tambah Data RDTA Vapor" to="/admin/inputdatavapor"/>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode RDTA',
          align: 'left',
          field: row => row.kodeRdta,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'NamaRdta', align: 'center', label: 'Nama RDTA', field: 'NamaRdta', sortable: true },
        { name: 'Harga', align: 'center', label: 'Harga', field: 'Harga', sortable: true },
        { name: 'TahunProduksi', align: 'center', label: 'Tahun Produksi', field: 'TahunProduksi' }
      ],
      data: [
        {
          kodeRdta: 'RT001',
          NamaRdta: 'Drop Dead',
          Harga: 'Rp.150.000,-',
          TahunProduksi: '2019'
        },
        {
          kodeRdta: 'RT002',
          NamaRdta: 'Drop RDA DIGI FLAVOUR',
          Harga: 'Rp.300.000,-',
          TahunProduksi: '2017'
        },
        {
          kodeRdta: 'RT003',
          NamaRdta: 'NEKMEXH SUBHOM',
          Harga: 'Rp.250.000,-',
          TahunProduksi: '2017'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
